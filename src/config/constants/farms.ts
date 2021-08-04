import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

  {
    pid: 1,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ZOO',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xa73f44270e8bb046d55dd46b89edecb92a46d610', // ZOO - USDC
    },
    tokenSymbol: 'ZOO',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x130FF075868aF7027A87F02FbA766037b73F4403',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ZOO',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x99dADf889520b9cEBD9959d3ca1866DC2517Ea1d', // KRILL - USDC
    },
    tokenSymbol: 'ZOO',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x130FF075868aF7027A87F02FbA766037b73F4403',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
 
 
]

export default farms
