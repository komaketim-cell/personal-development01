/* ---------- QUESTIONS ---------- */
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

let i = 0;
const answers = [];

const cardArea = document.getElementById("card-area");
const input = document.getElementById("userInput");

/* ---------- THEME ---------- */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};

/* ---------- INPUT ---------- */
input.addEventListener("keydown", e => {
  if (e.key === "Enter") submit();
});
document.getElementById("sendBtn").onclick = submit;

render();

/* ---------- FUNCTIONS ---------- */
function render() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">
        سؤال ${i + 1} از ${questions.length}
      </div>
      <div class="question-text">${questions[i].text}</div>
    </div>
  `;
}

function submit() {
  const v = +input.value;
  if (v < 1 || v > 10) return;

  answers.push({ v, d: questions[i].d });
  input.value = "";

  document.querySelector(".question-card").classList.add("card-exit");

  setTimeout(() => {
    i++;
    i < questions.length ? render() : showResult();
  }, 400);
}

function showResult() {
  const data = {};
  Object.keys(DIM).forEach(k => data[k] = []);

  answers.forEach(a => data[a.d].push(a.v));

  launchConfetti();

  let html = `<div class="question-card"><strong>🎯 نتیجه ارزیابی</strong><br><br>`;
  let weakest = null;
  let min = 101;

  Object.keys(data).forEach(k => {
    const score = Math.round(
      (data[k].reduce((a,b)=>a+b,0) / data[k].length) * 10
    );
    if (score < min) { min = score; weakest = k; }

    html += `
      <div class="result-row">
        <div class="result-label">${DIM[k]} – ${score}%</div>
        <div class="progress">
          <div class="progress-fill" style="--value:${score}%"></div>
        </div>
      </div>
    `;
  });

  html += `
    <div class="coach-box">
      🧭 <strong>Coach:</strong><br>
      تمرکز اصلی رشد تو روی <strong>${DIM[weakest]}</strong> است.
      اگر روزی فقط ۲۰ دقیقه آگاهانه روی این بُعد کار کنی،
      در کمتر از یک ماه تغییر محسوسی احساس می‌کنی.
    </div>
  </div>`;

  cardArea.innerHTML = html;
}

/* ---------- CONFETTI ---------- */
function launchConfetti() {
  const c = document.getElementById("confetti");
  const x = c.getContext("2d");
  c.width = innerWidth;
  c.height = innerHeight;

  const p = Array.from({length:100},()=>({
    x:Math.random()*c.width,
    y:-Math.random()*c.height,
    r:Math.random()*6+4,
    s:Math.random()*4+2
  }));

  (function draw(){
    x.clearRect(0,0,c.width,c.height);
    p.forEach(o=>{
      x.beginPath();
      x.arc(o.x,o.y+=o.s,o.r,0,7);
      x.fillStyle=`hsl(${Math.random()*40+20},100%,60%)`;
      x.fill();
    });
    requestAnimationFrame(draw);
  })();
}
