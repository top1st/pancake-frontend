import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MintySwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MintySwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MintySwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MintySwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MintySwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MintySwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MintySwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MintySwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MintySwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MintySwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MintySwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MintySwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MintySwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MintySwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MintySwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MintySwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MintySwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MintySwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MintySwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MintySwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MintySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MintySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MintySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('MintySwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('MintySwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('MintySwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('MintySwap')}`,
      }
    default:
      return null
  }
}
