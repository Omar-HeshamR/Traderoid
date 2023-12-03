import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'
import Image from 'next/image';
import ChatBubbles from './ChatBubbles';
import { BsStars } from "react-icons/bs";
import LogoUncolored from '@/public/images/LogoUncolored.webp'
import { ChatTopBarSpan, ChatBottomColumnSmall, ChatInitialScreenHeader,
ChatGridNormalSpan, ChatGridBoldSpan } from '@/library/typography';
import { MdArrowUpward } from "react-icons/md";


const Chat = () => {
  
  const [isTyping, setIsTyping] = useState(false);
  const [showInitialScreen, setShowInitialScreen] = useState(true);
  const [showChatContainer, setShowChatContainer] = useState(false);
  const [userMessages, setUserMessages] = useState([]); 
  const [aiMessages, setAiMessages] = useState([]);     
  const [messages, setMessages] = useState([]);
  const userMessageRef = useRef();
  const chatContainerRef = useRef(null);

  const testResponseString = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries, but also the leap into 
  electronic typesetting, remaining essentially unchanged. It was popularised in 
  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing software like Aldus PageMaker 
  including versions of Lorem Ipsum.
  `

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    }, [messages]);

  
  function handleInput(event) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    const inputValue = event.target.value.trim();
    setIsTyping(inputValue.length > 0);
  }

  function handleSend(vart) {
    
    const trimmedInputValue = userMessageRef.current.value.trim();

    if (trimmedInputValue !== '') {
        setUserMessages([...userMessages, trimmedInputValue]);
        const aiResponse = testResponseString;
        setAiMessages([...aiMessages, aiResponse]);
        userMessageRef.current.value = ""
        setShowInitialScreen(false);
        setShowChatContainer(true);
        setMessages([...messages, { user: trimmedInputValue, ai: aiResponse }]);
    }
    }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };


  return (
    <Section>
        <TopBar>
            <ArtificialIntelligenceIcon/>
            <ChatTopBarSpan>
                AI Advisor
            </ChatTopBarSpan>
        </TopBar>

        {showInitialScreen && (
            <InitialScreen>
                <InitialScreenTopColumn>
                    <Image src={LogoUncolored} alt="Tradroid.io"/>
                    <ChatInitialScreenHeader>
                        How can we assist you today?
                    </ChatInitialScreenHeader>
                </InitialScreenTopColumn>
                <InitialScreenBottomGrid>
                    <GridItem>
                        <ChatGridNormalSpan>
                            Tell me about
                        </ChatGridNormalSpan>
                        <ChatGridBoldSpan>
                            current crypto trends
                        </ChatGridBoldSpan>
                    </GridItem>
                    <GridItem>
                        <ChatGridNormalSpan>
                            Tell me awesome 
                        </ChatGridNormalSpan>
                        <ChatGridBoldSpan>
                            bot trading strategies
                        </ChatGridBoldSpan>
                    </GridItem>
                    <GridItem>
                        <ChatGridNormalSpan>
                            Tell me
                        </ChatGridNormalSpan>
                        <ChatGridBoldSpan>
                            what bots are trending
                        </ChatGridBoldSpan>
                    </GridItem>
                    <GridItem>                   
                        <ChatGridNormalSpan>
                            Give me a list of
                        </ChatGridNormalSpan>
                        <ChatGridBoldSpan>
                            online resources about bot trading
                        </ChatGridBoldSpan>
                    </GridItem>
                </InitialScreenBottomGrid>
            </InitialScreen>
        )}

        {showChatContainer && (
            <ChatContainer  ref={chatContainerRef}>
                <ChatBubbles messages={messages} />
            </ChatContainer>
        )}

        <BottomColumn>
            <MessageWrapper>
                <MessageInput rows={1} ref={userMessageRef} onInput={handleInput} placeholder="Message Droidviser..." onKeyDown={handleKeyDown}/> 
                <SendButton disabled={!isTyping} onClick={handleSend}>
                    <UpArrow />
                </SendButton>                     
            </MessageWrapper>
            <ChatBottomColumnSmall>
                Droidviser can make mistakes. Consider checking important information.
            </ChatBottomColumnSmall>
        </BottomColumn>

    </Section>
  )
}

const Section = styled.section`
display: flex;
flex-direction: column;
height: calc(100% - ${SIZING.px96});
max-height: calc(100% - ${SIZING.px96});
justify-content: space-between;
padding: ${SIZING.px16} ${SIZING.px16};
background-color: ${COLORS.Black875};
border-radius: ${SIZING.px16};
`
const TopBar = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px4};
margin-bottom: ${SIZING.px24};
`
const ArtificialIntelligenceIcon = styled(BsStars)`
font-size: ${SIZING.px14};
fill: ${COLORS.DartmouthGreen600};
`
const BottomColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: ${SIZING.px16};
`
const MessageWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding-left: ${SIZING.px12};
padding-right: ${SIZING.px12};
padding-top: ${SIZING.px12};
padding-bottom: ${SIZING.px12};
background-color: ${COLORS.Black850};
border: 1px solid ${COLORS.Black800};
border-radius: ${SIZING.px16};
`
const MessageInput = styled.textarea`
max-height: ${SIZING.px128};
line-height: 130%;
width: calc(100% - ${SIZING.px48} - ${SIZING.px16});
font-size: ${SIZING.px16};
letter-spacing: -0.02rem;
font-family: "Uncut Sans Medium";
color: ${COLORS.Black100};
background-color: transparent;
border: none;
outline: none;
resize: none;

&::placeholder {
font-family: "Uncut Sans Medium";
color: ${COLORS.Black600};
}
`
const UpArrow = styled(MdArrowUpward)`
font-size: ${SIZING.px16};
fill: ${props => (props.disabled ? COLORS.Black200 : COLORS.StandardWhiteDefault)};
`
const SendButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: auto;
width: ${SIZING.px48};
height: ${SIZING.px32};
background-color: ${props => (props.disabled ? COLORS.Black800 : COLORS.DartmouthGreen900Default)};
border-radius: ${SIZING.px96};
cursor: ${props => (props.disabled ? 'auto' : 'pointer')};

`
const InitialScreen = styled.div`
display: flex;
flex-direction: column;
margin-top: auto;
margin-bottom: ${SIZING.px64};
gap: ${SIZING.px96};
`
const InitialScreenTopColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: ${SIZING.px16};

img{
width: ${SIZING.px64};
height: ${SIZING.px64};
}
`
const InitialScreenBottomGrid = styled.div`
display: grid;
margin: 0 auto;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: ${SIZING.px8};
grid-row-gap: ${SIZING.px8};
width: 70%;
`
const GridItem = styled.button`
display: flex;
flex-direction: column;
gap: ${SIZING.px2};
padding: ${SIZING.px8} ${SIZING.px24};
background-color: ${COLORS.Black850};
border: 1px solid ${COLORS.Black800};
border-radius: ${SIZING.px96};
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
background-color: transparent;
}
`
const ChatContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: auto;
margin-bottom: ${SIZING.px24};
max-height: ${SIZING.px416};
overflow-y: scroll;
overflow-x: hidden;
`

export default Chat