/*************************
 * GRATITUDE DATA
 *************************/
const GRATITUDE_LIST = [
  "خدایا شکرت برای نفس کشیدن در این لحظه.",
  "خدایا شکرت برای سلامتی بدنم.",
  "خدایا شکرت برای قلبی که بی‌وقفه برایم می‌تپد.",
  "خدایا شکرت برای ذهنی که می‌تواند فکر کند و یاد بگیرد.",
  "خدایا شکرت برای فرصت یک روز تازه.",
  "خدایا شکرت برای خانواده‌ام.",
  "خدایا شکرت برای دوستان واقعی زندگی‌ام.",
  "خدایا شکرت برای تجربه‌هایی که مرا قوی‌تر کردند.",
  "خدایا شکرت برای اشتباهاتی که به من درس دادند.",
  "خدایا شکرت برای توانایی تغییر در خودم.",
  "خدایا شکرت برای سقفی که بالای سرم دارم.",
  "خدایا شکرت برای غذایی که روی سفره‌ام قرار می‌گیرد.",
  "خدایا شکرت برای آبی که می‌نوشم.",
  "خدایا شکرت برای خوابی که شب‌ها تجربه می‌کنم.",
  "خدایا شکرت برای آرامشی که در درونم شکل می‌گیرد.",
  "خدایا شکرت برای طبیعت زیبا.",
  "خدایا شکرت برای نور خورشید.",
  "خدایا شکرت برای باران آرام‌بخش.",
  "خدایا شکرت برای هوای تازه.",
  "خدایا شکرت برای توانایی حرکت کردن.",
  "خدایا شکرت برای فرصت یادگیری.",
  "خدایا شکرت برای کتاب‌هایی که مسیرم را روشن می‌کنند.",
  "خدایا شکرت برای استادانی که راهنمایم بودند.",
  "خدایا شکرت برای مهارت‌هایی که کسب کرده‌ام.",
  "خدایا شکرت برای امیدی که در دلم زنده است.",
  "خدایا شکرت برای ایمان درونی‌ام.",
  "خدایا شکرت برای این لحظه، همین حالا، همین‌جا."
];

/*************************
 * ✅ BELIEF BUILDER DATA
 *************************/
const BELIEF_LIST = [
  "تا حالا فکر می‌کردم نمی‌تونم تغییر کنم؛ حالا می‌فهمم چقدر اشتباه می‌کردم، چون آدم می‌تونه از همون لحظه‌ای که بخواد، کم‌کم عوض بشه.",
  "تا حالا باورم این بود که برای شروع دیر شده؛ حالا می‌بینم این فکر فقط منو نگه داشته بود و همیشه میشه از امروز شروع کرد.",
  "تا حالا فکر می‌کردم من آدم قوی‌ای نیستم؛ اما حالا می‌فهمم همین که دوام آوردم یعنی خیلی هم قوی‌تر از چیزی‌ام که فکر می‌کردم.",
  "تا حالا خیال می‌کردم گذشته‌م همه‌چیزو خراب کرده؛ حالا می‌بینم گذشته فقط یه بخش از داستان بوده، نه پایانش.",
  "تا حالا فکر می‌کردم از پس مشکلات برنمیام؛ اما حالا می‌فهمم خیلی وقت‌ها بیشتر از چیزی که فکر می‌کردم توان داشتم.",
  "تا حالا باور داشتم اعتمادبه‌نفس ندارم؛ حالا می‌فهمم اعتمادبه‌نفس ساختنیه، نه ذاتی.",
  "تا حالا فکر می‌کردم هیچ استعدادی ندارم؛ حالا می‌بینم با تمرین، خیلی چیزها تو من رشد کرده.",
  "تا حالا خیال می‌کردم همیشه بدشانسم؛ حالا می‌فهمم خیلی از نتیجه‌ها به انتخاب‌های خودم ربط داشته.",
  "تا حالا فکر می‌کردم همیشه شکست می‌خورم؛ اما حالا می‌بینم هر بار فقط داشتم یاد می‌گرفتم.",
  "تا حالا باورم این بود که من به اندازه کافی خوب نیستم؛ حالا می‌فهمم این فقط یه فکر اشتباه بوده که جلوی رشدمو گرفته."
];

