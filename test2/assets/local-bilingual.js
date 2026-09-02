import { SEASON_2_TRANSLATIONS } from "./local-bilingual-data.js";
import {
  ATTRIBUTE_TRANSLATIONS,
  METADATA_TRANSLATIONS,
  RESULT_TERM_TRANSLATIONS,
  UI_TRANSLATION_ENTRIES,
  translateAxisId,
  translateResultType,
} from "./local-ui-translations.js";

const translationsByKorean = new Map(
  SEASON_2_TRANSLATIONS.map((translation) => [translation.korean, translation]),
);
const translationsById = new Map(
  SEASON_2_TRANSLATIONS.map((translation) => [translation.id, translation]),
);
const uiTranslations = new Map(
  UI_TRANSLATION_ENTRIES.map(([korean, chinese]) => [
    normalizeWhitespace(korean),
    chinese,
  ]),
);
const TEXT_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "li",
  "dt",
  "dd",
  "summary",
  "blockquote",
  "label",
  "button",
  "a",
  "span",
  "b",
  "strong",
  "small",
  ".sending",
].join(",");

function normalizeWhitespace(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function sourceText(element) {
  if (!element) return "";

  function read(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent;
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    if (node.matches(".local-translation, #local-a11y-labels")) return "";
    if (node.tagName === "BR") return " ";
    return [...node.childNodes].map(read).join("");
  }

  return normalizeWhitespace(read(element));
}

function translationMode(element) {
  if (element.matches("h1, h2, h3, h4, blockquote")) return "heading";
  if (element.closest("button, .button") || element.matches("button, .button"))
    return "control";
  if (
    element.matches(
      ".site-header nav a, .axis-list span, .season-intro dt, .season-intro dd",
    )
  ) {
    return "inline";
  }
  if (element.matches("dt, summary, label, b, strong, small")) return "label";
  return "body";
}

function ensureTranslation(
  element,
  chinese,
  { mode = translationMode(element), source } = {},
) {
  if (!element || !chinese) return;

  const korean = normalizeWhitespace(source ?? sourceText(element));
  if (korean) {
    element.dataset.localSource = korean;
    element.lang = "ko";
  }
  element.classList.add("local-has-translation");

  let translation = [...element.children].find((child) =>
    child.classList.contains("local-translation"),
  );
  if (!translation) {
    translation = document.createElement("span");
    translation.className = "local-translation";
    translation.lang = "zh-CN";
    element.append(translation);
  }

  const displayedChinese = mode === "inline" ? ` / ${chinese}` : chinese;
  translation.className = `local-translation local-translation--${mode}`;
  if (translation.textContent !== displayedChinese)
    translation.textContent = displayedChinese;
}

function translateDynamicText(source, element) {
  if (element.matches(".season-intro dt") && source === "문항") return "题数";

  const questionCount = source.match(/^(\d+)문항$/);
  if (questionCount) return `${questionCount[1]}题`;

  const resultType = translateResultType(source);
  if (resultType) return resultType;

  const sideAndResult = source.match(/^([AB]) \/ (.+)$/);
  if (sideAndResult) {
    const translated = translateResultType(sideAndResult[2]);
    if (translated) return `${sideAndResult[1]} / ${translated}`;
  }

  const axis = translateAxisId(source);
  if (axis) return axis;

  const namedResult = source.match(/^(.+)의 결과$/);
  if (namedResult) return `${namedResult[1]}的结果`;

  const seasonOneResult = source.match(/^(.+)님의 사상검증 결과$/);
  if (seasonOneResult) return `${seasonOneResult[1]}的思想验证结果`;

  const namedReferral = source.match(
    /^(.+)의 손과 당신의 손은 얼마나 다를까\.$/,
  );
  if (namedReferral) return `${namedReferral[1]}的手，与你的手，会有多大不同？`;

  return null;
}

function lookupTextTranslation(source, element) {
  const exact = uiTranslations.get(source);
  if (exact) return exact;

  if (source.startsWith("※ ")) {
    const withoutMarker = uiTranslations.get(source.slice(2));
    if (withoutMarker) return `※ ${withoutMarker}`;
  }

  return translateDynamicText(source, element);
}

function decorateGenericText() {
  const candidates = [...document.querySelectorAll(TEXT_SELECTOR)].filter(
    (element) =>
      !element.matches(".local-translation") &&
      !element.closest("#local-a11y-labels") &&
      !element.closest(".local-result-dimensions") &&
      !element.closest(".season-two-result-dimensions") &&
      !element.closest(".question"),
  );
  const matches = candidates
    .map((element) => {
      const source = sourceText(element);
      return {
        element,
        source,
        chinese: lookupTextTranslation(source, element),
      };
    })
    .filter(({ chinese }) => chinese);
  const matchedElements = new Set(matches.map(({ element }) => element));

  for (const match of matches) {
    if (
      [...matchedElements].some(
        (ancestor) =>
          ancestor !== match.element && ancestor.contains(match.element),
      )
    ) {
      continue;
    }
    ensureTranslation(match.element, match.chinese, { source: match.source });
  }
}

function decorateGate() {
  const input = document.querySelector(".gate input");
  if (input) input.placeholder = "이름 (선택) / 姓名（选填）";
}

function decorateQuestion() {
  const question = document.querySelector(".test-shell--two .question");
  if (!question) return;

  const heading = question.querySelector("h1");
  if (!heading) return;

  const korean = sourceText(heading)
    .replace(/^Q\.\s*/, "")
    .trim();
  const translation = translationsByKorean.get(korean);
  let chinese = question.querySelector(":scope > .question__translation");

  if (!translation) {
    chinese?.remove();
    question.classList.remove("question--bilingual");
    return;
  }

  heading.lang = "ko";
  heading.dataset.questionId = translation.id;
  question.classList.add("question--bilingual");

  if (!chinese) {
    chinese = document.createElement("p");
    chinese.className = "question__translation";
    chinese.lang = "zh-CN";
    heading.insertAdjacentElement("afterend", chinese);
  }
  if (
    chinese.dataset.questionId !== translation.id ||
    chinese.textContent !== translation.chinese
  ) {
    chinese.dataset.questionId = translation.id;
    chinese.textContent = translation.chinese;
  }

  question.querySelectorAll(".answers--2 button").forEach((button) => {
    const mark = button.querySelector("b")?.textContent.trim();
    const label = button.querySelector("span");
    const answerChinese =
      mark === "O" ? "同意" : mark === "×" || mark === "X" ? "不同意" : null;
    if (label && answerChinese)
      ensureTranslation(label, answerChinese, { mode: "control" });
  });

  const backButton = question.querySelector("button.back");
  if (backButton)
    ensureTranslation(backButton, "← 上一题", { mode: "control" });

  const sending = question.querySelector(".sending");
  if (sending) ensureTranslation(sending, "正在计算结果…", { mode: "body" });

  const retry = question.querySelector(".error button");
  if (retry) ensureTranslation(retry, "重试", { mode: "inline" });
}

function decorateAdminQuestionBank() {
  document.querySelectorAll(".admin-question-set li").forEach((item) => {
    const id = item.querySelector("b")?.textContent.trim();
    const prompt = item.querySelector("p");
    const translation = translationsById.get(id);
    if (prompt && translation) {
      ensureTranslation(prompt, translation.chinese, {
        mode: "body",
        source: translation.korean,
      });
    }
  });
}

function decorateResultDimensions() {
  document.querySelectorAll(".season-two-result-figure").forEach((figure) => {
    figure.querySelector(":scope > .local-result-dimensions")?.remove();

    figure
      .querySelectorAll(".season-two-result-dimensions > li")
      .forEach((item) => {
        const opposite = sourceText(
          item.querySelector(".result-dimension-labels__opposite"),
        ).replace(/보다$/, "");
        const dominant = sourceText(
          item.querySelector(".result-dimension-labels b"),
        );
        const score = sourceText(item.querySelector(":scope > strong")).replace(
          /점$/,
          "",
        );
        const translatedOpposite = RESULT_TERM_TRANSLATIONS[opposite];
        const translatedDominant = RESULT_TERM_TRANSLATIONS[dominant];
        let translation = item.querySelector(
          ":scope > .local-result-dimension-translation",
        );

        if (!translatedOpposite || !translatedDominant || !score) {
          translation?.remove();
          return;
        }

        const chinese = `相较于“${translatedOpposite}”，更偏向“${translatedDominant}”｜${score}分`;
        if (!translation) {
          translation = document.createElement("span");
          translation.className =
            "local-translation local-result-dimension-translation";
          translation.lang = "zh-CN";
          item.append(translation);
        }
        if (translation.textContent !== chinese)
          translation.textContent = chinese;
      });
  });
}

let labelSequence = 0;
function ensureA11yContainer() {
  let container = document.querySelector("#local-a11y-labels");
  if (!container) {
    container = document.createElement("div");
    container.id = "local-a11y-labels";
    container.className = "local-sr-only";
    document.body.append(container);
  }
  return container;
}

function ensureBilingualAccessibleName(element, korean, chinese) {
  let labelId = element.dataset.localA11yLabel;
  let label = labelId ? document.getElementById(labelId) : null;
  if (!label) {
    labelId = `local-a11y-label-${++labelSequence}`;
    label = document.createElement("span");
    label.id = labelId;
    label.append(
      Object.assign(document.createElement("span"), {
        lang: "ko",
        textContent: korean,
      }),
      Object.assign(document.createElement("span"), {
        lang: "zh-CN",
        textContent: ` / ${chinese}`,
      }),
    );
    ensureA11yContainer().append(label);
    element.dataset.localA11yLabel = labelId;
  }
  element.setAttribute("aria-labelledby", labelId);
  element.removeAttribute("aria-label");
}

function decorateAttributes() {
  document.querySelectorAll("[aria-label]").forEach((element) => {
    const korean = element.getAttribute("aria-label");
    const chinese =
      ATTRIBUTE_TRANSLATIONS[korean] ??
      uiTranslations.get(normalizeWhitespace(korean));
    if (chinese) ensureBilingualAccessibleName(element, korean, chinese);
  });

  document.querySelectorAll("img[alt]").forEach((image) => {
    const source = image.dataset.localAltSource || image.alt;
    const chinese = ATTRIBUTE_TRANSLATIONS[source];
    if (!chinese) return;
    image.dataset.localAltSource = source;
    image.alt = `${source} / ${chinese}`;
  });

  document
    .querySelectorAll(".season-intro h1[data-local-a11y-label]")
    .forEach((heading) => {
      const label = document.getElementById(heading.dataset.localA11yLabel);
      const korean = label?.querySelector('[lang="ko"]')?.textContent;
      const chinese = korean
        ? (ATTRIBUTE_TRANSLATIONS[korean] ??
          uiTranslations.get(normalizeWhitespace(korean)))
        : null;
      if (chinese)
        ensureTranslation(heading, chinese, {
          mode: "heading",
          source: korean,
        });
    });
}

function bilingualMetadata(value) {
  const chinese = METADATA_TRANSLATIONS[value];
  return chinese ? `${value} / ${chinese}` : value;
}

function decorateMetadata() {
  const title = bilingualMetadata(document.title);
  if (title !== document.title) document.title = title;
  document
    .querySelectorAll(
      'meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]',
    )
    .forEach((meta) => {
      const bilingual = bilingualMetadata(meta.content);
      if (bilingual !== meta.content) meta.content = bilingual;
    });
}

let updateScheduled = false;
function scheduleDecoration() {
  if (updateScheduled) return;
  updateScheduled = true;
  queueMicrotask(() => {
    updateScheduled = false;
    decorateGate();
    decorateQuestion();
    decorateAdminQuestionBank();
    decorateResultDimensions();
    decorateGenericText();
    decorateAttributes();
    decorateMetadata();
  });
}

new MutationObserver(scheduleDecoration).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["content"],
  childList: true,
  characterData: true,
  subtree: true,
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", scheduleDecoration, {
    once: true,
  });
} else {
  scheduleDecoration();
}
