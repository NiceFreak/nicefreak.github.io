import { buildSeason1Result, buildSeason2Result } from "./local-scoring.js";

const STORAGE_KEY = "community-local-results-v1";
const MAX_RESULTS = 20;

function readResults() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

function writeResult(result) {
  const results = readResults();
  results[result.publicResultId] = result;

  const retained = Object.fromEntries(
    Object.entries(results)
      .sort(([, left], [, right]) =>
        String(right.createdAt).localeCompare(String(left.createdAt)),
      )
      .slice(0, MAX_RESULTS),
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(retained));
}

function findResult(idOrReferralCode) {
  const results = readResults();
  return (
    results[idOrReferralCode] ??
    Object.values(results).find(
      (result) => result.referralCode === idOrReferralCode,
    ) ??
    null
  );
}

function requireResult(idOrReferralCode) {
  const result = findResult(idOrReferralCode);
  if (!result)
    throw new Error(
      "로컬 결과를 찾을 수 없습니다. / 未找到本地保存的测试结果。",
    );
  return result;
}

function compareResults(leftId, rightId) {
  const left = requireResult(leftId);
  const right = requireResult(rightId);

  const rightAxes = new Map(right.axes.map((axis) => [axis.id, axis]));
  const differences = left.axes.map((axis) => ({
    axis: axis.id,
    points: Math.abs(axis.leftPercent - rightAxes.get(axis.id).leftPercent),
  }));

  return {
    left,
    right,
    differences,
  };
}

window.__communityLocalApi = {
  async prepareAppCheck() {
    return null;
  },

  async submit(payload, requestId) {
    const publicResultId = requestId || crypto.randomUUID();
    const builders = {
      "season-1": buildSeason1Result,
      "season-2": buildSeason2Result,
    };
    const builder = builders[payload?.season];
    if (!builder) {
      throw new Error("지원하지 않는 시즌입니다. / 不支持该季测试。");
    }
    const result = builder(payload, publicResultId);
    writeResult(result);
    return result;
  },

  async result(publicResultId) {
    return requireResult(publicResultId);
  },

  async referral(referralCode) {
    return requireResult(referralCode);
  },

  async compare(leftId, rightId) {
    return compareResults(leftId, rightId);
  },
};
