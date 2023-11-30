import React from 'react'
import LeftBar from '@/components/LeftBar'
import TopBar from '@/components/TopBar'
import styled from 'styled-components'
import Image from 'next/image'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'
import {Section, ScrollableContainer, CardGrid} from '@/library/structure'
import BotCard from '@/components/BotCard'
import Bitcoin from '@/public/images/assets/Bitcoin.webp'
import ETH from '@/public/images/assets/ETH.webp'
import LINK from '@/public/images/assets/LINK.webp'
import MANA from '@/public/images/assets/MANA.webp'
import MATIC from '@/public/images/assets/MATIC.webp'
import UNI from '@/public/images/assets/UNI.webp'

const Marketplace = () => {

  const botObjects = [
    {
      manager: 'farukkandemir999',
      name: 'MusaBot Pro',
      tags: ['Yazdan', 'Abdel', 'Majid', 'Stephen'],
      assets: [Bitcoin, MANA, MATIC, ETH],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      management_fee: '11.99%',
      processing_fee: '11.99%',
    },
    {
      manager: 'farukkandemir11',
      name: 'Musaka Pro',
      tags: ['Musa', 'Elsaid', 'Nasser'],
      assets: [LINK, MANA, UNI, ETH],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      management_fee: '12.00%',
      processing_fee: '11.99%',
    },
    {
      manager: 'farukkandemir585',
      name: 'Mahmuti',
      tags: ['Tweaker', 'Digital', 'Publication', 'Research'],
      assets: [Bitcoin, MANA, UNI, ETH],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      management_fee: '1.97%',
      processing_fee: '11.99%',
    },
    {
      manager: 'farukkandemir999',
      name: 'Speedy Need',
      tags: ['Yazdan', 'Abdel', 'Majid', 'Stephen'],
      assets: [Bitcoin, MANA, MATIC, ETH],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      management_fee: '14.91%',
      processing_fee: '11.99%',
    },
    {
      manager: 'farukkandemir11',
      name: 'BopTop Pro',
      tags: ['Musa', 'Elsaid', 'Nasser'],
      assets: [LINK, MANA, UNI, ETH],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      management_fee: '2.85%',
      processing_fee: '11.99%',
    },
    {
      manager: 'farukkandemir585',
      name: 'ZelloHello',
      tags: ['Tweaker', 'Digital', 'Publication', 'Research'],
      assets: [Bitcoin, MANA, UNI, ETH],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      management_fee: '3.11%',
      processing_fee: '11.99%',
    },
    {
      manager: 'farukkandemir999',
      name: 'TrilloBot',
      tags: ['Yazdan', 'Abdel', 'Majid', 'Stephen'],
      assets: [Bitcoin, MANA, MATIC, ETH],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      management_fee: '3.17%',
      processing_fee: '11.99%',
    },
    {
      manager: 'farukkandemir11',
      name: 'FlashCash',
      tags: ['Musa', 'Elsaid', 'Nasser'],
      assets: [LINK, MANA, UNI, ETH],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      management_fee: '4.80%',
      processing_fee: '11.99%',
    },
    {
      manager: 'farukkandemir585',
      name: 'EtherScript',
      tags: ['Tweaker', 'Digital', 'Publication', 'Research'],
      assets: [Bitcoin, MANA, UNI, ETH],
      description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      management_fee: '10.11%',
      processing_fee: '11.99%',
    },
  ];

  return (
    <Section>

      <LeftBar selected="marketplace"/>

      <ScrollableContainer>

        <TopBar header="Explore trending bots"/>

        <CardGrid>
          {botObjects.map((botObject, index) => (
              <BotCard bot_object={botObject} key={index}/>
          ))}
        </CardGrid>

      </ScrollableContainer>

    </Section>
  )
}

export default Marketplace