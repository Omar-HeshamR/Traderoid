import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'
import { MdOutlineAutoGraph } from "react-icons/md";
import { useStateContext } from '@/context/StateContext';

const InvestButton = ({withdraw, investMore, myBots}) => {

  const { setShowInvestModal, setShowWithdrawModal } = useStateContext();
  let buttonText = "invest";

  if (withdraw) {
    buttonText = "withdraw";
  } else if (investMore) {
    buttonText = "invest more";
  } else if (myBots) {
    buttonText = "view stats";
  }

  function modalshow(){
    if(buttonText = "invest"){
      setShowInvestModal(true)
    }else if(buttonText == "withdraw"){
      setShowWithdrawModal(true)
    }
  }

  return (
    <Button withdraw={withdraw} myBots={myBots} onClick={() => modalshow()} >
        {!withdraw && !myBots && (
          <InvestIcon />
        )}
        {buttonText}
    </Button>
  )
}

const Button = styled.button`
display: flex;
align-items: center;
gap: ${SIZING.px4};
margin-left: ${(props) => (props.withdraw || props.myBots) ? 'auto' : '0'}; 
margin-right: ${(props) => props.withdraw ? SIZING.px8 : '0'}; 
background-color: ${(props) => props.withdraw ? COLORS.Black800 : COLORS.DartmouthGreen800}; 
padding: ${SIZING.px12} ${SIZING.px24};
letter-spacing: -0.04rem;
color: ${(props) => props.withdraw ? COLORS.Black300  : (props.myBots ? COLORS.Black900Default : COLORS.StandardWhiteDefault)};
background-color: ${(props) => props.withdraw ? COLORS.Black800 : (props.myBots ? COLORS.Black100 : COLORS.DartmouthGreen800)};
font-family: "Uncut Sans Semibold";
border: none;
outline: none;
border-radius: ${SIZING.px96};
transition: 0.4s ease-in-out;
cursor: pointer;

&:hover{
background-color: ${(props) => props.withdraw ? COLORS.Black800 : (props.myBots ? COLORS.StandardWhiteDefault : COLORS.DartmouthGreen900Default)};
}
`
const InvestIcon = styled(MdOutlineAutoGraph)`
font-size: ${SIZING.px16};
`

export default InvestButton