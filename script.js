// ======== JavaScript (Simulated Real-Time) ========
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('messageInput');

function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText === '') return;

  // Display user message
  appendMessage(messageText, 'user');
  messageInput.value = '';

  // Simulate bot response
  setTimeout(() => {
    appendMessage('You said: ' + messageText, 'bot');
  }, 800);
}

function appendMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Send message on Enter key
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});
