function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  input.value = "";

  setTimeout(() => {
    const response = botReply(message);
    addMessage(response, "bot");
  }, 500);
}

function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");
  const div = document.createElement("div");

  div.className = sender === "user" ? "user-message" : "bot-message";
  div.innerText = text;

  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userMessage) {
  const msg = userMessage.toLowerCase();

  if (msg.includes("هدف")) {
    return "عالیه 🎯\nبیا هدفت رو خیلی ساده تو یک جمله بگی.";
  }

  if (msg.includes("استرس") || msg.includes("اضطراب")) {
    return "می‌فهممت 🌿\nالان از ۰ تا ۱۰ سطح استرست چقدره؟";
  }

  if (msg.includes("عادت")) {
    return "عادت‌های کوچیک معجزه می‌کنن 🔁\nدوست داری روی چه عادتی کار کنی؟";
  }

  return "ممنون که گفتی 🌱\nمی‌تونی بیشتر توضیح بدی تا بهتر کمکت کنم؟";
}
