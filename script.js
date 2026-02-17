/*************************
 * CONFIG
 *************************/
const QUESTIONS = [
  // MIND
  { text: "معمولاً ذهنت آرام است؟", dimension: "mind" },
  { text: "می‌توانی افکارت را مدیریت کنی؟", dimension: "mind" },
  { text: "استرس را خوب کنترل می‌کنی؟", dimension: "mind" },
  { text: "در لحظه حال حضور داری؟", dimension: "mind" },
  { text: "با احساساتت آشتی هستی؟", dimension: "mind" },

  // GOAL
  { text: "هدفت در زندگی شفاف است؟", dimension: "goal" },
  { text: "برای آینده برنامه داری؟", dimension: "goal" },
  { text: "تصمیم‌هایت هدفمندند؟", dimension: "goal" },
  { text: "می‌دانی چه می‌خواهی؟", dimension: "goal" },
  { text: "پیشرفتت را می‌سنجی؟", dimension: "goal" },

  // HABIT
  { text: "عادت‌های مثبتی داری؟", dimension: "habit" },
  { text: "پایبند به روتین هستی؟", dimension: "habit" },
  { text: "کارها را عقب نمی‌اندازی؟", dimension: "habit" },
  { text: "استمرار داری؟", dimension: "habit" },
  { text: "خودکنترلی خوبی داری؟", dimension: "habit" },

  // SELF
  { text: "خودت را خوب می‌شناسی؟", dimension: "self" },
  { text: "نقاط قوتت را می‌دانی؟", dimension: "self" },
  { text: "نقاط ضعفت را پذیرفته‌ای؟", dimension: "self" },
  { text: "با خودت صادقی؟", dimension: "self" },
  { text: "خودت را دوست داری؟", dimension: "self" }
];

const DIMENSIONS = {
  mind:  { label: "ذهن", importance: 1.1 },
  goal:  { label: "هدف", importance: 1.3 },
  habit: { label: "عادت", importance: 1.4 },
  self:  { label: "خودشناسی", importance: 1.5 }
};

/*************************
 * STATE
 *************************/
let currentQuestion = 0;
let answers = [];

/*************************
 * DOM
 *************************/
const cardArea = document.getElementById("card-area");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

/*************************
 * INIT
 *************************/
renderQuestion();

/*************************
 * EVENTS
 *************************/
sendBtn.addEventListener("click", submitAnswer);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") submitAnswer();
});

/*************************
 * QUESTION FLOW
 *************************/
function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">
        سوال ${currentQuestion + 1} از ${QUESTIONS.length}
      </div>
      <div class="question-text">${q.text}</div>
    </div>
  `;
  input.value = "";
  input.focus();
}

function submitAnswer() {
  const value = Number(input.value);
  if (value < 1 || value > 10) return;

  answers.push({
    dimension: QUESTIONS[currentQuestion].dimension,
    value
  });

  currentQuestion++;

  if (currentQuestion < QUESTIONS.length) {
    renderQuestion();
  } else {
    showResults(analyzeAssessment());
  }
}

/*************************
 * ANALYSIS
 *************************/
function analyzeAssessment() {
  const data = {};
  Object.keys(DIMENSIONS).forEach(k => {
    data[k] = {
      sum: 0,
      count: 0,
      importance: DIMENSIONS[k].importance
    };
  });

  answers.forEach(a => {
    data[a.dimension].sum += a.value;
    data[a.dimension].count++;
  });

  let weightedSum = 0;
  let importanceSum = 0;

  Object.keys(DIMENSIONS).forEach(k => {
    const avg10 = data[k].sum / data[k].count;
    const score100 = Math.round(avg10 * 10);

    data[k].score = score100;
    data[k].priority =
      Math.round(data[k].importance * (100 - score100));

    weightedSum += score100 * data[k].importance;
    importanceSum += data[k].importance;
  });

  data.overallScore = Math.round(weightedSum / importanceSum);
  data.responseType = detectResponseType(data);

  return data;
}

function detectResponseType(data) {
  const scores = Object.keys(DIMENSIONS).map(k => data[k].score);
  const avg = scores.reduce((a,b)=>a+b,0) / scores.length;
  const variance =
    scores.reduce((a,b)=>a + Math.pow(b-avg,2),0) / scores.length;
  const spread = Math.max(...scores) - Math.min(...scores);

  if (avg < 50) return "سخت‌گیر با خود";
  if (variance < 80) return "متعادل و پایدار";
  if (spread > 40) return "نوسانی";
  return "ایده‌آل‌گرا";
}

/*************************
 * COACH LOGIC
 *************************/
function getCoachInsight(data) {
  const selfScore = data.self.score;

  let state;
  let message;

  if (selfScore < 70) {
    state = "STABILIZE";
    message =
      "الان مهم‌ترین قدم تو، آرام‌سازی و خودشناسیه. لازم نیست خودتو هل بدی؛ اول باید زمین زیر پات سفت بشه.";
  } else if (selfScore < 85) {
    state = "BUILD";
    message =
      "پایه‌ی خودشناسی‌ت خوبه. می‌تونیم همزمان با حفظ آرامش، روی رشد تدریجی یکی از بخش‌ها کار کنیم.";
  } else {
    state = "EXECUTE";
    message =
      "خودشناسی‌ت در سطح بالاییه. بهترین کار الان تمرکز مستقیم روی ضعیف‌ترین بُعد و رشد هدفمنده.";
  }

  const focusKey =
    Object.keys(DIMENSIONS)
      .filter(k => k !== "self")
      .sort((a,b)=>data[b].priority - data[a].priority)[0];

  return {
    state,
    message,
    focusKey,
    focusLabel: DIMENSIONS[focusKey].label
  };
}

/*************************
 * RESULT UI
 *************************/
function showResults(data) {
  const coach = getCoachInsight(data);

  let html = `<div class="question-card">`;

  Object.keys(DIMENSIONS).forEach(k => {
    html += `
      <div class="result-row">
        <div class="result-label">
          ${DIMENSIONS[k].label} — ${data[k].score}%
        </div>
        <div class="progress">
          <div class="progress-fill" style="--value:${data[k].score}%"></div>
        </div>
      </div>
    `;
  });

  html += `
    <hr style="margin:20px 0">

    <div class="result-row">
      <strong>🎯 امتیاز کل:</strong> ${data.overallScore}%
    </div>

    <div class="result-row">
      <strong>🧠 تیپ پاسخ‌دهی:</strong> ${data.responseType}
    </div>

    <hr style="margin:20px 0">

    <div class="result-row">
      <strong>👤 Coach:</strong><br>
      ${coach.message}
    </div>

    <div class="result-row">
      <strong>🎯 تمرکز پیشنهادی:</strong>
      ${coach.focusLabel}
    </div>

    <button
      onclick="startCoachProgram('${coach.focusKey}')"
      style="
        margin-top:20px;
        width:100%;
        padding:14px;
        border:none;
        border-radius:16px;
        font-weight:bold;
        cursor:pointer;
        color:white;
        background:linear-gradient(135deg,#ff8c1a,#ffb703);
        box-shadow:0 12px 30px rgba(255,140,26,0.4);
      "
    >
      🚀 ورود به برنامه رشد شخصی
    </button>
  `;

  html += `</div>`;

  cardArea.innerHTML = html;
  document.getElementById("input-area").style.display = "none";
}

/*************************
 * PROGRAM ENTRY
 *************************/
function startCoachProgram(focusKey) {
  console.log("Start program for:", focusKey);
  alert("مرحله بعد: ورود به برنامه عملی (" + DIMENSIONS[focusKey].label + ")");
}
