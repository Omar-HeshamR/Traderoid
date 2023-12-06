import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/library/theme';
import { SIZING } from '@/library/sizing';
import { ModalTopBannerHeader, ModalInputLabel, 
ModalTotalAmountSpan, ModalTotalAmountNumber } from '@/library/typography';
import { useSigner, useStorage } from "@thirdweb-dev/react";
import { MdClose } from 'react-icons/md';
import { useStateContext } from '@/context/StateContext';
import TraderoidAccountABI from "@/contracts/abi/TraderoidAccountABI.json"
import TradioABI from "@/contracts/abi/TraderoidABI.json"
import { Traderiod_NFT_CONTRACT_ADDRESS } from '@/CENTERAL_VALUES';
import { ethers } from 'ethers';

const WithdrawModal = () => {

  const {showWithdrawModal, setShowWithdrawModal, pickedBot} = useStateContext();
  const [ withdrawlAmountInDollars, setWithdrawlAmountInDollars ] = useState(0.0);
  const [ withdrawlPercent, setWithdrawlPercent ] = useState();
  const [ loadingAmountInUSD, setLoadingAmountInUSD ] = useState(false);
  const signer = useSigner();
  const storage = useStorage();

  async function handleWithdraw(){
    if(!signer || !pickedBot){return}
    if(pickedBot.id){
        const contract = new ethers.Contract(Traderiod_NFT_CONTRACT_ADDRESS, TradioABI, signer);
        const tokenURIs = await contract.getAllTokenURIs();
        let index = 0;
        for (const uri of tokenURIs) {
            const data = await storage.download(uri);
            const metadataResponse = await fetch(data.url);
            const metadata = await metadataResponse.json();
            if(metadata.id === pickedBot.id) {
                console.log(metadata)
                const botWalletAddress = await contract.BotsWalletAddresses(index);
                console.log(botWalletAddress)
                const TraderoidAccountContract = new ethers.Contract(botWalletAddress, TraderoidAccountABI, signer);
                const tx = await TraderoidAccountContract.withdraw(ethers.BigNumber.from(withdrawlPercent));
                await tx.wait();
                break;
            }
            index += 1;
        }
    }
  }

  useEffect(() => {
    const AsyncFunc = async () => {
      if(!signer || !pickedBot){return}
      if(pickedBot.id){
          setLoadingAmountInUSD(true)
          const contract = new ethers.Contract(Traderiod_NFT_CONTRACT_ADDRESS, TradioABI, signer);
          const tokenURIs = await contract.getAllTokenURIs();
          let index = 0;
          for (const uri of tokenURIs) {
              const data = await storage.download(uri);
              const metadataResponse = await fetch(data.url);
              const metadata = await metadataResponse.json();
              if(metadata.id === pickedBot.id) {
                  console.log(metadata)
                  const botWalletAddress = await contract.BotsWalletAddresses(index);
                  console.log(botWalletAddress)
                  const TraderoidAccountContract = new ethers.Contract(botWalletAddress, TraderoidAccountABI, signer);
                  const _amountInUSD = await TraderoidAccountContract.getUserEstimateWithdrawValue(withdrawlPercent);
                  setWithdrawlAmountInDollars(Number(_amountInUSD)/(10**18));
                  setLoadingAmountInUSD(false);
                  break;
              }
              index += 1;
          }
      }
    };
    AsyncFunc();
  }, [withdrawlPercent])

  const WithdrawRateChange = (e) => {

    const inputValue = e.target.value;

    if (inputValue.charAt(0) === '0') {
      setWithdrawlPercent(0)
      return;
    }

    if (inputValue > 100) {
      setWithdrawlPercent(100)
    } else if (inputValue < 0) {
      setWithdrawlPercent(0);
    } else {
      setWithdrawlPercent(inputValue)
    }
  };

  return (
    <>
    {showWithdrawModal &&
    <Background>
      <ModalBody>
        <TopBanner>
          <ModalTopBannerHeader>Withdraw from {pickedBot?.name}</ModalTopBannerHeader>
          <CloseIcon onClick={() => setShowWithdrawModal(false)}/>
        </TopBanner>

        <BottomContent>
          <LabelAndInputColumn>
            <ModalInputLabel htmlFor="botAddress">
              Please enter your withdraw percentage
            </ModalInputLabel>
            <InputWrapper>
              <Input  
                placeholder="0.00"
                type="number"
                min="0"
                max="75"
                value={withdrawlPercent}
                onChange={WithdrawRateChange}
                />
              %
            </InputWrapper>
          </LabelAndInputColumn>

          <TotalAmountRow>
            <ModalTotalAmountSpan>
              Your total investment amount in USD:
            </ModalTotalAmountSpan>
            <ModalTotalAmountNumber>
              {loadingAmountInUSD ? <>calculating..</> : <>$ {withdrawlAmountInDollars.toFixed(5)}</>}
            </ModalTotalAmountNumber>
          </TotalAmountRow>

          <CTAButton onClick={handleWithdraw}>
            withdraw
          </CTAButton>
        </BottomContent>
      </ModalBody>
    </Background>
    }</>
  );
};

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
width: ${SIZING.px480};
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
gap: ${SIZING.px24};
`
const LabelAndInputColumn = styled.div`
display: flex;
flex-direction: column;
gap: ${SIZING.px8};
`
const InputWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: ${SIZING.px8} ${SIZING.px16};
background-color: ${COLORS.Black850};
border: 1px solid ${COLORS.Black800};
border-radius: ${SIZING.px96};
font-family: "Uncut Sans Bold";
color: ${COLORS.Black700};
`
const Input = styled.input`
width: 80%;
line-height: 100%;
letter-spacing: -0.02rem;
font-size: ${SIZING.px16};
outline: none;
border: none;
background-color: transparent;
color: ${COLORS.Black100};
font-family: "Uncut Sans Medium";

&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

&[type=number] {
-moz-appearance: textfield;
}

&:focus {
border-color: ${COLORS.Black600};
}

&::placeholder {
font-family: "Uncut Sans Regular";
color: ${COLORS.Black600};
}
`
const CTAButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: ${SIZING.px4};
background-color: ${COLORS.PersianRed500};
padding: ${SIZING.px12} ${SIZING.px24};
letter-spacing: -0.04rem;
color: ${COLORS.StandardWhiteDefault};
font-family: 'Uncut Sans Semibold';
border: none;
outline: none;
border-radius: ${SIZING.px96};
transition: 0.4s ease-in-out;
cursor: pointer;

&:hover {
background-color: ${COLORS.PersianRed600Default};
}
`
const TotalAmountRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export default WithdrawModal
