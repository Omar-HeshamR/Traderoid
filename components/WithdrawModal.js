import React, { useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/library/theme';
import { SIZING } from '@/library/sizing';
import { ModalTopBannerHeader, ModalInputLabel, 
ModalTotalAmountSpan, ModalTotalAmountNumber } from '@/library/typography';
import { MdClose } from 'react-icons/md';
import { useStateContext } from '@/context/StateContext';

const WithdrawModal = () => {

  const {showWithdrawModal, setShowWithdrawModal} = useStateContext();
  const WithdrawRate = useRef();

  const WithdrawRateChange = () => {

    const inputValue = WithdrawRate.current.value;

    if (inputValue.charAt(0) === '0') {
      WithdrawRate.current.value = '';
      return;
    }

    if (inputValue > 100) {
        WithdrawRate.current.value = 100;
    } else if (inputValue < 0) {
        WithdrawRate.current.value = 0;
    }
  };

  return (
    <>
    {showWithdrawModal &&
    <Background>
      <ModalBody>
        <TopBanner>
          <ModalTopBannerHeader>Withdraw from MusaBot</ModalTopBannerHeader>
          <CloseIcon/>
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
                ref={WithdrawRate}
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
              $ 1,356.90
            </ModalTotalAmountNumber>
          </TotalAmountRow>

          <CTAButton>
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
`
const ModalBody = styled.div`
display: flex;
flex-direction: column;
width: ${SIZING.px480};
background-color: ${COLORS.Black850};
border-radius: ${SIZING.px16};
overflow: clip;
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
