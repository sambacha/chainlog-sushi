# `su-sushi`

+ [Int] IBentoBoxV1
    - [Ext] balanceOf
    - [Ext] batch ($)
    - [Ext] claimOwnership #
    - [Ext] deploy ($)
    - [Ext] deposit ($)
    - [Ext] harvest #
    - [Ext] masterContractApproved
    - [Ext] masterContractOf
    - [Ext] nonces
    - [Ext] owner
    - [Ext] pendingOwner
    - [Ext] pendingStrategy
    - [Ext] permitToken #
    - [Ext] registerProtocol #
    - [Ext] setMasterContractApproval #
    - [Ext] setStrategy #
    - [Ext] setStrategyTargetPercentage #
    - [Ext] strategy
    - [Ext] strategyData
    - [Ext] toAmount
    - [Ext] toShare
    - [Ext] totals
    - [Ext] transfer #
    - [Ext] transferMultiple #
    - [Ext] transferOwnership #
    - [Ext] whitelistMasterContract #
    - [Ext] whitelistedMasterContracts
    - [Ext] withdraw #

 + [Int] IERC20
    - [Ext] name
    - [Ext] symbol
    - [Ext] decimals
    - [Ext] totalSupply
    - [Ext] balanceOf
    - [Ext] allowance
    - [Ext] approve #
    - [Ext] permit #

 + [Int] IGnosisSafe
    - [Ext] getOwners
    - [Ext] getThreshold

 + [Int] IOwnable
    - [Ext] owner
    - [Ext] renounceOwnership #
    - [Ext] transferOwnership #

 + [Int] IMasterChef (IOwnable)
    - [Ext] sushi
    - [Ext] devaddr
    - [Ext] bonusEndBlock
    - [Ext] sushiPerBlock
    - [Ext] sushiPerSecond
    - [Ext] BONUS_MULTIPLIER
    - [Ext] migrator
    - [Ext] poolInfo
    - [Ext] userInfo
    - [Ext] totalAllocPoint
    - [Ext] startBlock
    - [Ext] poolLength
    - [Ext] add #
    - [Ext] set #
    - [Ext] setMigrator #
    - [Ext] migrate #
    - [Ext] getMultiplier
    - [Ext] pendingSushi
    - [Ext] massUpdatePools #
    - [Ext] updatePool #
    - [Ext] deposit #
    - [Ext] withdraw #
    - [Ext] emergencyWithdraw #
    - [Ext] dev #

 + [Int] IMasterChefV2
    - [Ext] lpToken
    - [Ext] poolInfo

 + [Int] IStrategy
    - [Ext] skim #
    - [Ext] harvest #
    - [Ext] withdraw #
    - [Ext] exit #

 + [Int] IUniswapV2Factory
    - [Ext] feeTo
    - [Ext] feeToSetter
    - [Ext] migrator
    - [Ext] getPair
    - [Ext] allPairs
    - [Ext] allPairsLength
    - [Ext] createPair #
    - [Ext] setFeeTo #
    - [Ext] setFeeToSetter #
    - [Ext] setMigrator #

 + [Int] IUniswapV2Pair
    - [Ext] name
    - [Ext] symbol
    - [Ext] decimals
    - [Ext] totalSupply
    - [Ext] balanceOf
    - [Ext] allowance
    - [Ext] approve #
    - [Ext] transfer #
    - [Ext] transferFrom #
    - [Ext] DOMAIN_SEPARATOR
    - [Ext] PERMIT_TYPEHASH
    - [Ext] nonces
    - [Ext] permit #
    - [Ext] MINIMUM_LIQUIDITY
    - [Ext] factory
    - [Ext] token0
    - [Ext] token1
    - [Ext] getReserves
    - [Ext] price0CumulativeLast
    - [Ext] price1CumulativeLast
    - [Ext] kLast
    - [Ext] mint #
    - [Ext] burn #
    - [Ext] swap #
    - [Ext] skim #
    - [Ext] sync #
    - [Ext] initialize #

 + [Int] IUniswapV2Router01
    - [Ext] factory
    - [Ext] WETH
    - [Ext] addLiquidity #
    - [Ext] addLiquidityETH ($)
    - [Ext] removeLiquidity #
    - [Ext] removeLiquidityETH #
    - [Ext] removeLiquidityWithPermit #
    - [Ext] removeLiquidityETHWithPermit #
    - [Ext] swapExactTokensForTokens #
    - [Ext] swapTokensForExactTokens #
    - [Ext] swapExactETHForTokens ($)
    - [Ext] swapTokensForExactETH #
    - [Ext] swapExactTokensForETH #
    - [Ext] swapETHForExactTokens ($)
    - [Ext] quote
    - [Ext] getAmountOut
    - [Ext] getAmountIn
    - [Ext] getAmountsOut
    - [Ext] getAmountsIn

 + [Int] IWethMaker
    - [Ext] bridges
    - [Ext] owner
    - [Ext] withdraw #
    - [Ext] burnPairs #

 +  Multicall2
    - [Pub] aggregate #
    - [Pub] blockAndAggregate #
    - [Pub] getBlockHash
    - [Pub] getBlockNumber
    - [Pub] getCurrentBlockCoinbase
    - [Pub] getCurrentBlockDifficulty
    - [Pub] getCurrentBlockGasLimit
    - [Pub] getCurrentBlockTimestamp
    - [Pub] getEthBalance
    - [Pub] getLastBlockHash
    - [Pub] tryAggregate #
    - [Pub] tryBlockAndAggregate #


 ($) = payable function
 # = non-constant function