/*************************
 * CONFIG
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
let gratitudeIndex = 0;
let beliefIndex = 0;

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
  const value = Number(input.value);
  if (value < 1 || value > 10) return;

  answers.push({ dimension: QUESTIONS[currentQuestion].dimension, value });
  currentQuestion++;

  currentQuestion < QUESTIONS.length
    ? renderQuestion()
    : showResults(analyzeAssessment());
}

/*************************
 * ANALYSIS + COACH
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
    const avg = data[k].sum / data[k].count;
    const score = Math.round(avg * 10);
    data[k].score = score;
    weightedSum += score * data[k].importance;
    importanceSum += data[k].importance;
  });

  data.overallScore = Math.round(weightedSum / importanceSum);
  return data;
}

function getCoachInsight(data) {
  const self = data.self.score;
  let message =
    self < 70
      ? "الان تمرکز اصلی روی آرامش و خودشناسیه."
      : self < 85
      ? "پایه خوبی داری. رشد تدریجی بهترین انتخابه."
      : "آماده اجرای رشد هدفمند هستی.";

  return { message };
}

/*************************
 * RESULTS
 *************************/
function showResults(data) {
  const coach = getCoachInsight(data);

  let html = `<div class="question-card">`;
  Object.keys(DIMENSIONS).forEach(k => {
    html += `<div class="result-row">${DIMENSIONS[k].label}: ${data[k].score}%</div>`;
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
  inputArea.style.display = "none";
}

/*************************
 * PROGRAM MENU
 *************************/
function startProgram() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">📅 برنامه رشد شخصی</div>
      ${programCard("🔥","عادت‌ساز","openHabit","#ff7a18,#ffb347")}
      ${programCard("⚡","ایجاد انگیزه","openMotivation","#f953c6,#b91d73")}
      ${programCard("🌿","ایجاد آرامش","openCalm","#43cea2,#185a9d")}
      ${programCard("🎯","کشف هدف","openGoal","#f7971e,#ffd200")}
      ${programCard("💪","تقویت اراده","openWill","#11998e,#38ef7d")}
      ${programCard("🙏","شکرگزاری","openGratitude","#56ab2f,#a8e063")}
      ${programCard("🧠","اصلاح باورها","openBelief","#8360c3,#2ebf91")}
    </div>
  `;
}

function programCard(icon,title,fn,gradient) {
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

/*************************
 * SECTIONS (unchanged)
 *************************/
const openHabit      = () => showSection("🔥 عادت‌ساز","ساخت عادت‌های کوچک روزانه.");
const openMotivation = () => showSection("⚡ ایجاد انگیزه","اتصال به معنا و انرژی درونی.");
const openCalm       = () => showSection("🌿 ایجاد آرامش","تنظیم ذهن و سیستم عصبی.");
const openGoal       = () => showSection("🎯 کشف هدف","شفاف‌سازی مسیر زندگی.");
const openWill       = () => showSection("💪 تقویت اراده","تمرین تعهد و استمرار.");

function showSection(title,text) {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">${title}</div>
      <p style="margin-top:10px">${text}</p>
      <button onclick="startProgram()" style="${backBtnStyle()}">⬅ بازگشت</button>
    </div>
  `;
}

/*************************
 * ✅ BELIEF SECTION (NEW)
 *************************/
const openBelief = () => {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">🧠 اصلاح باورها</div>

      ${programSubBtn("📖 چرا باورهایمان را اصلاح کنیم؟","openWhyBelief","#8360c3,#2ebf91")}
      ${programSubBtn("💡 باورساز","startBeliefCards","#56ab2f,#a8e063")}

      <button onclick="startProgram()" style="${backBtnStyle()}">⬅ بازگشت</button>
    </div>
  `;
};

function openWhyBelief() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">📖 چرا باورهایمان را اصلاح کنیم؟</div>
      <p style="margin-top:12px; line-height:1.9">
        باورها فیلتر نگاه ما به خودمان و زندگی هستند.
        وقتی اصلاح می‌شوند، تصمیم‌ها و احساسات ما هم تغییر می‌کند.
      </p>
      <button onclick="openBelief()" style="${backBtnStyle()}">⬅ بازگشت</button>
    </div>
  `;
}

function startBeliefCards() {
  beliefIndex = 0;
  renderBeliefCard();
}

function renderBeliefCard() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">
        باور ${beliefIndex + 1} از ${BELIEF_LIST.length}
      </div>

      <div class="question-text" style="margin-top:14px">
        ${BELIEF_LIST[beliefIndex]}
      </div>

      <button onclick="nextBelief()" style="${mainBtnStyle()}">
        💪 من می‌تونم
      </button>

      <button onclick="prevBelief()" style="${backBtnStyle()}">
        ⬅ قبلی
      </button>

      <button onclick="startProgram()" style="${backBtnStyle()}">
        🏠 منوی اصلی
      </button>
    </div>
  `;
}

function nextBelief() {
  if (beliefIndex < BELIEF_LIST.length - 1) {
    beliefIndex++;
    renderBeliefCard();
  }
}

function prevBelief() {
  if (beliefIndex > 0) {
    beliefIndex--;
    renderBeliefCard();
  }
}

/*************************
 * GRATITUDE (UNCHANGED)
 *************************/
const openGratitude = () => {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">🙏 شکرگزاری</div>

      ${programSubBtn("📖 چرا شکرگزاری؟", "openWhyGratitude", "#8360c3,#2ebf91")}
      ${programSubBtn("🤍 با هم شکرگزاری کنیم", "startGratitudeCards", "#56ab2f,#a8e063")}

      <button onclick="startProgram()" style="${backBtnStyle()}">⬅ بازگشت</button>
    </div>
  `;
};

