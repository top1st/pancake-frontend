import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: '$MINTS',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      137: '0x687f9936a14407eB08273A910eBdEb98a1B5f5a0',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 1,
    lpSymbol: '$MINTS-MATIC LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: '0xAECF6F9b889Afc592C85b268FD49075c8f0E4e6a',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'USDT-MATIC LP',
    lpAddresses: {
      97: '',
      137: '0xd939ff24cfc76BeD9d79b79948dD788cB3ACE9d3',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wmatic,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */

]

export default farms
