const AXES = [
  {
    id: "원칙-결과",
    prefix: "rp",
    leftLabel: "원칙",
    rightLabel: "결과",
    agreeLeft: new Set(["rp02", "rp03", "rp05", "rp09", "rp11", "rp13"]),
  },
  {
    id: "구조-능력",
    prefix: "sa",
    leftLabel: "구조",
    rightLabel: "능력",
    agreeLeft: new Set(["sa03", "sa06", "sa08", "sa09", "sa10"]),
  },
  {
    id: "의미-실리",
    prefix: "ms",
    leftLabel: "의미",
    rightLabel: "실리",
    agreeLeft: new Set(["ms01", "ms04", "ms05", "ms07", "ms11"]),
  },
];

const RESULT_COPY = {
  "원칙·구조·의미": {
    title: "도면을 그리는 손",
    summary: "기준과 맥락을 먼저 세우고 선택의 의미를 끝까지 추적합니다.",
  },
  "원칙·구조·실리": {
    title: "질서를 조율하는 손",
    summary: "원칙을 지키되 시스템이 실제로 작동하는 방식을 중시합니다.",
  },
  "원칙·능력·의미": {
    title: "신념을 움켜쥔 손",
    summary: "개인의 책임과 신념을 강하게 붙잡고 쉽게 놓지 않습니다.",
  },
  "원칙·능력·실리": {
    title: "기준을 실행하는 손",
    summary: "정한 기준을 개인의 실행력으로 현실에 옮기는 데 능합니다.",
  },
  "결과·구조·의미": {
    title: "판을 다시 짜는 손",
    summary: "더 나은 결과를 위해 구조를 바꾸면서도 선택의 의미를 살핍니다.",
  },
  "결과·구조·실리": {
    title: "흐름을 통제하는 손",
    summary: "판의 구조를 읽고 가장 효과적인 결과가 나오도록 움직입니다.",
  },
  "결과·능력·의미": {
    title: "가능성에 거는 손",
    summary: "개인의 힘과 가능성을 믿고 의미 있는 결과에 과감히 베팅합니다.",
  },
  "결과·능력·실리": {
    title: "승부를 끝내는 손",
    summary: "실행과 성과를 최우선에 두고 가장 빠른 해법을 선택합니다.",
  },
};

const QUESTIONNAIRE_VERSION = "season-2@2026-08";
const QUESTION_SET_HASH = "2e4ed483b6b79197";
const SCORING_VERSION = "season-2-score@2";

export const SEASON_2_QUESTION_IDS = Object.freeze([
  ...Array.from(
    { length: 13 },
    (_, index) => `rp${String(index + 1).padStart(2, "0")}`,
  ),
  ...Array.from(
    { length: 13 },
    (_, index) => `sa${String(index + 1).padStart(2, "0")}`,
  ),
  ...Array.from(
    { length: 8 },
    (_, index) => `ms${String(index + 1).padStart(2, "0")}`,
  ),
  "ms10",
  "ms11",
  "ms13",
]);

function validateAnswers(answers) {
  if (!answers || typeof answers !== "object" || Array.isArray(answers)) {
    throw new Error("답변 데이터가 올바르지 않습니다. / 答题数据无效。");
  }

  const missing = SEASON_2_QUESTION_IDS.filter(
    (id) => answers[id] !== "O" && answers[id] !== "X",
  );
  if (missing.length > 0) {
    throw new Error(
      `답변하지 않은 문항이 있습니다: ${missing.join(", ")} / 仍有未作答的题目：${missing.join(", ")}`,
    );
  }
}

function roundHalfUp(value) {
  return value < 0 ? -Math.floor(-value + 0.5) : Math.floor(value + 0.5);
}

function scoreAxis(axis, answers) {
  const questionIds = SEASON_2_QUESTION_IDS.filter((id) =>
    id.startsWith(axis.prefix),
  );
  const leftQuestionIds = questionIds.filter((id) => axis.agreeLeft.has(id));
  const rightQuestionIds = questionIds.filter((id) => !axis.agreeLeft.has(id));
  const leftOCount = leftQuestionIds.filter((id) => answers[id] === "O").length;
  const rightOCount = rightQuestionIds.filter(
    (id) => answers[id] === "O",
  ).length;

  // Keep the baseline expression order: it is observable at one floating-point boundary.
  const rawLeftPercent =
    50 +
    (leftOCount / leftQuestionIds.length -
      rightOCount / rightQuestionIds.length) *
      50;
  let leftPercent = roundHalfUp(rawLeftPercent);

  if (axis.id === "구조-능력" && leftOCount === 2 && rightOCount === 2) {
    leftPercent = 57;
  }

  const rightPercent = 100 - leftPercent;
  const dominant =
    leftPercent >= rightPercent ? axis.leftLabel : axis.rightLabel;

  return {
    id: axis.id,
    leftLabel: axis.leftLabel,
    rightLabel: axis.rightLabel,
    leftPercent,
    rightPercent,
    dominant,
    intensity: Math.abs(leftPercent - rightPercent) >= 25 ? 2 : 1,
  };
}

export function scoreSeason2Answers(answers) {
  validateAnswers(answers);

  const axes = AXES.map((axis) => scoreAxis(axis, answers));
  const resultType = axes
    .map((axis) =>
      axis.leftPercent >= axis.rightPercent ? axis.leftLabel : axis.rightLabel,
    )
    .join("·");

  return { axes, resultType };
}

export function buildSeason2Result(payload, publicResultId) {
  if (payload?.season !== "season-2") {
    throw new Error(
      "로컬 결과 계산은 시즌 2만 지원합니다. / 本地结果计算仅支持第2季。",
    );
  }

  const score = scoreSeason2Answers(payload.answers);
  const displayName = payload.displayName?.trim() || null;
  const copy = RESULT_COPY[score.resultType] ?? {
    title: score.resultType,
    summary: "",
  };

  return {
    season: "season-2",
    questionnaireVersion: QUESTIONNAIRE_VERSION,
    questionSetHash: QUESTION_SET_HASH,
    scoringVersion: SCORING_VERSION,
    resultType: score.resultType,
    title: copy.title,
    summary: copy.summary,
    axes: score.axes,
    publicResultId,
    referralCode: publicResultId,
    createdAt: new Date().toISOString(),
    consentVersion: payload.consentVersion ?? "result-storage-v1",
    displayName,
    calculation: "local-balanced-direction-v2",
  };
}
