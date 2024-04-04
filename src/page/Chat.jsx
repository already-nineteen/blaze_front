import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Layout/Header";
import { FaSpinner } from "react-icons/fa";

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
  return <div>chat</div>;
};

export default Chat;
