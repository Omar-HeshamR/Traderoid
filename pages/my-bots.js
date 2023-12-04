import React from 'react'
import LeftBar from '@/components/LeftBar'
import TopBar from '@/components/TopBar'
import {Section, ScrollableContainer, CardGrid} from '@/library/structure'
import BotCard from '@/components/BotCard'

const MyBots = () => {

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

      <LeftBar selected="myBots"/>

      <ScrollableContainer>

        <TopBar header="Bots you've created"/>

        <CardGrid>
          {botObjects.map((botObject, index) => (
              <BotCard bot_object={botObject} key={index} myBots/>
          ))}
        </CardGrid>

      </ScrollableContainer>

    </Section>
  )
}

export default MyBots