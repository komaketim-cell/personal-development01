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
 * BELIEF DATA
 *************************/
const BELIEF_LIST = [
  "تا حالا فکر می‌کردم نمی‌تونم تغییر کنم؛ حالا می‌فهمم چقدر اشتباه می‌کردم.",
  "تا حالا باورم این بود که برای شروع دیر شده؛ حالا می‌بینم همیشه میشه از امروز شروع کرد.",
  "تا حالا فکر می‌کردم من آدم قوی‌ای نیستم؛ اما حالا می‌فهمم خیلی قوی‌ترم.",
  "تا حالا خیال می‌کردم گذشته‌م همه‌چیزو خراب کرده؛ اما گذشته پایان نیست.",
  "تا حالا فکر می‌کردم از پس مشکلات برنمیام؛ اما بارها دوام آوردم.",
  "تا حالا باور داشتم اعتمادبه‌نفس ندارم؛ حالا می‌فهمم ساختنیه.",
  "تا حالا فکر می‌کردم استعدادی ندارم؛ اما رشد کردم.",
  "تا حالا خیال می‌کردم بدشانسم؛ حالا می‌فهمم انتخاب‌ها مهم‌اند.",
  "تا حالا فکر می‌کردم شکست خوردم؛ اما داشتم یاد می‌گرفتم.",
  "تا حالا فکر می‌کردم کافی نیستم؛ حالا می‌فهمم این فقط یک فکر بوده."
];

/*************************
 * HABIT BUILDER DATA
 *************************/
const HABIT_BUILDER_LIST = [
"من هر روز حتی با قدم‌های کوچک به سمت بهتر شدن حرکت می‌کنم.",
"من شروع کردن را به کامل بودن ترجیح می‌دهم.",
"من به جای انتظار برای انگیزه، با عمل کردن انگیزه می‌سازم.",
"من برای زمانم ارزش قائلم و آن را آگاهانه خرج می‌کنم.",
"من عادت‌های کوچکی می‌سازم که آینده بزرگی برایم می‌آفرینند.",
"من مراقبت از جسم و ذهنم را جزو اولویت‌های زندگی‌ام می‌دانم.",
"من هر روز چیزی جدید یاد می‌گیرم.",
"من کارهای مهمم را قبل از کارهای آسان انجام می‌دهم.",
"من با تکرار روزانه مهارت‌هایم را عمیق‌تر می‌کنم.",
"من افکارم را می‌نویسم تا ذهنم شفاف‌تر شود.",
"من برای داشته‌هایم قدردانم.",
"من بدنم را هر روز حرکت می‌دهم.",
"من محیط اطرافم را مرتب نگه می‌دارم.",
"من شب‌ها برای فردایم برنامه ساده می‌نویسم.",
"من پیشرفت خودم را می‌سنجم.",
"من روی کارهای اثرگذار تمرکز می‌کنم.",
"من استراحت کافی را مهم می‌دانم.",
"من با کارهای کوچک اعتمادبه‌نفس می‌سازم.",
"من به خودم فرصت یادگیری می‌دهم.",
"من هر روز نسخه قوی‌تری از خودم می‌شوم."
];

/*************************
 * 21 DAY CHALLENGE DATA
 *************************/
const WEEK1 = [
"روز ۱: انتخاب یک عادت کوچک و تعهد ۲۱ روزه.",
"روز ۲: انجام کار مهم قبل از چک گوشی.",
"روز ۳: ۱۰ دقیقه مطالعه.",
"روز ۴: ۵ دقیقه نوشتن افکار.",
"روز ۵: ۱۰ دقیقه حرکت بدن.",
"روز ۶: کامل کردن یک کار نیمه‌تمام.",
"روز ۷: نوشتن ۳ شکرگزاری."
];

const WEEK2 = [
"روز ۸: ۱۰ دقیقه مرتب‌سازی محیط.",
"روز ۹: غذا خوردن آگاهانه.",
"روز ۱۰: کاهش یک حواس‌پرتی.",
"روز ۱۱: تمرین یک مهارت کوچک.",
"روز ۱۲: برنامه‌ریزی ۳ خطی قبل خواب.",
"روز ۱۳: انجام نسخه ساده کار.",
"روز ۱۴: مرور پیشرفت دو هفته."
];

const WEEK3 = [
"روز ۱۵: رفتار مطابق هویت جدید.",
"روز ۱۶: شروع یک کار دشوار مهم.",
"روز ۱۷: ۱۵ دقیقه تمرکز عمیق.",
"روز ۱۸: پاداش کوچک به خود.",
"روز ۱۹: بازنویسی یک باور محدودکننده.",
"روز ۲۰: تصور یک سال ادامه عادت.",
"روز ۲۱: مرور کامل و تصمیم نهایی."
];

