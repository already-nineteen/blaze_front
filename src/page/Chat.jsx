const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const userMessage = { id: Date.now(), text: inputText, sender: "user" };
    setMessages([...messages, userMessage]);
    setInputText("");
    setLoading(true);

    const chatGPTResponse = await fetchChatGPTResponse(inputText);
    const botMessage = { id: Date.now(), text: chatGPTResponse, sender: "bot" };
    setMessages((messages) => [...messages, botMessage]);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div className="box-border pt-20 px-4 h-[90.8vh] flex flex-col justify-between">
        <div className="overflow-auto">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="mt-4">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="input"
            placeholder="메시지 입력..."
            disabled={loading}
          />
          <button type="submit" className="button" disabled={loading}>
            {loading ? <FaSpinner className="animate-spin" /> : "전송"}
          </button>
        </form>
        {loading && (
          <div className="loading">
            <FaSpinner className="animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
