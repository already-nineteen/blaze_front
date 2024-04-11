import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";

// 환경 변수에서 API 키를 가져옵니다.
const REACT_APP_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// ChatGPT API로부터 응답을 가져오는 함수입니다.
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
    <Layout>
      <div className="flex flex-col h-full w-full">
         <div className="messages mt-20">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="message-form">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="input"
            placeholder="메시지 입력..."
            disabled={loading}
          />
          <button type="submit" className="send-button" disabled={loading}>
            {loading ? <FaSpinner className="animate-spin" /> : "전송"}
          </button>
        </form>
        {loading && (
          <div className="loading">
            <FaSpinner className="animate-spin" />
          </div>
        )} 
      </div>
    </Layout>
  );
};

export default Chat;

// 추가로 필요한 스타일드 컴포넌트를 정의할 수 있습니다.
// 예를 들어, 채팅 메시지 및 입력 폼에 대한 스타일을 추가할 수 있습니다.


const Img = styled.img`

`;

const P = styled.p`
  font-family: 'PretendardLegular';
  font-size: 16px;
`;

const BoldP = styled(P)`
  font-family: 'PretendardSemiBold';
  font-size: 18px;
`;

const ChatContainer = styled.div`
  background-color: red;
`;

const ArchiveArea = styled.div`

`;

const Title = styled.p`

`;

const ArchiveTitle = styled(Title)`

`;