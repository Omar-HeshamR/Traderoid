import React, { useEffect } from 'react'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'
import { useRouter } from 'next/router'
import TopLeftLogo from '@/components/TopLeftLogo'
import TableOfContent from '@/components/documentation/TableOfContent.js'
import styled from 'styled-components'

const Documentation = () => {

  const router = useRouter();
  function scrollFunc(spanId){
    const element = document.getElementById(spanId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Section>
        <DocsNav>
            <LogoContainer onClick={() => router.push('/marketplace')}>
                <TopLeftLogo />
            </LogoContainer>
            <ButtonContainer>
            <BackToAppButton onClick={() => router.push("/marketplace")}>
                Back to App
            </BackToAppButton>
            </ButtonContainer>
        </DocsNav>
        <TotalHoldingRow>
            <MainContentContainer>
                
                <MainHeader>Creating a Script & Bot Full Documentation</MainHeader>

                <SectionHeader id='1'>1. Proccess Overview</SectionHeader>
                <SectionHeader id='2'>2. Setting up Environment</SectionHeader>
                <SectionHeader id='3'>3. Writing up the script</SectionHeader>
                <SectionHeader id='4'>4. Creating the bot</SectionHeader>
                <SectionHeader id='5'>5. Executing the Script</SectionHeader>
                <SectionHeader id='6'>6. Automating the Execution</SectionHeader>      
                <SectionHeader id='7'>7. Final Remarks</SectionHeader>    
            
            
            </MainContentContainer>
            <TableOfContent scrollFunc={scrollFunc}/>
        </TotalHoldingRow>
    </Section>
  )
}

const Section = styled.section`
width: 100%;
height: 100vh;
background-color: ${COLORS.Black900Default};
overflow: hidden;
`

const DocsNav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: ${COLORS.Black875};
`

const LogoContainer = styled.div`
display: flex;
align-items: center;
padding: 0 ${SIZING.px32};
height: ${SIZING.px96};
cursor: pointer;
`
// to ensure its consistent with the table of content location
const ButtonContainer = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
width: 20vw;
`

const BackToAppButton = styled.button`
color: ${COLORS.DartmouthGreen600};
background-color: ${COLORS.Black800};
font-size: ${SIZING.px16};
outline: none;
border: none;
font-family: "Uncut Sans Medium";
padding: ${SIZING.px20} ${SIZING.px40};
width: 90%;
border-radius: ${SIZING.px12};
cursor: pointer;
transition: 0.3s ease-in-out all;
&:hover{
    border: 0.2vw double ${COLORS.DartmouthGreen600};
    border-radius: ${SIZING.px20};
}
`

const TotalHoldingRow = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
`

const MainContentContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: ${SIZING.px24};
padding-left: ${SIZING.px24}; 
width: 80vw;
gap: 40vw;
overflow-y: scroll;

`

const MainHeader = styled.span`
font-family: "Uncut Sans Bold";
font-size: ${SIZING.px32};
`
const SectionHeader = styled.span`
font-family: "Uncut Sans Medium";
font-size: ${SIZING.px32};
`


export default Documentation