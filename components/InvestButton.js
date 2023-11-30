import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'
import { MdOutlineAutoGraph } from "react-icons/md";
import { BotCardInvestButtonText } from '@/library/typography';

const InvestButton = () => {
  return (
    <Button>
        <InvestIcon />
        <BotCardInvestButtonText>
            invest
        </BotCardInvestButtonText>
    </Button>
  )
}

const Button = styled.button`
display: flex;
align-items: center;
gap: ${SIZING.px4};
background-color: ${COLORS.DartmouthGreen800};
padding: ${SIZING.px12} ${SIZING.px24};
border: none;
outline: none;
border-radius: ${SIZING.px96};
transition: 0.4s ease-in-out;
cursor: pointer;

&:hover{
background-color: ${COLORS.DartmouthGreen900Default};
}
`
const InvestIcon = styled(MdOutlineAutoGraph)`
font-size: ${SIZING.px16};
`

export default InvestButton