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
          <h2 className="lg:text-primary text-black-100 text-center font-medium lg:text-3xl text-xl leading-10">
            The Most Innovative Community-driven Charity 3.0 to support Zoo’s around the world.
          </h2>
          <h3 className="lg:text-2xl text-5xl lg:text-black-100 text-primary text-center py-7">
            Welcome to ZooMaster!
          </h3>
          <div className="flex lg:flex-row flex-col lg:space-x-2 space-y-4 lg:space-y-0 justify-center pb-2">
            <button
              type="button"
              className="flex items-center justify-center px-5 pt-1 pb-1.5 border border-primary text-lg font-medium rounded hover:shadow-sm text-white bg-primary hover:bg-blue-100 focus:outline-none"
            >
              Buy Token
            </button>
            <button
              type="button"
              className="flex items-center justify-center px-5 pt-1 pb-1 border border-primary text-lg font-medium rounded hover:shadow-sm text-primary bg-white focus:outline-none"
            >
              <img src="/img/Twitter.svg" alt="twitter" className="w-6 mr-1" />
              Twitter
            </button>
            <button
              type="button"
              className="flex items-center justify-center px-5 pt-1 pb-1 border border-primary text-lg font-medium rounded hover:shadow-sm text-primary bg-white focus:outline-none"
            >
              <img src="/img/Telegram.svg" alt="twitter" className="w-6 mr-1" />
              Telegram
            </button>
          </div>
          <img src="./img/polygon.svg" width="60" alt="Built on Polygon" className="mx-auto lg:mt-2 mt-10" />
          <div className="flex justify-center text-gray-800 text-lg font-medium">
            <Link to="https://polygon.technology/" target="_blank" rel="noreferrer">
              Built on Polygon
            </Link>
            <span className="hidden lg:block pl-1">(previously known as MATIC)</span>
          </div>
        </div>
      </div>
      <Page>
        <Hero>
          <Heading as="h1" size="xl" mb="24px" color="secondary">
            ZooMaster
          </Heading>
          <Text>You have seen the whales, now experience the Elephant</Text>
        </Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          Time until farming ends
        </Heading>
        <Timer />
        <div>
          <Cards>
            <FarmStakingCard />
            <TwitterCard />
          </Cards>
          <CTACards>
            <EarnAPRCard />
            <EarnAssetCard />
            <WinCard />
          </CTACards>
          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
            <MetaMask />
          </Cards>
        </div>
      </Page>
    </>
  )
}

export default Home
