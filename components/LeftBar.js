import React, { useState } from 'react';
import styled from 'styled-components'
import TopLeftLogo from './TopLeftLogo'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'
import { MdStorefront } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { MdOutlineBuild } from "react-icons/md";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { useRouter } from 'next/router'

const LeftBar = ({selected}) => {

    const router = useRouter()

    function goToMarketPlace() {
        router.push("/marketplace")
    }

    function goToMyPortfolio() {
        router.push("/my-portfolio")
    }

    function goToMyBots() {
        router.push("/my-bots")
    }

    function goToCreateABot() {
        router.push("/create-a-bot")
    }

    function goToAskDroidviser() {
        router.push("/ask-droidviser")
    }

    return (
        <Section>
            <LogoContainer>
                <TopLeftLogo />
            </LogoContainer>
            <MainColumn>
                <Nav>
                    <Menu>
                        <MenuItemTop onClick={goToMarketPlace}
                        selected={selected === 'marketplace'}>
                            <MarketplaceIcon 
                            selected={selected === 'marketplace'}/>
                            Marketplace
                        </MenuItemTop>
                        <MenuItem onClick={goToMyPortfolio}
                        selected={selected === 'portfolio'}>
                            <MyPortfolioIcon 
                            selected={selected === 'portfolio'}/>
                            My portfolio
                        </MenuItem>
                        <MenuItem onClick={goToMyBots}
                        selected={selected === 'bots'}
                        >
                            <MyBotsIcon 
                            selected={selected === 'bots'}/>
                            My bots
                        </MenuItem>
                        <MenuItemBottom onClick={goToCreateABot}
                        selected={selected === 'create'}>
                            <CreateABotIcon 
                            selected={selected === 'create'}
                            />
                            Create a bot
                        </MenuItemBottom>
                    </Menu>
                    <MenuItemAsk onClick={goToAskDroidviser}
                    selected={selected === 'ask'}>
                        <AskDroidviserIcon 
                        selected={selected === 'ask'}
                        />
                        Ask Droidviser
                    </MenuItemAsk>
                </Nav>

                <Logout>
                    <LogoutIcon />
                    Logout
                </Logout>
            </MainColumn>
        </Section>
    )
}

const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 20vw;
height: 100%;
`
const LogoContainer = styled.div`
display: flex;
align-items: center;
padding: 0 ${SIZING.px40};
height: ${SIZING.px96};
`
const MainColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: calc(100% - ${SIZING.px96});
padding-left: ${SIZING.px40};
padding-right: ${SIZING.px40};
padding-bottom: ${SIZING.px40};
`
const Nav = styled.nav`
display: flex;
flex-direction: column;
width: 100%;
gap: ${SIZING.px16};
`
const Menu = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
`
const MenuItem = styled.li`
display: flex;
gap: ${SIZING.px8};
padding: ${SIZING.px24} ${SIZING.px36};
letter-spacing: -0.05rem;
font-family: "Uncut Sans Medium";
color: ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black700)};
background-color: ${COLORS.Black875};
font-size: ${SIZING.px16};
border-bottom: 1px solid ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black850)};
transition: 0.4s ease-in-out;
cursor: pointer;
pointer-events: ${({ selected }) => (selected ? 'none' : 'auto')};

&:hover{
color: ${COLORS.Black500};
border-bottom: 1px solid ${COLORS.Black700};
}
`
const MenuItemTop = styled.li`
display: flex;
gap: ${SIZING.px8};
padding: ${SIZING.px24} ${SIZING.px36};
letter-spacing: -0.05rem;
font-family: "Uncut Sans Medium";
color: ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black700)};
background-color: ${COLORS.Black875};
font-size: ${SIZING.px16};
border-bottom: 1px solid ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black850)};
border-top-left-radius: ${SIZING.px16};
border-top-right-radius: ${SIZING.px16};
transition: 0.4s ease-in-out;
cursor: pointer;
pointer-events: ${({ selected }) => (selected ? 'none' : 'auto')};

&:hover{
color: ${COLORS.Black500};
border-bottom: 1px solid ${COLORS.Black700};
}
`
const MenuItemBottom = styled.li`
display: flex;
gap: ${SIZING.px8};
padding: ${SIZING.px24} ${SIZING.px36};
letter-spacing: -0.05rem;
font-family: "Uncut Sans Medium";
color: ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black700)};
background-color: ${COLORS.Black875};
font-size: ${SIZING.px16};
border-bottom-left-radius: ${SIZING.px16};
border-bottom-right-radius: ${SIZING.px16};
transition: 0.4s ease-in-out;
cursor: pointer;
pointer-events: ${({ selected }) => (selected ? 'none' : 'auto')};

&:hover{
color: ${COLORS.Black500};
}
`
const MenuItemAsk = styled.li`
display: flex;
gap: ${SIZING.px8};
padding: ${SIZING.px24} ${SIZING.px36};
letter-spacing: -0.05rem;
font-family: "Uncut Sans Medium";
color: ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black700)};
background-color: ${COLORS.Black875};
font-size: ${SIZING.px16};
border-radius: ${SIZING.px16};
transition: 0.4s ease-in-out;
cursor: pointer;
pointer-events: ${({ selected }) => (selected ? 'none' : 'auto')};

&:hover{
color: ${COLORS.Black500};
}
`
const MarketplaceIcon = styled(MdStorefront)`
fill: ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black700)};
transition: 0.4s ease-in-out;
${MenuItem}:hover & {
fill: ${COLORS.Black500};
}
`
const MyPortfolioIcon = styled(MdOutlineAccountBalanceWallet)`
fill: ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black700)};
transition: 0.4s ease-in-out;
${MenuItem}:hover & {
fill: ${COLORS.Black500};
}
`
const MyBotsIcon = styled(MdOutlineBuild)`
fill: ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black700)};
transition: 0.4s ease-in-out;
${MenuItem}:hover & {
fill: ${COLORS.Black500};
}
`
const CreateABotIcon = styled(MdOutlineAddCircleOutline)`
fill: ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black700)};
transition: 0.4s ease-in-out;
${MenuItem}:hover & {
fill: ${COLORS.Black500};
}
`
const AskDroidviserIcon = styled(BsStars)`
fill: ${({ selected }) => (selected ? COLORS.DartmouthGreen600 : COLORS.Black700)};
transition: 0.4s ease-in-out;
${MenuItem}:hover & {
fill: ${COLORS.Black500};
}
`
const Logout = styled.div`
display: flex;
align-items: center;
gap: ${SIZING.px8};
font-size: ${SIZING.px16};
letter-spacing: -0.05rem;
font-family: "Uncut Sans Medium";
color: ${COLORS.Black700};
transition: 0.4s ease-in-out;
cursor: pointer;

&:hover{
color: ${COLORS.Black500};
}
`
const LogoutIcon = styled(MdOutlineLogout)`
font-size: ${SIZING.px16};
fill: ${COLORS.Black700};
-webkit-transform: scaleX(-1);
transform: scaleX(-1);
transition: 0.4s ease-in-out;

${Logout}:hover & {
fill: ${COLORS.Black500};
}
`


export default LeftBar