function programSubBtn(title, fn, gradient) {
  return `
    <div onclick="${fn}()" style="
      margin-top:14px;
      padding:14px;
      border-radius:16px;
      cursor:pointer;
      color:white;
      font-weight:bold;
      background:linear-gradient(135deg,${gradient});
      text-align:center;
    ">
      ${title}
    </div>
  `;
}

/*************************
 * BUTTON STYLES
 *************************/
function mainBtnStyle() {
  return `
    margin-top:20px;
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
    margin-top:12px;
    width:100%;
    padding:14px;
    border:none;
    border-radius:16px;
    font-weight:bold;
    cursor:pointer;
    background:#eee;
  `;
}
/*************************
 * ✅ GRATITUDE (FIXED)
 *************************/
function openWhyGratitude() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">📖 چرا شکرگزاری؟</div>
      <p style="margin-top:12px; line-height:1.9">
        شکرگزاری تمرینی قدرتمند برای افزایش آرامش،
        رضایت درونی و حضور در لحظه حال است.
      </p>
      <button onclick="openGratitude()" style="${backBtnStyle()}">
        ⬅ بازگشت
      </button>
    </div>
  `;
}

function startGratitudeCards() {
  gratitudeIndex = 0;
  renderGratitudeCard();
}

function renderGratitudeCard() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">
        شکرگزاری ${gratitudeIndex + 1} از ${GRATITUDE_LIST.length}
      </div>

      <div class="question-text" style="margin-top:14px">
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
    renderGratitudeCard();
  }
}

function prevGratitude() {
  if (gratitudeIndex > 0) {
    gratitudeIndex--;
    renderGratitudeCard();
  }
}
/*********************************
 * 🔒 BELIEF PROGRESS PERSISTENCE
 *********************************/
(function () {
  const KEY = "beliefProgressIndex";

  // هنگام ورود به کارت‌های باور
  const _startBeliefCards = startBeliefCards;
  startBeliefCards = function () {
    const saved = localStorage.getItem(KEY);
    if (saved !== null) {
      beliefIndex = Number(saved);
    }
    _startBeliefCards();
  };

  // هر بار تغییر کارت
  document.addEventListener("click", () => {
    if (typeof beliefIndex === "number") {
      localStorage.setItem(KEY, beliefIndex);
    }
  });
})();
/*********************************
 * ✨ STRONG BUTTON ANIMATION
 *********************************/
(function () {
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;

    btn.classList.remove("pulse-glow");
    void btn.offsetWidth; // reset animation
    btn.classList.add("pulse-glow");

    setTimeout(() => {
      btn.classList.remove("pulse-glow");
    }, 700);
  });
})();
/*********************************
 * 🎨 FONT + VISUAL ENHANCEMENT
 *********************************/
(() => {
  const style = document.createElement("style");
  style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700&display=swap');

body,
.question-card,
.question-text,
.result-row,
button {
  font-family: 'Vazirmatn', sans-serif !important;
}

.question-text {
  font-size: 16.5px;
  line-height: 1.9;
}

.pulse-glow {
  animation: pulseGlow .7s ease;
}

@keyframes pulseGlow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255,170,0,0);
  }
  50% {
    transform: scale(1.12);
    box-shadow: 0 0 20px rgba(255,170,0,.85);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255,170,0,0);
  }
}
`;
  document.head.appendChild(style);
})();
/*******************************************************
 🧠 PATCH: Habit Builder Section (عادت‌ساز)
  سازگار با نسخه فعلی برنامه و بدون تداخل با بخش‌های دیگر
  Author: [نینجا]
*******************************************************/
(() => {
  console.log("⚡ Forcing openHabit override...");

  // پاکسازی هر تعریف قبلی
  window.openHabit = function openHabit() {
    console.log("✅ openHabit override active");
    const app = document.getElementById("app");
    if (!app) {
      console.warn("⚠️ عنصر اصلی #app پیدا نشد. عادت‌ساز قابل نمایش نیست.");
      return;
    }

    // پاکسازی صفحه
    app.innerHTML = "";
    
    // منوی اصلی عادت‌ساز
    const menu = document.createElement("div");
    menu.className = "habit-menu";
    menu.innerHTML = `
      <h2 class="habit-title">🌱 بخش عادت‌ساز</h2>
      <div class="habit-cards">
        <button class="habit-card" id="roleHabitsBtn">📖 نقش عادت‌ها در زندگی</button>
        <button class="habit-card" id="builderBtn">💪 عادت‌ساز</button>
        <button class="habit-card" id="challengeBtn">🗓 چالش ۲۱ روزه ایجاد عادت</button>
      </div>
      <button class="back-btn" onclick="showMainMenu()">بازگشت به منوی اصلی</button>
    `;
    app.appendChild(menu);

    //--------------------[۱] نقش عادت‌ها در زندگی --------------------
    document.getElementById("roleHabitsBtn").onclick = () => {
      app.innerHTML = `
        <div class="habit-section">
          <h3>📖 نقش عادت‌ها در زندگی</h3>
          <p>عادات کوچک زندگی ما را می‌سازند. هر انتخاب روزانه به شکل‌گیری مسیر آینده منجر می‌شود. 
          با ساخت عادات درست، نیازی به انگیزه دائمی نداریم — کارها به بخشی از هویت ما تبدیل می‌شوند.</p>
          <p>با ساخت عادت‌های آگاهانه، مسیر موفقیت آرام و بدون فشار خواهد بود.</p>
          <button class="back-btn" onclick="openHabit()">بازگشت</button>
          <button class="back-btn" onclick="showMainMenu()">منوی اصلی</button>
        </div>
      `;
    };

    //--------------------[۲] کارت‌های جملات الهام‌بخش --------------------
    document.getElementById("builderBtn").onclick = () => {
      const quotes = [
        "من هر روز حتی با قدم‌های کوچک به سمت بهتر شدن حرکت می‌کنم.",
        "من شروع کردن را به کامل بودن ترجیح می‌دهم.",
        "من به جای انتظار برای انگیزه، با عمل کردن انگیزه می‌سازم.",
        "من برای زمانم ارزش قائلم و آن را آگاهانه خرج می‌کنم.",
        "من عادت‌های کوچکی می‌سازم که آینده بزرگی برایم می‌آفرینند.",
        "من مراقبت از جسم و ذهنم را جزو اولویت‌های زندگی‌ام می‌دانم.",
        "من هر روز چیزی جدید یاد می‌گیرم، حتی اگر بسیار کوچک باشد.",
        "من کارهای مهمم را قبل از کارهای آسان انجام می‌دهم.",
        "من با تکرار روزانه، مهارت‌هایم را عمیق‌تر می‌کنم.",
        "من افکارم را می‌نویسم تا ذهنم شفاف‌تر شود.",
        "من برای داشته‌هایم قدردانم و این حس را هر روز تمرین می‌کنم.",
        "من بدنم را هر روز به حرکت وادار می‌کنم تا انرژی داشته باشم.",
        "من محیط اطرافم را مرتب نگه می‌دارم تا ذهنم آرام بماند.",
        "من شب‌ها برای فردایم برنامه ساده و واضح می‌نویسم.",
        "من به جای مقایسه خودم با دیگران، پیشرفت خودم را می‌سنجم.",
        "من روی کارهایی تمرکز می‌کنم که واقعاً در زندگی‌ام اثر دارند.",
        "من استراحت کافی را بخشی از موفقیتم می‌دانم.",
        "من با انجام کارهای کوچک اما مداوم، اعتماد به نفسم را می‌سازم.",
        "من به خودم فرصت اشتباه و یادگیری می‌دهم.",
        "من هر روز نسخه آگاهانه‌تر و قوی‌تری از خودم می‌شوم.",
      ];

      let index = 0;

      const renderCard = () => {
        app.innerHTML = `
          <div class="quote-card">
            <h3>💪 جمله ${index + 1} از ${quotes.length}</h3>
            <p>${quotes[index]}</p>
            <div class="quote-buttons">
              <button ${index === 0 ? "disabled" : ""} id="prevQuote">⬅️ قبلی</button>
              <button id="nextQuote">${
                index === quotes.length - 1 ? "🔁 پایان / منوی اصلی" : "من می‌تونم ➡️"
              }</button>
            </div>
            <button class="back-btn" onclick="openHabit()">بازگشت به فهرست جملات</button>
            <button class="back-btn" onclick="showMainMenu()">🏠 منوی اصلی</button>
          </div>
        `;

        document.getElementById("prevQuote").onclick = () => {
          if (index > 0) {
            index--;
            renderCard();
          }
        };

        document.getElementById("nextQuote").onclick = () => {
          if (index < quotes.length - 1) {
            index++;
            renderCard();
          } else {
            openHabit(); // پایان -> بازگشت به منوی اصلی عادت‌ساز
          }
        };
      };

      renderCard();
    };

    //--------------------[۳] چالش ۲۱ روزه --------------------
    document.getElementById("challengeBtn").onclick = () => {
      renderChallengeMenu();
    };

    function renderChallengeMenu() {
      app.innerHTML = `
        <div class="challenge-menu">
          <h3>🗓 چالش ۲۱ روزه ایجاد عادت</h3>
          <div class="habit-cards">
            <button id="week1Btn">💥 هفته اول — شروع و فعال‌سازی</button>
            <button id="week2Btn">🌿 هفته دوم — تثبیت و آگاهی</button>
            <button id="week3Btn">🔥 هفته سوم — هویت‌سازی</button>
          </div>
          <button class="back-btn" onclick="openHabit()">بازگشت</button>
          <button class="back-btn" onclick="showMainMenu()">منوی اصلی</button>
        </div>
      `;

      document.getElementById("week1Btn").onclick = () =>
        renderWeek(
          "💥 هفته اول — شروع و فعال‌سازی (روزهای ۱ تا ۷)",
          "✨ هدف: فقط «شروع کردن و انجام دادن» بدون وسواس ✨",
          [
            "امروز فقط یک عادت کوچک انتخاب می‌کنم و متعهد می‌شوم ۲۱ روز ادامه‌اش بدهم.",
            "امروز کار مهمم را قبل از چک کردن گوشی انجام می‌دهم.",
            "امروز ۱۰ دقیقه مطالعه یا یادگیری انجام می‌دهم.",
            "امروز ۵ دقیقه افکارم را می‌نویسم.",
            "امروز حداقل ۱۰ دقیقه بدنم را حرکت می‌دهم.",
            "امروز یک کار نیمه‌تمام کوچک را کامل می‌کنم.",
            "امروز ۳ مورد از چیزهایی که بابتشان شکرگزارم را می‌نویسم.",
          ]
        );

      document.getElementById("week2Btn").onclick = () =>
        renderWeek(
          "🌿 هفته دوم — تثبیت و آگاهی (روزهای ۸ تا ۱۴)",
          "🌱 هدف: «پایداری و خودآگاهی» 🌱",
          [
            "امروز محیط اطرافم را ۱۰ دقیقه مرتب می‌کنم.",
            "امروز آگاهانه‌تر غذا می‌خورم و عجله نمی‌کنم.",
            "امروز یک حواس‌پرتی رایج را کمتر می‌کنم.",
            "امروز یک مهارت کوچک مرتبط با هدفم تمرین می‌کنم.",
            "امروز قبل از خواب، فردایم را در ۳ خط برنامه‌ریزی می‌کنم.",
            "امروز به جای کمال‌گرایی، نسخه ساده کار را انجام می‌دهم.",
            "امروز پیشرفت دو هفته اخیرم را مرور و ثبت می‌کنم.",
          ]
        );

      document.getElementById("week3Btn").onclick = () =>
        renderWeek(
          "🔥 هفته سوم — هویت‌سازی (روزهای ۱۵ تا ۲۱)",
          "💫 هدف: «تبدیل رفتار به هویت» 💫",
          [
            "امروز خودم را فردی می‌بینم که این عادت را دارد و مطابق آن رفتار می‌کنم.",
            "امروز یک کار دشوار اما مهم را شروع می‌کنم.",
            "امروز ۱۵ دقیقه تمرکز عمیق روی یک کار انجام می‌دهم.",
            "امروز به خودم بابت ادامه مسیر پاداش کوچک می‌دهم.",
            "امروز یک باور محدودکننده را شناسایی و بازنویسی می‌کنم.",
            "امروز تصور می‌کنم اگر این عادت را یک سال ادامه دهم، زندگی‌ام چگونه می‌شود.",
            "امروز کل مسیر را مرور می‌کنم و تصمیم می‌گیرم این عادت را به سبک زندگی تبدیل کنم.",
          ]
        );
    }

    // تابع ساخت کارت‌های روزها در هر هفته
    function renderWeek(title, goal, days) {
      app.innerHTML = `
        <div class="week-section">
          <h3>${title}</h3>
          <p class="blink-goal">${goal}</p>
          <div class="habit-cards">
            ${days
              .map(
                (d, i) =>
                  `<button class="day-card" id="day${i}Btn">📅 روز ${i + 1}</button>`
              )
              .join("")}
          </div>
          <button class="back-btn" onclick="renderChallengeMenu()">بازگشت به منوی چالش‌ها</button>
          <button class="back-btn" onclick="showMainMenu()">منوی اصلی</button>
        </div>
      `;

      days.forEach((d, i) => {
        document.getElementById(`day${i}Btn`).onclick = () => {
          app.innerHTML = `
            <div class="day-card-detail">
              <h3>${title}</h3>
              <p class="blink-goal">${goal}</p>
              <h4>📅 روز ${i + 1}</h4>
              <p>${d}</p>
              <button class="back-btn" onclick="renderWeek('${title}','${goal.replace(/'/g,"\\'")}',${JSON.stringify(days).replace(/"/g,'&quot;')})">بازگشت به هفته</button>
              <button class="back-btn" onclick="showMainMenu()">🏠 منوی اصلی</button>
            </div>
          `;
        };
      });
    }
  };

  // ✅ استایل‌های اختصاصی (درصورت نبود)
  const style = document.createElement("style");
  style.textContent = `
    .habit-menu, .habit-section, .quote-card, .challenge-menu, .week-section, .day-card-detail {
      text-align: center;
      direction: rtl;
      padding: 20px;
      animation: fadeIn 0.5s ease-in-out;
    }
    .habit-title { font-size: 1.6em; margin-bottom: 10px; }
    .habit-cards { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 15px; }
    .habit-card, .day-card { background: #e8f5e9; border: 1px solid #81c784; border-radius: 8px; padding: 10px 15px; cursor: pointer; transition: 0.3s; }
    .habit-card:hover, .day-card:hover { background: #c8e6c9; }
    .quote-card p { min-height: 80px; }
    .quote-buttons button { margin: 5px; padding: 8px 12px; }
    .back-btn { background: #fff3e0; border: 1px solid #ffb74d; border-radius: 6px; margin: 6px; padding: 8px 14px; cursor: pointer; }
    .back-btn:hover { background: #ffe0b2; }
    .blink-goal { color: #ff7043; animation: blink 1s infinite; font-weight: bold; margin-bottom: 10px; }
    @keyframes blink { 50% { opacity: 0.4; } }
    @keyframes fadeIn { from { opacity }
  `;
  document.head.appendChild(style);
})();
/*******************************************************
 ✅ FIX PATCH: Habit Builder Render Target
  اصلاح مقصد رندر از #app به #card-area
*******************************************************/
(() => {
  console.log("🧩 Habit Patch FIX loaded");

  const getRoot = () => {
    return (
      document.getElementById("card-area") ||
      document.querySelector("#card-area")
    );
  };

  // Override نهایی
  window.openHabit = function () {
    console.log("✅ openHabit FINAL override active");

    const root = getRoot();
    if (!root) {
      console.error("❌ card-area not found. Habit cannot render.");
      return;
    }

    root.innerHTML = `
      <div class="habit-menu" style="direction:rtl;text-align:center;padding:20px">
        <h2>🌱 بخش عادت‌ساز</h2>

        <button onclick="habitRole()" class="habit-btn">📖 نقش عادت‌ها در زندگی</button>
        <button onclick="habitBuilder()" class="habit-btn">💪 عادت‌ساز</button>
        <button onclick="habitChallenge()" class="habit-btn">🗓 چالش ۲۱ روزه</button>

        <br><br>
        <button onclick="showMainMenu()" class="back-btn">بازگشت به منوی اصلی</button>
      </div>
    `;
  };

  // ---------- بخش‌ها ----------
  window.habitRole = function () {
    const root = getRoot();
    root.innerHTML = `
      <h3>📖 نقش عادت‌ها در زندگی</h3>
      <p>عادت‌ها معماری نامرئی زندگی ما هستند. رفتارهای کوچک امروز، آینده ما را می‌سازند.</p>
      <button onclick="openHabit()">بازگشت</button>
    `;
  };

  window.habitBuilder = function () {
    const root = getRoot();
    root.innerHTML = `
      <h3>💪 عادت‌ساز</h3>
      <p>هر روز فقط یک قدم کوچک اما مداوم.</p>
      <button onclick="openHabit()">بازگشت</button>
    `;
  };

  window.habitChallenge = function () {
    const root = getRoot();
    root.innerHTML = `
      <h3>🗓 چالش ۲۱ روزه</h3>
      <p>۳ هفته، ۳ مرحله: شروع، تثبیت، هویت‌سازی</p>
      <button onclick="openHabit()">بازگشت</button>
    `;
  };
})();
/*******************************************************
 ✅ FINAL GUARANTEED Habit Patch
  Safe render via appendChild (non-destructible)
*******************************************************/
(() => {
  console.log("✅ Habit FINAL patch loaded");

  function getCardArea() {
    return document.getElementById("card-area");
  }

  function clearHabitContainer() {
    const old = document.getElementById("habit-root");
    if (old) old.remove();
  }

  window.openHabit = function () {
    console.log("✅ openHabit FINAL EXECUTED");

    const cardArea = getCardArea();
    if (!cardArea) {
      console.error("❌ card-area not found");
      return;
    }

    clearHabitContainer();

    const wrapper = document.createElement("div");
    wrapper.id = "habit-root";
    wrapper.style.cssText = `
      direction: rtl;
      padding: 20px;
      margin: 20px auto;
      border: 3px solid #4caf50;
      border-radius: 12px;
      background: #f1fff4;
      max-width: 500px;
      text-align: center;
      font-size: 16px;
    `;

    wrapper.innerHTML = `
      <h2>🌱 بخش عادت‌ساز</h2>
      <p>اگر این متن را می‌بینی، یعنی Patch 100٪ موفق بوده ✅</p>

      <button onclick="habitRole()">📖 نقش عادت‌ها</button><br><br>
      <button onclick="habitBuilder()">💪 عادت‌ساز</button><br><br>
      <button onclick="habitChallenge()">🗓 چالش ۲۱ روزه</button><br><br>

      <button onclick="this.parentNode.remove()">❌ بستن</button>
    `;

    cardArea.appendChild(wrapper);

    // اسکرول خودکار (خیلی مهم)
    wrapper.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  window.habitRole = function () {
    alert("📖 عادت‌ها آینده‌ی نامرئی ما را می‌سازند.");
  };

  window.habitBuilder = function () {
    alert("💪 هر روز یک قدم کوچک.");
  };

  window.habitChallenge = function () {
    alert("🗓 ۲۱ روز = هویت جدید");
  };
})();
