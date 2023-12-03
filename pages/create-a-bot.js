import React from 'react'
import LeftBar from '@/components/LeftBar'
import TopBar from '@/components/TopBar'
import BotCreationWorkspace from '@/components/BotCreationWorkspace'
import {Section, ScrollableContainer} from '@/library/structure'

const CreateABot = () => {
  return (
    <Section>

      <LeftBar selected="createABot"/>

      <ScrollableContainer>

        <TopBar header="Create a bot"/>

        <BotCreationWorkspace />

      </ScrollableContainer>

    </Section>
    
  )
}

export default CreateABot