import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy',
        href: '/buy',
      },
      {
        label: 'Liquidity',
        href: '/liquidity',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'Jungle Pools',
    icon: 'PoolIcon',
    href: '/junglepools',
  },
  {
    label: 'Launchpad (IDO)',
    icon: 'IfoIcon',
    href: '/ido',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'King of Elephants',
    icon: 'NftIcon',
    href: '/kingofelephants'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap Chart',
        href: 'https://info.quickswap.exchange/token/0x130FF075868aF7027A87F02FbA766037b73F4403',
      },
      {
        label: 'Polygon Explorer',
        href: 'https://polygonscan.com/token/0x130FF075868aF7027A87F02FbA766037b73F4403',
      },
      {
        label: 'Dapp Radar',
        href: 'https://dappradar.com/polygon/defi/polygaj-finance'
      },
      {
        label: 'Dapp.com',
        href: 'https://www.dapp.com/app/polygaj-network'
      },
      {
        label: 'GAJ Chart',
        href: 'https://quickchart.app/token/0x130FF075868aF7027A87F02FbA766037b73F4403'
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/zoomasters",
      },
      {
        label: "Blog",
        href: "https://zoomasters.medium.com",
      },
      {
        label: "Docs",
        href: "https://docs.zoomaster.io/",
      },
    ],
  },
  {
    label: "Roadmap",
    icon: "RoadmapIcon",
    href: 'https://docs.zoomaster.io/roadmap',
  },
  {
    label: "Collab",
    icon: "HandshakeIcon",
    href: 'https://t.me/zoomaster',
  }
]

export default config
