import { SIZING } from '@/library/sizing'
import { COLORS } from '@/library/theme'
import React from 'react'
import styled from 'styled-components'

const TableOfContent = ({scrollFunc}) => {
  return (
    <TableOfContentsBar>
        <Header>Documentation Links</Header>
        <TableOfContentContainer>
            <ContentLink onClick={() => scrollFunc('1')}>1. Proccess Overview</ContentLink>
            <ContentLink onClick={() => scrollFunc('2')}>2. Setting up Environment</ContentLink>
            <ContentLink onClick={() => scrollFunc('3')}>3. Writing up the script</ContentLink>
            <ContentLink onClick={() => scrollFunc('4')}>4. Creating the bot</ContentLink>
            <ContentLink onClick={() => scrollFunc('5')}>5. Executing the Script</ContentLink>
            <ContentLink onClick={() => scrollFunc('6')}>6. Automating the Execution</ContentLink>      
            <ContentLink onClick={() => scrollFunc('7')}>7. Final Remarks</ContentLink>                  
        </TableOfContentContainer>
    </TableOfContentsBar>
  )
}


const TableOfContentsBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 20vw;
`

const Header = styled.span`
margin-top: ${SIZING.px24};
margin-bottom: ${SIZING.px12};
color: ${COLORS.Black200};
font-family: "Uncut Sans Medium";
`

const TableOfContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 90%;
margin-top: ${SIZING.px12};
padding: ${SIZING.px10} ${SIZING.px16};
background-color: ${COLORS.Black875};
border-radius: ${SIZING.px16};
`
const ContentLink = styled.div`
width: 100%;
font-family: "Uncut Sans Medium";
padding: ${SIZING.px16} 0;
padding-left: ${SIZING.px10};
color: ${COLORS.Black200};
cursor: pointer;
transition: 0.3s ease all;
&:hover{
    background-color: ${COLORS.Black700};
    border-radius: ${SIZING.px20};
    color: white;
}
`

export default TableOfContent