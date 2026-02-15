// ===============================
// QUESTIONS
// ===============================

const questions = [
  { text: "چقدر احساساتت رو می‌شناسی؟", dimension: "mind" },
  { text: "چقدر استرس روزانه‌ات رو مدیریت می‌کنی؟", dimension: "mind" },
  { text: "چقدر ذهنت آرام است؟", dimension: "mind" },
  { text: "چقدر به خودت مهربانی؟", dimension: "mind" },
  { text: "چقدر افکارت منفی نیستند؟", dimension: "mind" },

  { text: "چقدر هدفت در زندگی مشخص است؟", dimension: "goal" },
  { text: "چقدر انگیزه‌ی پایدار داری؟", dimension: "goal" },
  { text: "چقدر به آینده‌ات امیدوار هستی؟", dimension: "goal" },
  { text: "چقدر برای هدفت تلاش می‌کنی؟", dimension: "goal" },
  { text: "چقدر می‌دانی چه می‌خواهی؟", dimension: "goal" },

  { text: "چقدر عادت‌های منظمی داری؟", dimension: "habit" },
  { text: "چقدر برنامه‌ریزی می‌کنی؟", dimension: "habit" },
  { text: "چقدر به برنامه‌ات پایبندی؟", dimension: "habit" },
  { text: "چقدر اهمال‌کاری نداری؟", dimension: "habit" },
  { text: "چقدر کارهایت را کامل می‌کنی؟", dimension: "habit" },

  { text: "چقدر خودت را می‌شناسی؟", dimension: "self" },
  { text: "چقدر نقاط قوتت را می‌دانی؟", dimension: "self" },
  { text: "چقدر نقاط ضعفت را پذیرفتی؟", dimension: "self" },
  { text: "چقدر با خودت صادقی؟", dimension: "self" },
  { text: "چقدر از درونت آگاهی داری؟", dimension: "self" }
];

// ===============================
// STATE
// ===============================

let currentQuestion = 0;
const answers = [];

// ===============================
// UI HELPERS
// ===============================

const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

function showBotMessage(text) {
  const div = document.createElement("div");
  div.className = "bot";
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function showUserMessage(text) {
  const div = document.createElement("div");
  div.className = "user";
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// ===============================
// CHAT LOGIC
// ===============================

showBotMessage("سلام 🌱\nبه ارزیابی رشد فردی خوش آمدی.\nبه هر سؤال عددی بین ۱ تا ۱۰ بده.");

askQuestion();

function askQuestion() {
  if (currentQuestion < questions.length) {
    showBotMessage(
      `سؤال ${currentQuestion + 1}:\n` + questions[currentQuestion].text
    );
  } else {
    finishAssessment();
  }
}

function sendMessage() {
  const value = Number(input.value);
  if (!value || value < 1 || value > 10) return;

  showUserMessage(value);
  answers.push({
    value,
    dimension: questions[currentQuestion].dimension
  });

  input.value = "";
  currentQuestion++;
  askQuestion();
}

// ===============================
// ANALYSIS CONFIG
// ===============================

const DIMENSIONS = {
  mind: { label: "ذهن و احساسات", importance: 1.3 },
  goal: { label: "هدف و انگیزه", importance: 1.1 },
  habit: { label: "نظم و عادت‌ها", importance: 1.2 },
  self: { label: "خودشناسی", importance: 1.0 }
};

// ===============================
// ANALYSIS
// ===============================

function analyzeAssessment(answers) {
  const data = {
    mind: { sum: 0, count: 0, values: [] },
    goal: { sum: 0, count: 0, values: [] },
    habit:{ sum: 0, count: 0, values: [] },
    self: { sum: 0, count: 0, values: [] }
  };

  const all = [];

  answers.forEach(a => {
    data[a.dimension].sum += a.value;
    data[a.dimension].count++;
    data[a.dimension].values.push(a.value);
    all.push(a.value);
  });

  Object.keys(data).forEach(k => {
    const avg = data[k].sum / data[k].count;
    data[k].score = Math.round(avg * 10);
    data[k].priority =
      Math.round((100 - data[k].score) * DIMENSIONS[k].importance);
  });

  const growthDimension = Object.keys(data)
    .sort((a, b) => data[b].priority - data[a].priority)[0];

  const responseProfile = detectProfile(all);

  return { scores: data, growthDimension, responseProfile };
}

// ===============================
// PROFILE DETECTION
// ===============================

function detectProfile(values) {
  const avg = mean(values);
  const sd = std(values);
  const min = Math.min(...values);

  if (avg >= 4 && avg <= 6 && sd < 1.5)
    return { type: "مردد", insight: "نیاز به اعتماد به تصمیم‌گیری داری." };

  if (avg > 8 && min >= 7)
    return { type: "کمال‌گرا", insight: "استانداردهای خیلی بالایی داری." };

  if (sd > 6)
    return { type: "نوسانی", insight: "ثبات احساسی برایت کلیدی است." };

  if (avg < 4)
    return { type: "فرسوده", insight: "نیاز به بازیابی انرژی داری." };

  return { type: "متعادل", insight: "آمادگی رشد تدریجی داری." };
}

function mean(arr) {
  return arr.reduce((a,b)=>a+b,0)/arr.length;
}

function std(arr) {
  const m = mean(arr);
  return Math.sqrt(mean(arr.map(v => (v-m)**2)));
}

// ===============================
// FINISH
// ===============================

function finishAssessment() {
  const result = analyzeAssessment(answers);

  let text = "✅ ارزیابی کامل شد\n\n📊 نتایج:\n";

  Object.keys(result.scores).forEach(k => {
    text += `${DIMENSIONS[k].label}: ${result.scores[k].score}/100\n`;
  });

  text += `\n🎯 اولویت رشد:\n${DIMENSIONS[result.growthDimension].label}\n`;
  text += `\n🧠 تیپ پاسخ‌دهی:\n${result.responseProfile.type}\n`;
  text += result.responseProfile.insight;

  showBotMessage(text);
}
