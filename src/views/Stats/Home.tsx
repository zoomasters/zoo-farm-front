import React from 'react'

import styled from 'styled-components'
import Cookies from 'universal-cookie'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/Layout/Page'
import { Link } from 'react-router-dom'
import FarmStakingCard from './components/FarmStakingCard'
import rot13 from '../../utils/encode'
// import LotteryCard from './components/LotteryCard'
import { isAddress } from '../../utils/web3'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import EarnAPRCard from './components/EarnAPRCard'
import EarnAssetCard from './components/EarnAssetCard'
import WinCard from './components/WinCard'
import Timer from './components/Timer'
import MetaMask from './components/Metamask'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/3ba.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/3.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const cookies = new Cookies()

  return (
    <>
      {' '}
      <div
        id="home"
        className="max-w-full md:bg-center bg bg-left-bottom mx-auto px-4 md:px-10 lg:px-18 py-0.5 grid lg:grid-cols-2"
      >
        <div className="md:px-8 px-7 pt-72 pb-16">
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          Time until farming starts
        </Heading>
        <Timer />
        </div>
      </div>
      <Page>
        {/* <Hero>
          <Heading as="h1" size="xl" mb="24px" color="secondary">
            ZooMaster
          </Heading>
          <Text></Text>
        </Hero> */}
       
        <div>
          <Cards>
            <FarmStakingCard />
            <TwitterCard />
          </Cards>
       {/*    <CTACards>
            <EarnAPRCard />
            <EarnAssetCard />
          
          </CTACards> */}
          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
            <MetaMask />
            <WinCard />
          </Cards>
        </div>
      </Page>
    </>
  )
}

export default Home