11:44:03 sbacha Sams-MacBook-Pro /Users/sbacha/sushi-dao master
$ clear
11:44:15 sbacha Sams-MacBook-Pro /Users/sbacha/sushi-dao master
$ surya describe src/*.sol
 + [Int] IBentoBoxV1
    - [Ext] balanceOf
    - [Ext] batch ($)
    - [Ext] claimOwnership #
    - [Ext] deploy ($)
    - [Ext] deposit ($)
    - [Ext] harvest #
    - [Ext] masterContractApproved
    - [Ext] masterContractOf
    - [Ext] nonces
    - [Ext] owner
    - [Ext] pendingOwner
    - [Ext] pendingStrategy
    - [Ext] permitToken #
    - [Ext] registerProtocol #
    - [Ext] setMasterContractApproval #
    - [Ext] setStrategy #
    - [Ext] setStrategyTargetPercentage #
    - [Ext] strategy
    - [Ext] strategyData
    - [Ext] toAmount
    - [Ext] toShare
    - [Ext] totals
    - [Ext] transfer #
    - [Ext] transferMultiple #
    - [Ext] transferOwnership #
    - [Ext] whitelistMasterContract #
    - [Ext] whitelistedMasterContracts
    - [Ext] withdraw #

 + [Int] IERC20
    - [Ext] name
    - [Ext] symbol
    - [Ext] decimals
    - [Ext] totalSupply
    - [Ext] balanceOf
    - [Ext] allowance
    - [Ext] approve #
    - [Ext] permit #

 + [Int] IGnosisSafe
    - [Ext] getOwners
    - [Ext] getThreshold

 + [Int] IOwnable
    - [Ext] owner
    - [Ext] renounceOwnership #
    - [Ext] transferOwnership #

 + [Int] IMasterChef (IOwnable)
    - [Ext] sushi
    - [Ext] devaddr
    - [Ext] bonusEndBlock
    - [Ext] sushiPerBlock
    - [Ext] sushiPerSecond
    - [Ext] BONUS_MULTIPLIER
    - [Ext] migrator
    - [Ext] poolInfo
    - [Ext] userInfo
    - [Ext] totalAllocPoint
    - [Ext] startBlock
    - [Ext] poolLength
    - [Ext] add #
    - [Ext] set #
    - [Ext] setMigrator #
    - [Ext] migrate #
    - [Ext] getMultiplier
    - [Ext] pendingSushi
    - [Ext] massUpdatePools #
    - [Ext] updatePool #
    - [Ext] deposit #
    - [Ext] withdraw #
    - [Ext] emergencyWithdraw #
    - [Ext] dev #

 + [Int] IMasterChefV2
    - [Ext] lpToken
    - [Ext] poolInfo

 + [Int] IStrategy
    - [Ext] skim #
    - [Ext] harvest #
    - [Ext] withdraw #
    - [Ext] exit #

 + [Int] IUniswapV2Factory
    - [Ext] feeTo
    - [Ext] feeToSetter
    - [Ext] migrator
    - [Ext] getPair
    - [Ext] allPairs
    - [Ext] allPairsLength
    - [Ext] createPair #
    - [Ext] setFeeTo #
    - [Ext] setFeeToSetter #
    - [Ext] setMigrator #

 + [Int] IUniswapV2Pair
    - [Ext] name
    - [Ext] symbol
    - [Ext] decimals
    - [Ext] totalSupply
    - [Ext] balanceOf
    - [Ext] allowance
    - [Ext] approve #
    - [Ext] transfer #
    - [Ext] transferFrom #
    - [Ext] DOMAIN_SEPARATOR
    - [Ext] PERMIT_TYPEHASH
    - [Ext] nonces
    - [Ext] permit #
    - [Ext] MINIMUM_LIQUIDITY
    - [Ext] factory
    - [Ext] token0
    - [Ext] token1
    - [Ext] getReserves
    - [Ext] price0CumulativeLast
    - [Ext] price1CumulativeLast
    - [Ext] kLast
    - [Ext] mint #
    - [Ext] burn #
    - [Ext] swap #
    - [Ext] skim #
    - [Ext] sync #
    - [Ext] initialize #

 + [Int] IUniswapV2Router01
    - [Ext] factory
    - [Ext] WETH
    - [Ext] addLiquidity #
    - [Ext] addLiquidityETH ($)
    - [Ext] removeLiquidity #
    - [Ext] removeLiquidityETH #
    - [Ext] removeLiquidityWithPermit #
    - [Ext] removeLiquidityETHWithPermit #
    - [Ext] swapExactTokensForTokens #
    - [Ext] swapTokensForExactTokens #
    - [Ext] swapExactETHForTokens ($)
    - [Ext] swapTokensForExactETH #
    - [Ext] swapExactTokensForETH #
    - [Ext] swapETHForExactTokens ($)
    - [Ext] quote
    - [Ext] getAmountOut
    - [Ext] getAmountIn
    - [Ext] getAmountsOut
    - [Ext] getAmountsIn

 + [Int] IWethMaker
    - [Ext] bridges
    - [Ext] owner
    - [Ext] withdraw #
    - [Ext] burnPairs #

 +  Multicall2
    - [Pub] aggregate #
    - [Pub] blockAndAggregate #
    - [Pub] getBlockHash
    - [Pub] getBlockNumber
    - [Pub] getCurrentBlockCoinbase
    - [Pub] getCurrentBlockDifficulty
    - [Pub] getCurrentBlockGasLimit
    - [Pub] getCurrentBlockTimestamp
    - [Pub] getEthBalance
    - [Pub] getLastBlockHash
    - [Pub] tryAggregate #
    - [Pub] tryBlockAndAggregate #


 ($) = payable function
 # = non-constant function