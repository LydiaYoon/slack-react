import React from 'react';
import styled from "styled-components";
import ChannelList from "./Components/ChannelList"
import ChatList from "./Components/ChatList"

function App() {
  return (
    <MainFrame>
      <ChannelList></ChannelList>
      <ChatList></ChatList>
    </MainFrame> 
  );
}

const MainFrame = styled.div`
display: flex;
height: 100%;
flex-direction: row;
`;


// styled-component를 사용하면 CSS에 자바스크립트 변수 등을 사용할 수 있음 👍


export default App;
