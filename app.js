const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const bubble = document.createElement("div");
  bubble.className = "message sent";
  bubble.textContent = text;

  messages.appendChild(bubble);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
  input.focus();
});
