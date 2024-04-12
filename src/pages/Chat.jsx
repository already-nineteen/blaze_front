import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import UserImg from "../assets/img/user.svg";
import BotImg from "../assets/img/bot.svg";
import Airplane from "../assets/img/airplane.svg";
import axios from "axios";

const REACT_APP_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const fetchChatGPTResponse = async (userInput) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: userInput,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${REACT_APP_API_KEY}`,
        },
      }
    );
    console.log(response.data.choices[0].message.content);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
    return "Error fetching response from OpenAI.";
  }
};

const Chat = () => {
  const inputRef = useRef(null);

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

  const handleButtonClick = (text) => {
    setInputText(text);
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
    // const chatGPTResponse = "일단 임시지만 넣기.. 돈이 아까운걸";
    const botMessage = { id: Date.now(), text: chatGPTResponse, sender: "bot" };
    setMessages((messages) => [...messages, botMessage]);
    setLoading(false);

    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(0, 0);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center h-full box-border pt-36 gap-8">
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div
            className="w-full flex flex-col overflow-y-auto scrollbar-hide"
            style={{ maxHeight: "calc(100vh - 20rem)" }}
          >
            <div className="flex w-full flex-col gap-16">
              {messages.map((msg, index) => (
                <div className="flex gap-4 w-full" key={index}>
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
            <div className="relative mb-10 w-1/2 items-center justify-center">
              <textarea
                ref={inputRef}
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
        <div className="w-1/4 h-full">
          <p className="text-lg">소방 관련 정보, 이런 건 어때요?</p>
          <ul className="list-disc text-gray-400 ml-4 leading-loose">
            <li
              className="mt-2"
              onClick={() =>
                handleButtonClick(
                  "높은 층에서 화재가 나면 어떻게 대피해야 하나요?"
                )
              }
            >
              높은 층에서 화재가 나면 어떻게 대피해야 하나요?
            </li>
            <li
              onClick={() =>
                handleButtonClick("소화전의 위치는 보통 어디에 있나요?")
              }
            >
              소화전의 위치는 보통 어디에 있나요?
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
