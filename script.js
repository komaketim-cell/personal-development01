// ===============================
// CONFIG
// ===============================

const DIMENSIONS = {
  mind: {
    label: "ذهن و احساسات",
    importance: 1.3
  },
  goal: {
    label: "هدف و انگیزه",
    importance: 1.1
  },
  habit: {
    label: "نظم و عادت‌ها",
    importance: 1.2
  },
  self: {
    label: "خودشناسی",
    importance: 1.0
  }
};

// وزن سوال‌ها (قابل توسعه)
const QUESTION_WEIGHT = 1;

// ===============================
// INPUT
// ===============================
// answers = [{ value: 1-10, dimension: "mind" }, ...]

function analyzeAssessment(answers) {
  const dimensionData = initDimensions();
  const allValues = [];

  // ===============================
  // COLLECT DATA
  // ===============================
  answers.forEach(a => {
    dimensionData[a.dimension].sum += a.value * QUESTION_WEIGHT;
    dimensionData[a.dimension].count += QUESTION_WEIGHT;
    dimensionData[a.dimension].values.push(a.value);
    allValues.push(a.value);
  });

  // ===============================
  // SCORE CALCULATION (0-100)
  // ===============================
  Object.keys(dimensionData).forEach(key => {
    const d = dimensionData[key];
    const avg = d.sum / d.count;        // 1–10
    d.score = Math.round(avg * 10);     // 0–100
    d.priority =
      Math.round((100 - d.score) * DIMENSIONS[key].importance);
  });

  // ===============================
  // FIND GROWTH PRIORITY
  // ===============================
  const growthDimension = Object.keys(dimensionData)
    .sort((a, b) => dimensionData[b].priority - dimensionData[a].priority)[0];

  // ===============================
  // RESPONSE PATTERN DETECTION
  // ===============================
  const responseProfile = detectResponseProfile(allValues);

  return {
    scores: dimensionData,
    growthDimension,
    responseProfile
  };
}

// ===============================
// HELPERS
// ===============================

function initDimensions() {
  return {
    mind: { sum: 0, count: 0, score: 0, priority: 0, values: [] },
    goal: { sum: 0, count: 0, score: 0, priority: 0, values: [] },
    habit:{ sum: 0, count: 0, score: 0, priority: 0, values: [] },
    self: { sum: 0, count: 0, score: 0, priority: 0, values: [] }
  };
}

// ===============================
// RESPONSE TYPE DETECTION
// ===============================

function detectResponseProfile(values) {
  const avg = mean(values);
  const variance = stdDeviation(values);
  const min = Math.min(...values);
  const max = Math.max(...values);

  // مردد
  if (avg >= 4 && avg <= 6 && variance < 1.5) {
    return {
      type: "مردد",
      insight:
        "تمایل داری در منطقه امن بمانی و به خودت سخت نگیری. نیاز به اعتماد به تصمیم‌گیری داری."
    };
  }

  // کمال‌گرا
  if (avg > 8 && min >= 7) {
    return {
      type: "کمال‌گرا",
      insight:
        "استانداردهای بالایی داری و گاهی به خودت فشار بیش از حد می‌آوری."
    };
  }

  // نوسانی
  if (variance > 6) {
    return {
      type: "نوسانی",
      insight:
        "احساسات و تمرکزت در بازه‌های مختلف تغییر زیادی می‌کند. ثبات برایت کلیدی است."
    };
  }

  // فرسوده
  if (avg < 4 && max <= 5) {
    return {
      type: "فرسوده",
      insight:
        "احتمالاً خستگی ذهنی یا بی‌انگیزگی داری و نیاز به بازیابی انرژی داری."
    };
  }

  // متعادل
  return {
    type: "متعادل",
    insight:
      "تصویر نسبتاً واقع‌بینانه‌ای از خودت داری و آمادگی رشد تدریجی در تو بالاست."
  };
}

// ===============================
// MATH
// ===============================

function mean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function stdDeviation(arr) {
  const avg = mean(arr);
  const squareDiffs = arr.map(v => Math.pow(v - avg, 2));
  return Math.sqrt(mean(squareDiffs));
}
