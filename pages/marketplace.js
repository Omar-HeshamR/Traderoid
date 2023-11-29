import React from 'react'
import LeftBar from '@/components/LeftBar'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'

const Marketplace = () => {
  return (
    <Section>
      <LeftBar selected="marketplace"/>

    </Section>
  )
}

const Section = styled.section`
display: flex;
flex-direction: column;
height: 100vh;
background-color: ${COLORS.Black900Default};
`



export default Marketplace