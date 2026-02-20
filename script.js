/*********************************
 * DOM
 *********************************/
const cardArea = document.getElementById("card-area");
const inputArea = document.getElementById("input-area");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

/*********************************
 * ASSESSMENT DATA
 *********************************/
const DIMENSIONS = {
  self: { label: "خودشناسی", importance: 1.2 },
  habits: { label: "عادت‌ها", importance: 1.1 },
  mindset: { label: "ذهنیت", importance: 1.0 },
  goals: { label: "هدف‌گذاری", importance: 1.3 }
};

const QUESTIONS = [
  { text: "چقدر خودت را می‌شناسی؟", dimension: "self" },
  { text: "چقدر با احساساتت در ارتباطی؟", dimension: "self" },

  { text: "چقدر به عادت‌های روزانه پایبندی؟", dimension: "habits" },
  { text: "چقدر استمرار داری؟", dimension: "habits" },

  { text: "چقدر طرز فکرت رشدگراست؟", dimension: "mindset" },
  { text: "چقدر افکارت را مدیریت می‌کنی؟", dimension: "mindset" },

  { text: "چقدر اهدافت شفاف هستند؟", dimension: "goals" },
  { text: "چقدر برای هدفت اقدام می‌کنی؟", dimension: "goals" }
];

/*********************************
 * ASSESSMENT STATE
 *********************************/
let currentQuestion = 0;
let answers = [];

/*********************************
 * INIT
 *********************************/
renderQuestion();

/*********************************
 * QUESTION FLOW
 *********************************/
function renderQuestion() {
  const q = QUESTIONS[currentQuestion];

  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">${q.text}</div>
      <div style="margin-top:10px;font-size:14px;color:#777">
        سوال ${currentQuestion + 1} از ${QUESTIONS.length}
      </div>
    </div>
  `;

  inputArea.style.display = "flex";
  userInput.value = "";
  userInput.focus();
}

sendBtn.addEventListener("click", submitAnswer);
userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") submitAnswer();
});

function submitAnswer() {
  const value = Number(userInput.value);
  if (value < 1 || value > 10) return;

  answers.push({
    dimension: QUESTIONS[currentQuestion].dimension,
    value
  });

  currentQuestion++;

  if (currentQuestion < QUESTIONS.length) {
    renderQuestion();
  } else {
    inputArea.style.display = "none";
    showResults(analyzeAssessment());
  }
}

/*********************************
 * ANALYSIS
 *********************************/
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
    const avg = data[k].sum / data[k].count;
    const score = Math.round(avg * 10);
    data[k].score = score;
    data[k].priority = Math.round(data[k].importance * (100 - score));
    weightedSum += score * data[k].importance;
    importanceSum += data[k].importance;
  });

  data.overallScore = Math.round(weightedSum / importanceSum);
  return data;
}

/*********************************
 * COACH
 *********************************/
function getCoachInsight(data) {
  const self = data.self.score;

  const message =
    self < 70
      ? "الان تمرکز اصلی روی آرامش و خودشناسیه."
      : self < 85
      ? "پایه خوبی داری. رشد تدریجی بهترین انتخابه."
      : "آماده اجرای رشد هدفمند هستی.";

  return { message };
}

/*********************************
 * RESULTS
 *********************************/
function showResults(data) {
  const coach = getCoachInsight(data);

  let html = `<div class="question-card">`;

  Object.keys(DIMENSIONS).forEach(k => {
    html += `
      <div style="margin-top:6px">
        ${DIMENSIONS[k].label}: <strong>${data[k].score}%</strong>
      </div>
    `;
  });

  html += `
    <hr>
    <strong>🎯 امتیاز کل: ${data.overallScore}%</strong>
    <hr>
    <div>👤 Coach:<br>${coach.message}</div>

    <button onclick="startProgram()" style="${mainBtnStyle()}">
      🚀 ورود به برنامه رشد
    </button>
  </div>`;

  cardArea.innerHTML = html;
}

/*********************************
 * PROGRAM MENU
 *********************************/
function startProgram() {
  cardArea.innerHTML = `
    <div class="question-card">
      ${programCard("🔥","عادت‌ساز","openHabit","#ff7a18,#ffb347")}
      ${programCard("⚡","انگیزه","openMotivation","#f953c6,#b91d73")}
      ${programCard("🌿","آرامش","openCalm","#43cea2,#185a9d")}
      ${programCard("🎯","هدف","openGoal","#f7971e,#ffd200")}
      ${programCard("💪","اراده","openWill","#11998e,#38ef7d")}
      ${programCard("🙏","شکرگزاری","openGratitude","#56ab2f,#a8e063")}
      ${programCard("🧠","باورها","openBelief","#8360c3,#2ebf91")}
    </div>
  `;
}

function programCard(icon, title, fn, gradient) {
  return `
    <div onclick="${fn}()" style="
      margin-top:14px;
      padding:16px;
      border-radius:18px;
      cursor:pointer;
      color:white;
      font-weight:bold;
      background:linear-gradient(135deg,${gradient});
      display:flex;
      align-items:center;
      gap:12px;
    ">
      <div style="font-size:26px">${icon}</div>
      <div>${title}</div>
    </div>
  `;
}

/*********************************
 * SECTIONS
 *********************************/
function showSection(title, text) {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">${title}</div>
      <p style="margin-top:10px">${text}</p>
      <button onclick="startProgram()" style="${backBtnStyle()}">
        ⬅ منوی اصلی
      </button>
    </div>
  `;
}

