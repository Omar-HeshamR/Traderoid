import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'
import Image from 'next/image'
import { BotCardManager, BotCardName, BotCardTag, 
BotCardAssetsText, BotCardDescription, BotCardFeeRate, 
BotCardFeeLabel} from '@/library/typography'
import InvestButton from './InvestButton'
import InvestModal from './InvestModal'

const getRandomProfitLossRatio = () => {
    const randomNumber = (Math.random() * 200) - 100;
    const roundedNumber = Math.round(randomNumber * 100) / 100;
    return roundedNumber;
};

const BotCard = ({bot_object, myPortfolio, myBots}) => {

    const [profitLossRatio, setProfitLossRatio] = useState(0); 

    useEffect(() => {
      setProfitLossRatio(getRandomProfitLossRatio());
    }, []);

  return (
    <>      
        <Container>
            <TopContainer>
                <UppermostRow>
                    <BotCardManager>
                        @{bot_object.manager}
                    </BotCardManager>
                    <ProfitLossRatio color={profitLossRatio >= 0 ? COLORS.PigmentGreen600 : COLORS.PersianRed500}>
                        {profitLossRatio >= 0 ? `+ ${profitLossRatio.toFixed(2)}% P/L` : `- ${Math.abs(profitLossRatio).toFixed(2)}% P/L`}
                    </ProfitLossRatio>
                </UppermostRow>
                <BotCardName>
                    {bot_object.name}
                </BotCardName>
                <TagRow>
                    {bot_object.tags.map((tag, index) => (
                        <BotCardTag key={index}>{tag}</BotCardTag>
                    ))}
                </TagRow>
            </TopContainer>
            <DividingLine />
            <BottomContainer>
                {!myPortfolio && (
                    <AssetsRow>
                        <BotCardAssetsText>
                            Assets:
                        </BotCardAssetsText>
                        <AssetImagesRow>
                            {bot_object.assets.map((asset, index) => (
                                <Image
                                    key={index}
                                    src={asset.src}
                                    alt={`Asset ${index}`}
                                    width={asset.width}
                                    height={asset.height}
                                />
                            ))}
                        </AssetImagesRow>
                    </AssetsRow>
                )}
                <BotCardDescription>
                    {bot_object.description}
                </BotCardDescription>
                <BottommostRow>
                    {!myPortfolio && !myBots && (
                        <FeeColumn>
                            <BotCardFeeLabel>
                                Management Fee: &nbsp;
                                <BotCardFeeRate>
                                    {bot_object.management_fee}
                                </BotCardFeeRate>
                            </BotCardFeeLabel>
                            <BotCardFeeLabel>
                                Processing Fee: &nbsp;
                                <BotCardFeeRate>
                                    {bot_object.performance_fee}
                                </BotCardFeeRate>
                            </BotCardFeeLabel>
                        </FeeColumn>
                    )}
                    {myPortfolio && (
                        <>
                        <InvestButton withdraw/>
                        <InvestButton investMore/>
                        </>
                    )}
                    {!myPortfolio && !myBots && (
                        <InvestButton />
                    )}
                    {myBots && (
                        <InvestButton myBots/>
                    )}
                </BottommostRow>

            </BottomContainer>
        </Container>
    </>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
width: calc((100% - ${SIZING.px32} - ${SIZING.px32}) / 3);
aspect-ratio: 1 / 1;
background-color: ${COLORS.Black875};
border-radius: ${SIZING.px16};
transition: 0.4s ease-in-out;
cursor: pointer;
`
const TopContainer = styled.div`
display: flex;
flex-direction: column;
padding-left: ${SIZING.px24};
padding-right: ${SIZING.px24};
padding-top: ${SIZING.px24};
padding-bottom: ${SIZING.px16};
`
const UppermostRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const ProfitLossRatio = styled.span`
font-size: ${SIZING.px12};
padding: ${SIZING.px8} ${SIZING.px16};
font-family: "Uncut Sans Semibold";
background-color: ${COLORS.Black850};
border-radius: ${SIZING.px96};
color: ${({ color }) => color};
`
const TagRow = styled.div`
display: flex;
align-items: center;
margin-top: ${SIZING.px12};
gap: ${SIZING.px4};
overflow: scroll;
-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%);
mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%);
`
const DividingLine = styled.div`
width: 100%;
height: 1px;
background-color: ${COLORS.Black900Default};
`
const BottomContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
padding-left: ${SIZING.px24};
padding-right: ${SIZING.px24};
padding-top: ${SIZING.px16};
padding-bottom: ${SIZING.px24};
`
const AssetsRow = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px8};
`
const AssetImagesRow = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px4};

img{
width: ${SIZING.px16};
height: ${SIZING.px16};
border-radius: 50%;
opacity: 0.6;
}
`
const BottommostRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: auto;
`
const FeeColumn = styled.div`
display: flex;
flex-direction: column;
gap: ${SIZING.px4};
`

export default BotCard