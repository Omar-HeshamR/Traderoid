import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'
import TopLeftLogo from './TopLeftLogo'

const TopBar = () => {
  return (
    <Section>
        <LogoContainer>
            <TopLeftLogo />
        </LogoContainer>

    </Section>
  )
}

const Section = styled.section`
display: flex;
align-items: center;
height: ${SIZING.px96};
padding: 0 ${SIZING.px40};
background-color: rgba(255, 255, 255, 0.01);
`
const LogoContainer = styled.div`
width: 20vw;
`
const MainContainer = styled.div`

`

export default TopBar