import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'BONEZ',
    tokenAddress: '0xb0F70C894F4F74b08c53BA11502268b9E32b7877',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xb0F70C894F4F74b08c53BA11502268b9E32b7877',  // token address
    contractAddress: {
      97: '',
      56: '0x160462ea3F8E2bcb2a36c0d7E786eDC2849B3422',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
