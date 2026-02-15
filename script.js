const questions = [
  { text: "چقدر احساساتت رو می‌شناسی؟", d: "mind" },
  { text: "چقدر ذهنت آرام است؟", d: "mind" },
  { text: "چقدر استرس را مدیریت می‌کنی؟", d: "mind" },

  { text: "چقدر هدفت شفاف است؟", d: "goal" },
  { text: "چقدر انگیزه پایدار داری؟", d: "goal" },
  { text: "چقدر به آینده امیدوار هستی؟", d: "goal" },

  { text: "چقدر عادت‌های منظمی داری؟", d: "habit" },
  { text: "چقدر برنامه‌ریزی می‌کنی؟", d: "habit" },
  { text: "چقدر کارها را کامل می‌کنی؟", d: "habit" },

  { text: "چقدر خودت را می‌شناسی؟", d: "self" },
  { text: "چقدر با خودت صادقی؟", d: "self" },
  { text: "چقدر از درونت آگاهی داری؟", d: "self" }
];

const DIM = {
  mind: "ذهن و احساسات",
  goal: "هدف و انگیزه",
  habit: "نظم و عادت‌ها",
  self: "خودشناسی"
};

let index = 0;
const answers = [];

const cardArea = document.getElementById("card-area");
const input = document.getElementById("userInput");

/* THEME */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};

/* INPUT */
input.addEventListener("keydown", e => {
  if (e.key === "Enter") submit();
});
document.getElementById("sendBtn").onclick = submit;

render();

function render() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">
        سؤال ${index + 1} از ${questions.length}
      </div>
      <div class="question-text">${questions[index].text}</div>
    </div>
  `;
}

function submit() {
  const v = +input.value;
  if (v < 1 || v > 10) return;

  answers.push({ v, d: questions[index].d });
  input.value = "";

  document.querySelector(".question-card").classList.add("card-exit");

  setTimeout(() => {
    index++;
    index < questions.length ? render() : showResult();
  }, 300);
}

function showResult() {
  const data = { mind: [], goal: [], habit: [], self: [] };
  answers.forEach(a => data[a.d].push(a.v));

  launchConfetti();

  let weakest = null;
  let min = 101;
  let html = `<div class="question-card"><strong>🎯 نتیجه ارزیابی</strong><br><br>`;

  Object.keys(data).forEach(k => {
    const score = Math.round(
      (data[k].reduce((a,b)=>a+b,0) / data[k].length) * 10
    );
    if (score < min) { min = score; weakest = k; }

    html += `
      <div class="result-row">
        <div>${DIM[k]} – ${score}%</div>
        <div class="progress">
          <div class="progress-fill" style="--value:${score}%"></div>
        </div>
      </div>
    `;
  });

  const selfScore = Math.round(
    (data.self.reduce((a,b)=>a+b,0) / data.self.length) * 10
  );

  let coachMessage = "";

  if (selfScore < 85) {
    coachMessage = `
      🔑 <strong>مسیر رشد اصلی تو:</strong><br>
      در این مرحله، مهم‌ترین کار تو
      <strong>خودشناسی عمیق‌تر</strong> و
      <strong>ایجاد آرامش ذهنی</strong> است.<br><br>

      هم‌زمان، به‌صورت تدریجی روی
      <strong>${DIM[weakest]}</strong> کار کن.
      فشار نیاور؛ ثبات مهم‌تر از شدت است.
    `;
  } else {
    coachMessage = `
      🚀 <strong>مسیر رشد اصلی تو:</strong><br>
      خودشناسی تو در سطح خوبی است.
      تمرکز اصلی رشد تو باید روی
      <strong>${DIM[weakest]}</strong> باشد.<br><br>

      پیشنهاد Coach:
      هدف ۳۰ روزه مشخص و قابل اندازه‌گیری تعریف کن.
    `;
  }

  html += `
    <div class="coach-box">
      🧭 <strong>Coach:</strong><br>
      ${coachMessage}
    </div>
  </div>`;

  cardArea.innerHTML = html;
}

/* CONFETTI */
function launchConfetti() {
  const c = document.getElementById("confetti");
  const ctx = c.getContext("2d");
  c.width = innerWidth;
  c.height = innerHeight;

  const p = Array.from({length:90},()=>({
    x:Math.random()*c.width,
    y:-Math.random()*c.height,
    r:Math.random()*6+4,
    s:Math.random()*4+2
  }));

  (function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    p.forEach(o=>{
      ctx.beginPath();
      ctx.arc(o.x,o.y+=o.s,o.r,0,7);
      ctx.fillStyle=`hsl(${Math.random()*40+20},100%,60%)`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  })();
}
