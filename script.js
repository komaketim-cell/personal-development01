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
 * BELIEF BUILDER DATA
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
 * CONFIG + STATE + INIT
 *************************/
const QUESTIONS = [...]; // ← بدون تغییر همان کد تو
const DIMENSIONS = {...}; // ← بدون تغییر

let currentQuestion = 0;
let answers = [];
let gratitudeIndex = 0;
let beliefIndex = 0;

/*************************
 * DOM REFERENCES
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
 * QUESTION FLOW + ANALYSIS + MENU
 *************************/
// ... تمام توابع ارزیابی، Coach، startProgram و غیره بدون تغییر ...

/*************************
 * ✅ BELIEF SECTION (WITH STORAGE)
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
        باورها مثل عینکی هستند که از پشت آن دنیا را می‌بینیم و تصمیم می‌گیریم.
        اگر این عینک تمیز و درست نباشد، همه‌چیز را تار می‌بینیم.
      </p>
      <button onclick="openBelief()" style="${backBtnStyle()}">⬅ بازگشت</button>
    </div>
  `;
}

function startBeliefCards() {
  const saved = JSON.parse(localStorage.getItem("beliefProgress") || "{}");
  beliefIndex = saved.index || 0;
  renderBeliefCard();
}

function renderBeliefCard() {
  localStorage.setItem("beliefProgress", JSON.stringify({ index: beliefIndex }));

  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">باور ${beliefIndex + 1} از ${BELIEF_LIST.length}</div>
      <div class="question-text" style="margin-top:14px">${BELIEF_LIST[beliefIndex]}</div>

      <button onclick="btnPulse(this); nextBelief();" style="${mainBtnStyle()}">
        💪 من می‌تونم
      </button>

      <button onclick="prevBelief()" style="${backBtnStyle()}">⬅ قبلی</button>
      <button onclick="startProgram()" style="${backBtnStyle()}">🏠 منوی اصلی</button>
    </div>
  `;
}

function nextBelief() {
  if (beliefIndex < BELIEF_LIST.length - 1) {
    beliefIndex++;
    renderBeliefCard();
  } else {
    localStorage.setItem("beliefProgress", JSON.stringify({ index: beliefIndex, completed: true }));
  }
}

function prevBelief() {
  if (beliefIndex > 0) {
    beliefIndex--;
    renderBeliefCard();
  }
}

/*************************
 * ✅ GRATITUDE SECTION (ENHANCED)
 *************************/
function renderGratitudeCard() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">شکرگزاری ${gratitudeIndex + 1} از ${GRATITUDE_LIST.length}</div>
      <div class="question-text" style="margin-top:14px">${GRATITUDE_LIST[gratitudeIndex]}</div>

      <button onclick="btnPulse(this); nextGratitude();" style="${mainBtnStyle()}">
        🤍 خدایا شکرت
      </button>

      <button onclick="prevGratitude()" style="${backBtnStyle()}">⬅ قبلی</button>
      <button onclick="startProgram()" style="${backBtnStyle()}">🏠 منوی اصلی</button>
    </div>
  `;
}

/*************************
 * 🎨 ENHANCED VISUALS
 *************************/
const styleEnhance = document.createElement("style");
styleEnhance.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700&display=swap');
  .question-card {
    font-family: 'Vazirmatn', sans-serif;
    transition: transform .25s ease;
  }
  .pulse-glow {
    animation: pulseGlow 0.6s ease;
  }
  @keyframes pulseGlow {
    0%   { transform: scale(1); box-shadow: 0 0 0 rgba(255,200,0,0); }
    50%  { transform: scale(1.1); box-shadow: 0 0 12px rgba(255,215,0,0.8); }
    100% { transform: scale(1); box-shadow: 0 0 0 rgba(255,200,0,0); }
  }
`;
document.head.appendChild(styleEnhance);

function btnPulse(el) {
  el.classList.add("pulse-glow");
  setTimeout(() => el.classList.remove("pulse-glow"), 600);
}
