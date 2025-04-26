async function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  const chatContainer = document.getElementById('chat-container');
  
  const userMessage = document.createElement('div');
  userMessage.textContent = 'You: ' + userInput;
  chatContainer.appendChild(userMessage);
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: userInput}]
    })
  });
  
  const data = await response.json();
  const aiMessage = document.createElement('div');
  aiMessage.textContent = 'AI: ' + (data.choices?.[0]?.message?.content || 'Error getting response');
  chatContainer.appendChild(aiMessage);
}
