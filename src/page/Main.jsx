import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import mainIntroImg from "../assets/img/main-intro.png";

const Main = () => {
  return (
    <Layout>
      <MainContainer>
      <div className="flex flex-col items-center justify-center h-full">
        <Row>
          <div>
            <Img src={mainIntroImg} />
          </div>
          <div>
            <div className="mb-8 text-center">
              <P><HighLight>화재</HighLight>, 일상 중 언제든 일어날 수 있습니다.</P>
            </div>
            <div className="space-x-4">
              <P>이름과 함께 화재에 대한 지식을 습득하고 <br />
              대처 상황을 경험해 보며 훈련해 봐요.</P>
            </div>
          </div>
        </Row>
      </div>
      </MainContainer>
    </Layout>
  );
};

export default Main;

const Img = styled.img`
  
`;

const HighLight = styled.span`
  background-color: #FFF6A3;
  font-family: 'PretendardSemiBold';
  font-size: 26px;
`;

const P = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 26px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,254,247,1) 100%);
`;