/*************************
 * STATE
 *************************/
let habitIndex = 0;

/*************************
 * HABIT MENU
 *************************/
function openHabit(){
  cardArea.innerHTML = `
  <div class="question-card">
    <div class="question-text">🔥 عادت‌ساز</div>
    ${programSubBtn("📖 نقش عادت‌ها در زندگی","openHabitRole","#ff7a18,#ffb347")}
    ${programSubBtn("💪 عادت‌ساز","startHabitBuilder","#ff512f,#dd2476")}
    ${programSubBtn("🏆 چالش ۲۱ روزه ایجاد عادت","open21Challenge","#11998e,#38ef7d")}
    <button onclick="startProgram()" style="${backBtnStyle()}">⬅ بازگشت</button>
  </div>`;
}

/*************************
 * HABIT ROLE
 *************************/
function openHabitRole(){
  cardArea.innerHTML = `
  <div class="question-card">
    <div class="question-text">📖 نقش عادت‌ها</div>
    <p>عادت‌های روزانه آینده ما را می‌سازند. تکرارهای کوچک، نتایج بزرگ می‌آفرینند.</p>
    <button onclick="openHabit()" style="${backBtnStyle()}">⬅ بازگشت</button>
    <button onclick="startProgram()" style="${backBtnStyle()}">🏠 منوی اصلی</button>
  </div>`;
}

/*************************
 * HABIT BUILDER CARDS
 *************************/
function startHabitBuilder(){
  habitIndex=0;
  renderHabitCard();
}

function renderHabitCard(){
  cardArea.innerHTML=`
  <div class="question-card">
    <div class="question-number">عادت ${habitIndex+1} از ${HABIT_BUILDER_LIST.length}</div>
    <div class="question-text">${HABIT_BUILDER_LIST[habitIndex]}</div>
    <button onclick="nextHabit()" style="${mainBtnStyle()}">💪 من می‌توانم</button>
    <button onclick="prevHabit()" style="${backBtnStyle()}">⬅ قبلی</button>
    <button onclick="startProgram()" style="${backBtnStyle()}">🏠 منوی اصلی</button>
  </div>`;
}

function nextHabit(){ if(habitIndex<HABIT_BUILDER_LIST.length-1){habitIndex++;renderHabitCard();}}
function prevHabit(){ if(habitIndex>0){habitIndex--;renderHabitCard();}}

/*************************
 * 21 DAY MENU
 *************************/
function open21Challenge(){
  cardArea.innerHTML=`
  <div class="question-card">
    <div class="question-text">🏆 چالش ۲۱ روزه</div>
    ${programSubBtn("هفته اول","openWeek1","#ff9966,#ff5e62")}
    ${programSubBtn("هفته دوم","openWeek2","#00b09b,#96c93d")}
    ${programSubBtn("هفته سوم","openWeek3","#7f00ff,#e100ff")}
    <button onclick="openHabit()" style="${backBtnStyle()}">⬅ بازگشت</button>
  </div>`;
}

function renderWeek(title,goal,data,backFn){
  let html=`
  <div class="question-card">
    <div class="question-text">${title}</div>
    <div class="blink-goal">${goal}</div>`;
  data.forEach(d=>{
    html+=`<div style="margin-top:10px;padding:10px;background:#f4f4f4;border-radius:10px;cursor:pointer"
    onclick="renderDay('${d}','${backFn.name}')">${d}</div>`;
  });
  html+=`<button onclick="${backFn.name}()" style="${backBtnStyle()}">⬅ بازگشت</button></div>`;
  cardArea.innerHTML=html;
}

function renderDay(text,backFnName){
  cardArea.innerHTML=`
  <div class="question-card">
    <div class="question-text">${text}</div>
    <button onclick="${backFnName}()" style="${backBtnStyle()}">⬅ بازگشت</button>
    <button onclick="startProgram()" style="${backBtnStyle()}">🏠 منوی اصلی</button>
  </div>`;
}

function openWeek1(){renderWeek("هفته اول — شروع","هدف: فقط شروع کن.",WEEK1,open21Challenge);}
function openWeek2(){renderWeek("هفته دوم — تثبیت","هدف: پایداری و آگاهی.",WEEK2,open21Challenge);}
function openWeek3(){renderWeek("هفته سوم — هویت","هدف: تبدیل رفتار به هویت.",WEEK3,open21Challenge);}

/*************************
 * BLINK STYLE
 *************************/
(() => {
const style=document.createElement("style");
style.textContent=`
.blink-goal{animation:blink 1s infinite;font-weight:bold;margin:10px 0;}
@keyframes blink{0%{opacity:1}50%{opacity:.3}100%{opacity:1}}
`;
document.head.appendChild(style);
})();