const openHabit      = () => showSection("🔥 عادت‌ساز","ساخت عادت‌های کوچک روزانه.");
const openMotivation = () => showSection("⚡ انگیزه","اتصال به معنا و انرژی درونی.");
const openCalm       = () => showSection("🌿 آرامش","تنظیم ذهن و سیستم عصبی.");
const openGoal       = () => showSection("🎯 هدف","شفاف‌سازی مسیر زندگی.");
const openWill       = () => showSection("💪 اراده","تمرین تعهد و استمرار.");
const openBelief     = () => showSection("🧠 باورها","بازنویسی باورهای محدودکننده.");

/*********************************
 * GRATITUDE – CARD BASED ✅
 *********************************/
const GRATITUDE_LIST = [
  "خدایا شکرت برای نفس کشیدن در این لحظه.",
  "خدایا شکرت برای سلامتی بدنم.",
  "خدایا شکرت برای ذهنی که می‌اندیشد.",
  "خدایا شکرت برای فرصت امروز.",
  "خدایا شکرت برای خانواده‌ام.",
  "خدایا شکرت برای توان تغییر.",
  "خدایا شکرت برای آرامش.",
  "خدایا شکرت برای همین لحظه."
];

let gratitudeIndex = 0;

function openGratitude() {
  gratitudeIndex = 0;
  renderGratitude();
}

function renderGratitude() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text" style="line-height:2">
        ${GRATITUDE_LIST[gratitudeIndex]}
      </div>

      <button onclick="nextGratitude()" style="${mainBtnStyle()}">
        🤍 خدایا شکرت
      </button>

      <button onclick="prevGratitude()" style="${backBtnStyle()}">
        ⬅ قبلی
      </button>

      <button onclick="startProgram()" style="${backBtnStyle()}">
        🏠 منوی اصلی
      </button>
    </div>
  `;
}

function nextGratitude() {
  if (gratitudeIndex < GRATITUDE_LIST.length - 1) {
    gratitudeIndex++;
    renderGratitude();
  }
}

function prevGratitude() {
  if (gratitudeIndex > 0) {
    gratitudeIndex--;
    renderGratitude();
  }
}

/*********************************
 * STYLES
 *********************************/
function mainBtnStyle() {
  return `
    margin-top:16px;
    width:100%;
    padding:14px;
    border:none;
    border-radius:16px;
    font-weight:bold;
    cursor:pointer;
    color:white;
    background:linear-gradient(135deg,#ff8c1a,#ffb703);
  `;
}

function backBtnStyle() {
  return `
    margin-top:10px;
    width:100%;
    padding:14px;
    border:none;
    border-radius:16px;
    font-weight:bold;
    cursor:pointer;
    background:#eee;
  `;
}
