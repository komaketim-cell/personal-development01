/*************************
 * GRATITUDE DATA
 *************************/
const GRATITUDE_LIST = [
  "خدایا شکرت برای نفس کشیدن در این لحظه.",
  "خدایا شکرت برای سلامتی بدنم.",
  "خدایا شکرت برای قلبی که بی‌وقفه برایم می‌تپد.",
  "خدایا شکرت برای ذهنی که می‌تواند فکر کند.",
  "خدایا شکرت برای فرصت یک روز تازه.",
  "خدایا شکرت برای خانواده‌ام.",
  "خدایا شکرت برای دوستانم.",
  "خدایا شکرت برای تجربه‌هایی که مرا قوی‌تر کردند.",
  "خدایا شکرت برای درس‌هایی که از اشتباهات گرفتم.",
  "خدایا شکرت برای توانایی تغییر.",
  "خدایا شکرت برای سقفی که بالای سرم است.",
  "خدایا شکرت برای غذایی که دارم.",
  "خدایا شکرت برای آبی که می‌نوشم.",
  "خدایا شکرت برای خوابی که شب‌ها دارم.",
  "خدایا شکرت برای آرامش درونی.",
  "خدایا شکرت برای طبیعت.",
  "خدایا شکرت برای نور خورشید.",
  "خدایا شکرت برای باران.",
  "خدایا شکرت برای هوای تازه.",
  "خدایا شکرت برای توانایی حرکت.",
  "خدایا شکرت برای فرصت یادگیری.",
  "خدایا شکرت برای کتاب‌ها.",
  "خدایا شکرت برای معلم‌ها.",
  "خدایا شکرت برای مهارت‌ها.",
  "خدایا شکرت برای امید.",
  "خدایا شکرت برای ایمان.",
  "خدایا شکرت برای همین لحظه."
];

/*************************
 * QUESTIONS & CONFIG
 *************************/
const QUESTIONS = [
  { text: "معمولاً ذهنت آرام است؟", dimension: "mind" },
  { text: "می‌توانی افکارت را مدیریت کنی؟", dimension: "mind" },
  { text: "استرس را خوب کنترل می‌کنی؟", dimension: "mind" },
  { text: "در لحظه حال حضور داری؟", dimension: "mind" },
  { text: "با احساساتت آشتی هستی؟", dimension: "mind" },

  { text: "هدفت در زندگی شفاف است؟", dimension: "goal" },
  { text: "برای آینده برنامه داری؟", dimension: "goal" },
  { text: "تصمیم‌هایت هدفمندند؟", dimension: "goal" },
  { text: "می‌دانی چه می‌خواهی؟", dimension: "goal" },
  { text: "پیشرفتت را می‌سنجی؟", dimension: "goal" },

  { text: "عادت‌های مثبتی داری؟", dimension: "habit" },
  { text: "پایبند به روتین هستی؟", dimension: "habit" },
  { text: "کارها را عقب نمی‌اندازی؟", dimension: "habit" },
  { text: "استمرار داری؟", dimension: "habit" },
  { text: "خودکنترلی خوبی داری؟", dimension: "habit" },

  { text: "خودت را می‌شناسی؟", dimension: "self" },
  { text: "نقاط قوتت را می‌دانی؟", dimension: "self" },
  { text: "نقاط ضعفت را پذیرفته‌ای؟", dimension: "self" },
  { text: "با خودت صادقی؟", dimension: "self" },
  { text: "خودت را دوست داری؟", dimension: "self" }
];

const DIMENSIONS = {
  mind: { label: "ذهن", importance: 1.1 },
  goal: { label: "هدف", importance: 1.3 },
  habit:{ label: "عادت", importance: 1.4 },
  self: { label: "خودشناسی", importance: 1.5 }
};

/*************************
 * STATE
 *************************/
let currentQuestion = 0;
let answers = [];
let gratitudeIndex = 0;

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
input.addEventListener("keydown", e => e.key === "Enter" && submitAnswer());

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
  const v = Number(input.value);
  if (v < 1 || v > 10) return;
  answers.push({ dimension: QUESTIONS[currentQuestion].dimension, value: v });
  currentQuestion++;
  currentQuestion < QUESTIONS.length
    ? renderQuestion()
    : showResults(analyzeAssessment());
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

  let total = 0, imp = 0;
  Object.keys(DIMENSIONS).forEach(k => {
    const avg = data[k].sum / data[k].count;
    data[k].score = Math.round(avg * 10);
    total += data[k].score * data[k].importance;
    imp += data[k].importance;
  });

  data.overallScore = Math.round(total / imp);
  return data;
}

/*************************
 * RESULTS
 *************************/
function showResults(data) {
  inputArea.style.display = "none";
  cardArea.innerHTML = `
    <div class="question-card">
      ${Object.keys(DIMENSIONS).map(k =>
        `<div>${DIMENSIONS[k].label}: ${data[k].score}%</div>`
      ).join("")}
      <hr>
      <strong>امتیاز کل: ${data.overallScore}%</strong>
      <button onclick="startProgram()" style="${mainBtnStyle()}">
        🚀 ورود به برنامه
      </button>
    </div>
  `;
}

/*************************
 * PROGRAM MENU
 *************************/
function startProgram() {
  cardArea.innerHTML = `
    <div class="question-card">
      ${programCard("🙏","شکرگزاری","openGratitude")}
    </div>
  `;
}

function programCard(icon,title,fn) {
  return `
    <div onclick="${fn}()" style="
      margin-top:14px;
      padding:16px;
      border-radius:18px;
      cursor:pointer;
      color:white;
      font-weight:bold;
      background:linear-gradient(135deg,#56ab2f,#a8e063);
      display:flex;
      gap:12px;
    ">
      <div style="font-size:26px">${icon}</div>
      <div>${title}</div>
    </div>
  `;
}

/*************************
 * ✅ GRATITUDE – CARD SYSTEM
 *************************/
function openGratitude() {
  gratitudeIndex = 0;
  showGratitudeCard();
}

function showGratitudeCard() {
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
    showGratitudeCard();
  }
}

function prevGratitude() {
  if (gratitudeIndex > 0) {
    gratitudeIndex--;
    showGratitudeCard();
  }
}

/*************************
 * STYLES (UNCHANGED)
 *************************/
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
