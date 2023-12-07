import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'
import { ModalTopBannerHeader } from '@/library/typography'
import { useStateContext } from '@/context/StateContext';
import { MdClose } from 'react-icons/md';
import { MdContentCopy } from "react-icons/md";
import Image from 'next/image'
import BTC from '@/public/images/assets/Bitcoin.webp'
import ETH from '@/public/images/assets/ETH.webp'
import LINK from '@/public/images/assets/LINK.webp'
import MANA from '@/public/images/assets/MANA.webp'
import MATIC from '@/public/images/assets/MATIC.webp'
import UNI from '@/public/images/assets/UNI.webp'


const BotStatsModel = () => {

  const {showBotStatsModal, setShowBotStatsModal, pickedBot} = useStateContext();
  console.log(pickedBot)

  const botDescription = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
  in culpa qui officia deserunt mollit anim id est laborum.
  `
//   console.log(pickedBot?.assets)

  const cryptoImages = {
    "BTC": BTC,
    "ETH": ETH,
    "LINK": LINK,
    "MANA": MANA,
    "MATIC": MATIC,
    "UNI": UNI,
  };
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        window.alert('Wallet address copied to clipboard!');
      })
      .catch((err) => {
        console.error('Unable to copy to clipboard', err);
        window.alert('Error copying wallet address to clipboard. Please try again.');
      });
  };

  return (
    <>
        {showBotStatsModal && (
            <Background>

                <ModalBody>

                    <TopBanner>
                        <ModalTopBannerHeader>
                            {pickedBot?.name}
                        </ModalTopBannerHeader>
                        <CloseIcon onClick={() => setShowBotStatsModal(false)}/>
                    </TopBanner>

                    <BottomContent>
                        <AddressRowColumn>
                            <AddressRow>
                                Manager:
                                <RightRow>
                                {pickedBot?.manager}
                                <ContentCopyIcon onClick={() => copyToClipboard(pickedBot?.manager)} />
                                </RightRow>
                            </AddressRow>
                            <AddressRow>
                                Wallet: 
                                <RightRow>
                                {pickedBot?.walletAddress}
                                <ContentCopyIcon onClick={() => copyToClipboard(pickedBot?.walletAddress)} />
                                </RightRow>
                            </AddressRow>
                        </AddressRowColumn>
                        <FeeRow>
                            <Fee>
                                Management Fee:&nbsp;
                                <FeeRate>
                                    {pickedBot?.ManagementFee}%
                                </FeeRate>
                            </Fee>
                            <Fee>
                                Performance Fee:&nbsp;
                                <FeeRate>
                                    {pickedBot?.PerformanceFee}%
                                </FeeRate>
                            </Fee>
                        </FeeRow>
                        <Description>
                            {botDescription}
                        </Description>
                        <BalancesHeader>
                            Balances and Values in USD:
                        </BalancesHeader>
                        
                        <BalanceRowsColumn>

                        {pickedBot?.assets.map((asset) => (
                            <MasterRow key={asset}>
                                <BalanceRow>
                                {asset}:
                                <AmountRow>
                                    100
                                    <Image src={cryptoImages[asset]} alt={asset} />
                                </AmountRow>
                                </BalanceRow>
                                <BalanceRow>
                                Value:
                                <AmountRow>
                                    5,500&nbsp;$                                  
                                </AmountRow>
                                </BalanceRow>
                            </MasterRow>
                        ))}

                        </BalanceRowsColumn>

                        <TotalValue>
                            Total wallet value:
                            <TotalValueAmount>
                                5,500&nbsp;$
                            </TotalValueAmount>
                        </TotalValue>

                        <InvestButton>
                            invest
                        </InvestButton>

                    </BottomContent>
                    
                </ModalBody>

            </Background>
        )}
    </>
  )
}

const Background = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(20, 20, 20, 0.75);
backdrop-filter: blur(${SIZING.px2});
z-index: 10;
`
const ModalBody = styled.div`
display: flex;
flex-direction: column;
width: ${SIZING.px640};
background-color: ${COLORS.Black850};
border-radius: ${SIZING.px16};
overflow: clip;
z-index: 11;
`
const TopBanner = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: ${SIZING.px24} ${SIZING.px32};
border-bottom: 2px solid rgba(20, 20, 20, 0.75);
`
const CloseIcon = styled(MdClose)`
font-size: ${SIZING.px24};
fill: ${COLORS.Black600};
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover {
fill: ${COLORS.Black400};
}
`
const BottomContent = styled.div`
display: flex;
flex-direction: column;
padding-top: ${SIZING.px24};
padding-left: ${SIZING.px32};
padding-right: ${SIZING.px32};
padding-bottom: ${SIZING.px32};
`
const AddressRowColumn = styled.div`
display: flex;
flex-direction: column;
gap: ${SIZING.px4};
`
const AddressRow = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-size: ${SIZING.px16};
color: ${COLORS.Black500};
letter-spacing: -0.02rem;
`
const RightRow = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px8};
font-size: ${SIZING.px14};
color: ${COLORS.Black200};
`
const ContentCopyIcon = styled(MdContentCopy)`
font-size: ${SIZING.px16};
fill: ${COLORS.Black100};
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover{
transform: scale(1.05);
fill: ${COLORS.StandardWhiteDefault};
}
`
const FeeRow = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px16};
margin-top: ${SIZING.px16};
`
const Fee = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: ${SIZING.px16};
color: ${COLORS.Black500};
letter-spacing: -0.02rem;
`
const FeeRate = styled.div`
font-size: ${SIZING.px16};
color: ${COLORS.Black200};
font-family: "Uncut Sans Medium";
letter-spacing: -0.04rem;
`
const Description = styled.p`
max-height: ${SIZING.px128};
line-height: 120%;
margin-top: ${SIZING.px16};
overflow-y: scroll;
font-size: ${SIZING.px14};
color: ${COLORS.Black200};
font-family: "Uncut Sans Regular";
letter-spacing: 0rem;

