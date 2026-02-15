// =======================
// QUESTIONS
// =======================

const questions = [
  // 🧘 Mind & Emotions
  { text: "معمولاً احساس آرامش درونی دارم", dimension: "mind" },
  { text: "می‌توانم استرس‌هایم را مدیریت کنم", dimension: "mind" },
  { text: "ذهنم اغلب درگیر نگرانی‌های مداوم نیست", dimension: "mind" },
  { text: "بعد از اتفاقات منفی زود به تعادل برمی‌گردم", dimension: "mind" },
  { text: "احساساتم را می‌فهمم و سرکوب نمی‌کنم", dimension: "mind" },

  // 🎯 Goal & Motivation
  { text: "در زندگی هدف مشخصی دارم", dimension: "goal" },
  { text: "صبح‌ها با انگیزه از خواب بیدار می‌شوم", dimension: "goal" },
  { text: "می‌دانم در ۳ سال آینده کجا می‌خواهم باشم", dimension: "goal" },
  { text: "کارهایم برایم معنا دارند", dimension: "goal" },
  { text: "احساس می‌کنم زندگیم در مسیر درستی است", dimension: "goal" },

  // 🔁 Habits & Discipline
  { text: "برنامه‌هایم را تا آخر انجام می‌دهم", dimension: "habit" },
  { text: "عادت‌های روزانه نسبتاً ثابتی دارم", dimension: "habit" },
  { text: "اهمال‌کاری مشکل اصلی من نیست", dimension: "habit" },
  { text: "می‌توانم روی یک کار تمرکز کنم", dimension: "habit" },
  { text: "برای رشد خودم منظم زمان می‌گذارم", dimension: "habit" },

  // 🧠 Self-awareness
  { text: "نقاط قوت و ضعفم را می‌شناسم", dimension: "self" },
  { text: "می‌دانم چه چیزهایی واقعاً برایم مهم‌اند", dimension: "self" },
  { text: "انتخاب‌هایم بر اساس ارزش‌هایم است", dimension: "self" },
  { text: "می‌توانم احساساتم را نام‌گذاری کنم", dimension: "self" },
  { text: "خودم را عمیق می‌شناسم", dimension: "self" }
];

// =======================
// STATE
// =======================

let currentQuestion = 0;

const scores = {
  mind: 0,
  goal: 0,
  habit: 0,
  self: 0
};

// =======================
// INIT
// =======================

startAssessment();

// =======================
// CORE FUNCTIONS
// =======================

function startAssessment() {
  clearChat();

  showBotMessage(
    "سلام 🌱\n\n" +
    "این ارزیابی بهت کمک می‌کنه بفهمی بهترین مسیر رشد فردی برای شروع چیه.\n\n" +
    "✅ به هر سؤال از 1 تا 10 نمره بده:\n" +
    "1 = اصلاً در مورد من صدق نمی‌کند\n" +
    "10 = کاملاً در مورد من صدق می‌کند"
  );

  currentQuestion = 0;
  scores.mind = scores.goal = scores.habit = scores.self = 0;

  showNextQuestion();
}

function showNextQuestion() {
  if (currentQuestion >= questions.length) {
    finishAssessment();
    return;
  }

  const q = questions[currentQuestion];
  showBotMessage(`(${currentQuestion + 1} از 20)\n${q.text}`);
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const value = parseInt(input.value);
  input.value = "";

  if (isNaN(value) || value < 1 || value > 10) {
    showBotMessage("⚠️ لطفاً فقط عددی بین 1 تا 10 وارد کن");
    return;
  }

  addUserMessage(value);

  const dimension = questions[currentQuestion].dimension;
  scores[dimension] += value;

  currentQuestion++;
  showNextQuestion();
}

function finishAssessment() {
  const lowestDimension = Object.keys(scores).reduce((a, b) =>
    scores[a] < scores[b] ? a : b
  );

  const result = getResult(lowestDimension);

  showBotMessage(
    "✅ ارزیابی کامل شد 🌱\n\n" +
    "📊 امتیازها:\n" +
    `ذهن و احساسات: ${scores.mind}\n` +
    `هدف و انگیزه: ${scores.goal}\n` +
    `نظم و عادت‌ها: ${scores.habit}\n` +
    `خودشناسی: ${scores.self}\n\n` +
    "🔍 تحلیل شخصیت:\n" +
    result.description + "\n\n" +
    "🛤 مسیر پیشنهادی برای شروع:\n" +
    result.path + "\n\n" +
    "اگر آماده‌ای، بگو تا قدم اول این مسیر رو با هم شروع کنیم ✅"
  );
}

// =======================
// RESULTS
// =======================

function getResult(dimension) {
  const results = {
    mind: {
      description:
        "در حال حاضر بیشترین فشار روی ذهن و احساساتته و قبل از هر تغییری، به آرامش نیاز داری.",
      path:
        "مسیر آرامش و ذهن‌آگاهی 🌿\n" +
        "تمرکز روی کاهش استرس، تنفس آگاهانه و حضور در لحظه."
    },
    goal: {
      description:
        "انگیزه و جهت زندگی کاملاً شفاف نیست و این طبیعیِ در این مرحله.",
      path:
        "مسیر هدف و معنا 🎯\n" +
        "شفاف‌سازی خواسته‌ها و طراحی مسیر زندگی."
    },
    habit: {
      description:
        "می‌دونی چی می‌خوای، اما اجرای مداوم و ثبات چالش اصلیته.",
      path:
        "مسیر نظم و عادت‌سازی 🔁\n" +
        "شروع با عادت‌های خیلی کوچک و پایدار."
    },
    self: {
      description:
        "عمل می‌کنی، اما نیاز به شناخت عمیق‌تری از خودت داری.",
      path:
        "مسیر خودشناسی عمیق 🧠\n" +
        "کار روی ارزش‌ها، احساسات و الگوهای رفتاری."
    }
  };

  return results[dimension];
}

// =======================
// UI HELPERS
// =======================

function showBotMessage(text) {
  const chatBox = document.getElementById("chat-box");
  const div = document.createElement("div");
  div.className = "bot-message";
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addUserMessage(text) {
  const chatBox = document.getElementById("chat-box");
  const div = document.createElement("div");
  div.className = "user-message";
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function clearChat() {
  document.getElementById("chat-box").innerHTML = "";
}
