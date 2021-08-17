import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'ZOO-USDC LP',
    lpAddresses: {
      56:'',
      137: '0xb2C83fbE8916eE75fF153b8D43A96824a33F9bf0',
    },
    tokenSymbol: 'ZOO',
    tokenAddresses: {
      56:'',
      137: '0x8Fd9d5C9DC5467dfE1725A31492D811f162c11bC',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 

  {
    pid: 1,
    risk: 5,
    lpSymbol: 'ZOO-WMATIC LP',
    lpAddresses: {
      56:'',
      137: '0x474b2442F933A6ba0A08C0A7AFCFDa7212C938D3',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      56:'',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },



  {
    pid: 2,
    risk: 5,
    lpSymbol: 'WMATIC-USDC LP',
    lpAddresses: {
      56:'',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      56:'',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ZOO',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xb2C83fbE8916eE75fF153b8D43A96824a33F9bf0', // KRILL - USDC
    },
    tokenSymbol: 'ZOO',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x8Fd9d5C9DC5467dfE1725A31492D811f162c11bC',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 5,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AAVE',
    lpAddresses: {
      56:'',
      137: '0x7c76b6b3fe14831a39c0fec908da5f17180df677'
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      56:'',
      137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'QUICK',
    lpAddresses: {
      56:'',
      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb'
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      56:'',
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DINO',
    lpAddresses: {
      56:'',
      137: '0x305EB24F848E3f02F13602aE93DDbB73Ac7e1958'
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      56:'',
      137: '0xaa9654becca45b5bdfa5ac646c939c62b527d394'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 1,
    isTokenOnly: true,
    isCommunity: true,
    lpSymbol: 'SUSHI',
    lpAddresses: {
      56:'',
      137: '0xD9f57D9ed738AE20C5a60241a32Fd076e69AF005'
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      56:'',
      137: '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    lpAddresses: {
      56:'',
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      56:'',
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    lpAddresses: {
      56:'',
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498'
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      56:'',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 69,
    lpSymbol: 'DINO-USDC LP',
    lpAddresses: {
      56:'',
      137: '0x305EB24F848E3f02F13602aE93DDbB73Ac7e1958'
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      56:'',
      137: '0xaa9654becca45b5bdfa5ac646c939c62b527d394'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 5,
    lpSymbol: 'ZOO-DINO LP',
    lpAddresses: {
      56:'',
      137: '0x992492Bae1673F008865473FdE7C6e0D02CE7D6e',
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      56:'',
      137: '0xaa9654becca45b5bdfa5ac646c939c62b527d394',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },

]

export default farms;