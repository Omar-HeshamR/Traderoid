import styled from "styled-components";
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'

export const TopBarPageHeader = styled.h1`
font-size: ${SIZING.px24};
letter-spacing: -0.075rem;
color: ${COLORS.Black100};
font-family: "Uncut Sans Semibold";
`
export const TopBarFilterText = styled.span`
font-size: ${SIZING.px14};
letter-spacing: -0.0175rem;
color: ${COLORS.Black200};
`
export const LeftBarTrademarkText = styled.small`
font-size: ${SIZING.px12};
color: ${COLORS.Black800};
`
export const BotCardManager = styled.span`
font-size: ${SIZING.px12};
letter-spacing: -0.045rem;
color: ${COLORS.Black700};
font-family: "Uncut Sans Regular";
`
export const BotCardName = styled.h1`
margin-top: ${SIZING.px8};
font-size: ${SIZING.px36};
letter-spacing: -0.0675rem;
color: ${COLORS.Black100};
`
export const BotCardTag = styled.span`
padding: ${SIZING.px8} ${SIZING.px12};
font-size: ${SIZING.px12};
letter-spacing: -0.03rem;
color: ${COLORS.Black400};
border-radius: ${SIZING.px96};
background-color: ${COLORS.Black850};
font-family: "Uncut Sans Medium";
`
export const BotCardAssetsText = styled.span`
font-size: ${SIZING.px12};
letter-spacing: -0.015rem;
color: ${COLORS.Black700};
font-family: "Uncut Sans Regular";
`
export const BotCardDescription = styled.p`
display: -webkit-box;
height: 3.6rem;
line-height: 120%;
margin-top: ${SIZING.px8};
font-size: ${SIZING.px12};
color: ${COLORS.Black400};
font-family: "Uncut Sans Regular";
text-overflow: ellipsis;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
overflow: hidden;
`
export const BotCardInvestButtonText = styled.span`
letter-spacing: -0.04rem;
color: ${COLORS.StandardWhiteDefault};
font-family: "Uncut Sans Semibold";
`
export const BotCardFeeLabel = styled.span`
font-size: ${SIZING.px12};
letter-spacing: -0.03rem;
color: ${COLORS.Black600};
font-family: "Uncut Sans Regular";
`
export const BotCardFeeRate = styled.span`
font-size: ${SIZING.px12};
letter-spacing: 0rem;
color: ${COLORS.Black300};
font-family: "Uncut Sans Medium";
`