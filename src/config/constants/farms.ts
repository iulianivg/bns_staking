import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'BONEZ',
    lpAddresses: {
      97: '',
      56: '0xb0F70C894F4F74b08c53BA11502268b9E32b7877',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0xb0F70C894F4F74b08c53BA11502268b9E32b7877',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'BONEZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc7aCbcf0BAE26B0e8Fd5700c18573a56Fbc69Af5',   // lp address token-bnb
    },
    tokenSymbol: 'BONEZ',
    tokenAddresses: {
      97: '',
      56: '0xb0F70C894F4F74b08c53BA11502268b9E32b7877', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