&::-webkit-scrollbar {
display: block;
width: ${SIZING.px8};
}
&::-webkit-scrollbar-thumb {
border-radius: ${SIZING.px12};
background-color: ${COLORS.Black800};
} 
-ms-overflow-style: auto;
scrollbar-width: auto;
`
const BalancesHeader = styled.span`
margin-top: ${SIZING.px32};
font-size: ${SIZING.px24};
letter-spacing: -0.04rem;
font-family: "Uncut Sans Semibold";
color: ${COLORS.Black200};
`
const BalanceRowsColumn = styled.div`
display: flex;
flex-direction: column;
margin-top: ${SIZING.px16};
gap: ${SIZING.px8};
`
const MasterRow = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px64};
`
const BalanceRow = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
letter-spacing: -0.02rem;
font-size: ${SIZING.px20};
font-family: "Uncut Sans Regular";
color: ${COLORS.Black200};
`
const AmountRow = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px4};
font-size: ${SIZING.px20};
font-family: "Uncut Sans Medium";
color: ${COLORS.Black100};

img{
width: ${SIZING.px20};
height: ${SIZING.px20};
}
`
const TotalValue = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: ${SIZING.px16};
letter-spacing: -0.02rem;
font-size: ${SIZING.px24};
font-family: "Uncut Sans Regular";
color: ${COLORS.Black200};
`
const TotalValueAmount = styled.span`
display: flex;
font-size: ${SIZING.px24};
font-family: "Uncut Sans Medium";
color: ${COLORS.Black100};
`
const InvestButton = styled.button`
margin-top: ${SIZING.px24};
padding: ${SIZING.px12} ${SIZING.px24};
letter-spacing: -0.04rem;
font-size: ${SIZING.px24};
background-color: ${COLORS.DartmouthGreen800};
border-radius: ${SIZING.px24};
font-family: "Uncut Sans Semibold";
border: none;
outline: none;
transition: 0.4s ease-in-out;
cursor: pointer;

&:hover{
background-color: ${COLORS.DartmouthGreen900Default};
}
`

export default BotStatsModel