import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Layout/Header";
import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";

const REACT_APP_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const fetchChatGPTResponse = async (userMessage) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: userMessage,
        max_tokens: 50,
      },
      {
        headers: {
          Authorization: `Bearer ${REACT_APP_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("ChatGPT Error:", error);
    return "죄송해요, 답변을 가져오는 데 문제가 있었어요. 😢";
  }
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

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
      <ChatArea>
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
      </ChatArea>
      <ArchiveArea>
          <ArchiveTitle>소방 지식 아카이브</ArchiveTitle>
          아직 아카이브에 저장된 지식이 없어요. <br />
          챗봇과의 대화가 유익했다면 아카이브에 저장해 보세요!
      </ArchiveArea>
    </div>
  );
};

export default Chat;

const ChatPageBox = styled.div`
  width: 100%;
  padding: 73px 104px;
`;

const ChatArea = styled.div`

`;

const ArchiveArea = styled.div`

`;

const Title = styled.p`

`;

const ArchiveTitle = styled(Title)`

`;