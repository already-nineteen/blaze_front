import { createGlobalStyle } from "styled-components";

import PretendardLight from "../assets/font/Pretendard-Light.woff";
import PretendardRegular from "../assets/font/Pretendard-Regular.woff";
import PretendardMedium from "../assets/font/Pretendard-Medium.woff";
import PretendardSemiBold from "../assets/font/Pretendard-SemiBold.woff";

export const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    #root {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'PretendardSemiBold';
        src: local('PretendardSemiBold');
        font-style: normal;
        src: url(${PretendardSemiBold}) format('woff');
    }
    @font-face {
        font-family: 'PretendardRegular';
        src: local('PretendardRegular');
        font-style: normal;
        src: url(${PretendardRegular}) format('woff');
    }
    @font-face {
        font-family: 'PretendardMedium';
        src: local('PretendardMedium');
        font-style: normal;
        src: url(${PretendardMedium}) format('woff');
    }
    @font-face {
        font-family: 'PretendardLight';
        src: local('PretendardLight');
        font-style: normal;
        src: url(${PretendardLight}) format('woff');
    }

    * {
        font-family: 'PretendardMedium';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
    @media screen and (min-width: 1026px) and (max-width: 1440px) {
        font-size: 90%;
    }

    @media screen and (min-width: 769px) and (max-width: 1025px) {
        font-size: 80%;
    }

    @media screen and (min-width: 541px) and (max-width: 768px) {
        font-size: 70%;
    }

    @media screen and (min-width: 301px) and (max-width: 540px) {
        font-size: 60%;
    }

    @media screen and (max-width: 300px) {
        font-size: 50%;
    }

    body {
        overflow-x: hidden;
    }


    p {
        display: inline-block;
    }

    a {
        display: inline-block;
        text-decoration: none;
        color: inherit;
    }

    label {
        cursor: pointer;
    }

    input,
    textarea {
        -moz-user-select: auto;
        -webkit-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        border: none;
        outline: none;
        resize: none;
    }

    input:focus {
        outline: none;
    }

    button {
        outline: none;
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }
}
`;
