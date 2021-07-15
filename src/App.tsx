import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { usePollCoreFarmData, useFetchProfile, usePollBlockNumber } from 'state/hooks'
import { DatePickerPortal } from 'components/DatePicker'
import GlobalStyle from './style/Global'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/PageLoader'
import EasterEgg from './components/EasterEgg'
import history from './routerHistory'
import Header from './components/Header'
import Menu from './components/Menu'
import "./index.css"
// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Pools = lazy(() => import('./views/Pools'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  usePollBlockNumber()
  useEagerConnect()
  useFetchProfile()
  usePollCoreFarmData()

  return (
    <Router history={history}>
      <Header />
      <div className="base-css" />
      {/* <Menu> */}
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <SuspenseWithChunkError fallback={<PageLoader />}>
            <Switch>
              <Route path="/farms">
                <Farms />
              </Route>
              <Route path="/pools">
                <Pools />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </SuspenseWithChunkError>
        </Switch>
      </SuspenseWithChunkError>
      {/* </Menu> */}
      <ResetCSS />
      <GlobalStyle />
      <EasterEgg iterations={2} />
      <ToastListener />
      <DatePickerPortal />
    </Router>
  )
}

export default React.memo(App)
