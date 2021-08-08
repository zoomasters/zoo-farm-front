import React, { useEffect, Suspense, lazy } from 'react'

import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import Stats from 'views/Stats'
import GlobalStyle from './style/Global'
import Menu from './components/header'
import PageLoader from './components/PageLoader'
// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
// const Lottery = lazy(() => import('./views/Lottery'))
const Pools = lazy(() => import('./views/Pools'))
const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
const Buy = lazy(() => import('./views/Buy'))
const Trade = lazy(() => import('./views/BuyNow'))
const Liquidity = lazy(() => import('./views/Liquidity'))
const Launchpad = lazy(() => import('./views/Teaser'))
const KingOfElephants = lazy(() => import('./views/KingOfElephants'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const social = [
  {
    to: '/',
    src: '/img/reddit.svg',
  },
  {
    to: 'https://github.com/zoomasters/',
    src: '/img/github.svg',
  },
  {
    to: 'https://twitter.com/thezmproject',
    src: '/img/twitter-white.svg',
  },
  {
    to: 'https://t.me/zoomaster',
    src: '/img/telegram-white.svg',
  },
]

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu />
      <div className="pb-17" />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/aboutus" exact>
            <Home />
          </Route>
          <Route path="/" exact>
            <Stats />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
          <Route path="/pools">
            <Farms tokenMode />
          </Route>
          <Route path="/buy">
            <Trade />
          </Route>
          <Route path="/liquidity">
            <Liquidity />
          </Route>

          {/* <Route path="/lottery"> */}
          {/*  <Lottery /> */}
          {/* </Route> */}
          {/* <Route path="/ifo"> */}
          {/*  <Ifos /> */}
          {/* </Route> */}
          {/* <Route path="/nft"> */}
          {/*  <Nft /> */}
          {/* </Route> */}
          {/* Redirect */}
          {/* <Route path="/syrup"> */}
          {/*  <Redirect to="/pools" /> */}
          {/* </Route> */}
          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <footer className="bg-blue-200">
          <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <img width="100" className="mx-auto" src="/img/logo-white.png" alt="" />
            <div className="py-8 flex justify-center space-x-5 lg:space-x-7">
              {social?.map((item) => (
               <a href={item.to} target="_blank" rel="noreferrer">
                  <img src={item.src} alt="" width="40px" />
                </a>
              ))}
            </div>
            <p className="mt-8 lg:mt-2 pb-3 text-center text-xs text-white">© 2021 Zoomaster. All rights reserved</p>
          </div>
        </footer>
    </Router>
  )
}

export default React.memo(App)
