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
const inputArea = document.getElementById("input-area");
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
    data[k] = { sum: 0, count: 0, importance: DIMENSIONS[k].importance };
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
    data[k].priority = Math.round(data[k].importance * (100 - score100));
    weightedSum += score100 * data[k].importance;
    importanceSum += data[k].importance;
  });

  data.overallScore = Math.round(weightedSum / importanceSum);
  return data;
}

/*************************
 * COACH
 *************************/
function getCoachInsight(data) {
  const selfScore = data.self.score;

  let message;
  if (selfScore < 70) {
    message = "الان تمرکز اصلی روی آرامش و خودشناسیه. عجله نکن.";
  } else if (selfScore < 85) {
    message = "پایه خوبی داری. می‌تونیم رشد تدریجی رو شروع کنیم.";
  } else {
    message = "آماده‌ای روی رشد هدفمند کار کنی.";
  }

  const focusKey =
    Object.keys(DIMENSIONS)
      .filter(k => k !== "self")
      .sort((a,b)=>data[b].priority - data[a].priority)[0];

  return { message, focusKey };
}

/*************************
 * RESULTS UI
 *************************/
function showResults(data) {
  const coach = getCoachInsight(data);

  let html = `<div class="question-card">`;

  Object.keys(DIMENSIONS).forEach(k => {
    html += `
      <div class="result-row">
        ${DIMENSIONS[k].label}: ${data[k].score}%
      </div>
    `;
  });

  html += `
    <hr>
    <div><strong>🎯 امتیاز کل:</strong> ${data.overallScore}%</div>
    <hr>
    <div><strong>👤 Coach:</strong><br>${coach.message}</div>

    <button
      onclick="startCoachProgram()"
      style="margin-top:20px;width:100%;padding:14px;border:none;border-radius:16px;font-weight:bold;cursor:pointer;color:white;
      background:linear-gradient(135deg,#ff8c1a,#ffb703);">
      🚀 ورود به برنامه
    </button>
  `;

  html += `</div>`;
  cardArea.innerHTML = html;
  inputArea.style.display = "none";
}

/*************************
 * PROGRAM (INSIDE APP)
 *************************/
function startCoachProgram() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">📅 برنامه رشد روزانه</div>

      ${programButton("عادت‌ساز", openHabitBuilder)}
      ${programButton("ایجاد انگیزه", openMotivation)}
      ${programButton("ایجاد آرامش", openCalm)}
      ${programButton("کشف هدف", openGoalDiscovery)}
      ${programButton("تقویت اراده", openWillpower)}
    </div>
  `;
}

function programButton(title, handler) {
  return `
    <button
      onclick="${handler.name}()"
      style="margin-top:12px;width:100%;padding:14px;border:none;border-radius:16px;
      font-weight:bold;cursor:pointer;color:white;
      background:linear-gradient(135deg,#ff8c1a,#ffb703);">
      ${title}
    </button>
  `;
}

/*************************
 * PROGRAM SECTIONS (EMPTY – READY)
 *************************/
function openHabitBuilder() {
  showSection("عادت‌ساز", "هر روز روی ساخت یک عادت کوچک کار می‌کنیم.");
}

function openMotivation() {
  showSection("ایجاد انگیزه", "تمرین‌های افزایش انگیزه و معنا.");
}

function openCalm() {
  showSection("ایجاد آرامش", "تمرین‌های آرام‌سازی ذهن و بدن.");
}

function openGoalDiscovery() {
  showSection("کشف هدف", "شفاف‌سازی مسیر و هدف شخصی.");
}

function openWillpower() {
  showSection("تقویت اراده", "تمرین‌های تقویت تعهد و استمرار.");
}

function showSection(title, text) {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">${title}</div>
      <p style="margin-top:10px">${text}</p>

      <button
        onclick="startCoachProgram()"
        style="margin-top:20px;width:100%;padding:14px;border:none;border-radius:16px;
        font-weight:bold;cursor:pointer;color:white;
        background:linear-gradient(135deg,#888,#aaa);">
        ⬅ بازگشت به برنامه
      </button>
    </div>
  `;
}
