import React from 'react'
import styled from 'styled-components'
import LeftBar from '@/components/LeftBar'
import TopBar from '@/components/TopBar'
import { COLORS } from '@/library/theme';
import { SIZING } from '@/library/sizing';
import {Section, ScrollableContainer, CardGrid} from '@/library/structure'
import MyPortfolioChart from '@/components/MyPortfolioChart'
import BotCard from '@/components/BotCard'

const MyPortfolio = () => {

  const botObjects = [
    {
      manager: 'farukkandemir999',
      name: 'MusaBot Pro',
      tags: ['Yazdan', 'Abdel', 'Majid', 'Stephen'],
      assets: ["BTC", "MANA", "MATIC", "ETH"],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      ManagementFee: '11.99%',
      PerformanceFee: '11.99%',
    },
    {
      manager: 'farukkandemir11',
      name: 'Musaka Pro',
      tags: ['Musa', 'Elsaid', 'Nasser'],
      assets: ["LINK", "MANA", "UNI", "ETH"],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      ManagementFee: '12.00%',
      PerformanceFee: '11.99%',
    },
    {
      manager: 'farukkandemir585',
      name: 'Mahmuti',
      tags: ['Tweaker', 'Digital', 'Publication', 'Research'],
      assets: ["BTC", "MANA", "UNI", "ETH"],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      ManagementFee: '1.97%',
      PerformanceFee: '11.99%',
    },
    {
      manager: 'farukkandemir999',
      name: 'Speedy Need',
      tags: ['Yazdan', 'Abdel', 'Majid', 'Stephen'],
      assets: ["BTC", 'MANA', "MATIC", "ETH"],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      ManagementFee: '14.91%',
      PerformanceFee: '11.99%',
    },
  ];

  return (
    <Section>

      <LeftBar selected="myPortfolio"/>

      <ScrollableContainer>

        <TopBar header="Your portfolio"/>

        <MyPortfolioChart />

        <BotsYouHaveInvestedInHeader>
          Bots you&apos;ve invested in
        </BotsYouHaveInvestedInHeader>

        <CardGrid>
          {botObjects.map((botObject, index) => (
              <BotCard bot_object={botObject} key={index} myPortfolio myBots={false}/>
          ))}
        </CardGrid>

      </ScrollableContainer>

    </Section>
  )
}

const BotsYouHaveInvestedInHeader = styled.h1`
margin-top: ${SIZING.px48};
margin-bottom: ${SIZING.px32};
font-size: ${SIZING.px24};
letter-spacing: -0.075rem;
color: ${COLORS.Black100};
font-family: "Uncut Sans Semibold";
`

export default MyPortfolio