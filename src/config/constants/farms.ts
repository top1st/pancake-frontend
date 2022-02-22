import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'MByte',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      137: '0xd6473967e52714f26EeDBA1f11296E5051dA85be',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 1,
    lpSymbol: 'MByte-MATIC LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: '0xe9060dA49799C7Efb1E68aC7EB14C3E5f135830b',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'USDT-MATIC LP',
    lpAddresses: {
      97: '',
      137: '0x604229c960e5CACF2aaEAc8Be68Ac07BA9dF81c3',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wmatic,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
]

export default farms
