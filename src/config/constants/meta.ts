import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Metaprofitsdao',
  description:
    'The most popular AMM on BSC by user count! Earn MByte through yield farming or win it in the Lottery, then stake it in Meta Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Metaprofitsdao), NFTs, and more, on a platform you can trust.',
  image: 'http://dapp.metaprofitsdao.com//images/hero.png',
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
        title: `${t('Home')} | ${t('Metaprofitsdao')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Metaprofitsdao')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Metaprofitsdao')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Metaprofitsdao')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Metaprofitsdao')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Metaprofitsdao')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Metaprofitsdao')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Metaprofitsdao')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Metaprofitsdao')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Metaprofitsdao')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Metaprofitsdao')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Metaprofitsdao')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Metaprofitsdao')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Metaprofitsdao')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Metaprofitsdao')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Metaprofitsdao')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Metaprofitsdao')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Metaprofitsdao')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Metaprofitsdao Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Metaprofitsdao Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Metaprofitsdao Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Metaprofitsdao')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Metaprofitsdao')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Metaprofitsdao')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Metaprofitsdao')}`,
      }
    default:
      return null
  }
}
