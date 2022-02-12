import { ChainId, Token } from '@pancakeswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wmatic: new Token(
    MAINNET,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped Matic',
    'https://www.binance.com/',
  ),
  // bnb here points to the wmatic contract. Wherever the currency BNB is required, conditional checks for the symbol 'MATIC' can be used
  bnb: new Token(MAINNET, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'MATIC', 'MATIC', 'https://www.binance.com/'),
  cake: new Token(
    MAINNET,
    '0x687f9936a14407eB08273A910eBdEb98a1B5f5a0',
    18,
    '$MINTS',
    '$MINTS',
    'https://matic.mintyswap.com/',
  ),
  syrup: new Token(
    MAINNET,
    '0xa7B508F8836b2dce772ae1156feeC55669Aa1731',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://matic.mintyswap.com/',
  ),
  usdt: new Token(
    MAINNET,
    '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    6,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
  busd: new Token(
    MAINNET,
    '0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7',
    18,
    'BUSD',
    'Binance USD',
    'http://www.paxos.com/busd',
  ),
  dai: new Token(
    MAINNET,
    '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://makerdao.com/',
  ),
  usdc: new Token(
    MAINNET,
    '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    6,
    'USDC',
    'USD Coin',
    'https://www.centre.io/',
  ),
}

export const testnetTokens = {
  wmatic: new Token(
    TESTNET,
    '0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F',
    18,
    'WMATIC',
    'Wrapped Matic',
    'https://www.binance.com/',
  ),
  cake: new Token(
    TESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    '$MINTS',
    '$MINTS',
    'https://matic.mintyswap.com/',
  ),
  busd: new Token(
    TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  syrup: new Token(
    TESTNET,
    '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://matic.mintyswap.com/',
  ),
  bake: new Token(
    TESTNET,
    '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    18,
    'BAKE',
    'Bakeryswap Token',
    'https://www.bakeryswap.org/',
  ),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
