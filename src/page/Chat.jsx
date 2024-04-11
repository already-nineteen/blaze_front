import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import UserImg from "../assets/img/user.svg";
import BotImg from "../assets/img/bot.svg";
import Airplane from "../assets/img/airplane.svg";

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
  const [isStarted, setIsStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChatPress = () => {
    setIsStarted(true);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  const sendMessage = async () => {
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
      <div className="flex flex-col items-center justify-center h-full box-border pt-24">
        <div className="w-2/3 h-full flex flex-col justify-between">
          <div
            className="w-full flex flex-col overflow-y-auto scrollbar-hide"
            style={{ maxHeight: "calc(100vh - 20rem)" }}
          >
            <div className="flex w-full flex-col gap-16">
              {messages.map((msg) => (
                <div className="flex gap-4 w-full">
                  <img
                    src={msg.sender === "user" ? UserImg : BotImg}
                    alt={msg.sender === "user" ? "User" : "Chatbot"}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col mt-2 gap-5 w-[calc(100%-10rem)]">
                    <p className="font-bold">
                      {msg.sender === "user" ? "사용자" : "챗봇"}
                    </p>
                    <div className="rounded-lg">
                      <p className="w-full break-words">{msg.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="fixed bottom-0 w-full">
            <div className="relative mb-10 w-2/3 items-center justify-center min-w-[600px]">
              <textarea
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                className="resize-none w-full h-40 bg-gray-100 outline-none border-none rounded-3xl p-5 text-xl"
              />
              <img
                src={Airplane}
                alt="보내기"
                className="absolute bottom-5 right-5 w-14 h-14"
                onClick={sendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
