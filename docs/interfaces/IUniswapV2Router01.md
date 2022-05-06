[sushi-lens](../README.md) / [Exports](../modules.md) / IUniswapV2Router01

# Interface: IUniswapV2Router01

## Hierarchy

- `BaseContract`

  ↳ **`IUniswapV2Router01`**

## Table of contents

### Properties

- [\_deployedPromise](IUniswapV2Router01.md#_deployedpromise)
- [\_runningEvents](IUniswapV2Router01.md#_runningevents)
- [\_wrappedEmits](IUniswapV2Router01.md#_wrappedemits)
- [address](IUniswapV2Router01.md#address)
- [callStatic](IUniswapV2Router01.md#callstatic)
- [contractName](IUniswapV2Router01.md#contractname)
- [deployTransaction](IUniswapV2Router01.md#deploytransaction)
- [estimateGas](IUniswapV2Router01.md#estimategas)
- [filters](IUniswapV2Router01.md#filters)
- [functions](IUniswapV2Router01.md#functions)
- [interface](IUniswapV2Router01.md#interface)
- [off](IUniswapV2Router01.md#off)
- [on](IUniswapV2Router01.md#on)
- [once](IUniswapV2Router01.md#once)
- [populateTransaction](IUniswapV2Router01.md#populatetransaction)
- [provider](IUniswapV2Router01.md#provider)
- [removeListener](IUniswapV2Router01.md#removelistener)
- [resolvedAddress](IUniswapV2Router01.md#resolvedaddress)
- [signer](IUniswapV2Router01.md#signer)

### Methods

- [WETH](IUniswapV2Router01.md#weth)
- [\_checkRunningEvents](IUniswapV2Router01.md#_checkrunningevents)
- [\_deployed](IUniswapV2Router01.md#_deployed)
- [\_wrapEvent](IUniswapV2Router01.md#_wrapevent)
- [addLiquidity](IUniswapV2Router01.md#addliquidity)
- [addLiquidityETH](IUniswapV2Router01.md#addliquidityeth)
- [attach](IUniswapV2Router01.md#attach)
- [connect](IUniswapV2Router01.md#connect)
- [deployed](IUniswapV2Router01.md#deployed)
- [emit](IUniswapV2Router01.md#emit)
- [factory](IUniswapV2Router01.md#factory)
- [fallback](IUniswapV2Router01.md#fallback)
- [getAmountIn](IUniswapV2Router01.md#getamountin)
- [getAmountOut](IUniswapV2Router01.md#getamountout)
- [getAmountsIn](IUniswapV2Router01.md#getamountsin)
- [getAmountsOut](IUniswapV2Router01.md#getamountsout)
- [listenerCount](IUniswapV2Router01.md#listenercount)
- [listeners](IUniswapV2Router01.md#listeners)
- [queryFilter](IUniswapV2Router01.md#queryfilter)
- [quote](IUniswapV2Router01.md#quote)
- [removeAllListeners](IUniswapV2Router01.md#removealllisteners)
- [removeLiquidity](IUniswapV2Router01.md#removeliquidity)
- [removeLiquidityETH](IUniswapV2Router01.md#removeliquidityeth)
- [removeLiquidityETHWithPermit](IUniswapV2Router01.md#removeliquidityethwithpermit)
- [removeLiquidityWithPermit](IUniswapV2Router01.md#removeliquiditywithpermit)
- [swapETHForExactTokens](IUniswapV2Router01.md#swapethforexacttokens)
- [swapExactETHForTokens](IUniswapV2Router01.md#swapexactethfortokens)
- [swapExactTokensForETH](IUniswapV2Router01.md#swapexacttokensforeth)
- [swapExactTokensForTokens](IUniswapV2Router01.md#swapexacttokensfortokens)
- [swapTokensForExactETH](IUniswapV2Router01.md#swaptokensforexacteth)
- [swapTokensForExactTokens](IUniswapV2Router01.md#swaptokensforexacttokens)

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `addLiquidity` | (`tokenA`: `string`, `tokenB`: `string`, `amountADesired`: `BigNumberish`, `amountBDesired`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `amountA`: `BigNumber` ; `amountB`: `BigNumber` ; `liquidity`: `BigNumber`  }\> |
| `addLiquidityETH` | (`token`: `string`, `amountTokenDesired`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `amountETH`: `BigNumber` ; `amountToken`: `BigNumber` ; `liquidity`: `BigNumber`  }\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getAmountIn` | (`amountOut`: `BigNumberish`, `reserveIn`: `BigNumberish`, `reserveOut`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAmountOut` | (`amountIn`: `BigNumberish`, `reserveIn`: `BigNumberish`, `reserveOut`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAmountsIn` | (`amountOut`: `BigNumberish`, `path`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `getAmountsOut` | (`amountIn`: `BigNumberish`, `path`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `quote` | (`amountA`: `BigNumberish`, `reserveA`: `BigNumberish`, `reserveB`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeLiquidity` | (`tokenA`: `string`, `tokenB`: `string`, `liquidity`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amountA`: `BigNumber` ; `amountB`: `BigNumber`  }\> |
| `removeLiquidityETH` | (`token`: `string`, `liquidity`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amountETH`: `BigNumber` ; `amountToken`: `BigNumber`  }\> |
| `removeLiquidityETHWithPermit` | (`token`: `string`, `liquidity`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `approveMax`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amountETH`: `BigNumber` ; `amountToken`: `BigNumber`  }\> |
| `removeLiquidityWithPermit` | (`tokenA`: `string`, `tokenB`: `string`, `liquidity`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `approveMax`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amountA`: `BigNumber` ; `amountB`: `BigNumber`  }\> |
| `swapETHForExactTokens` | (`amountOut`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `swapExactETHForTokens` | (`amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `swapExactTokensForETH` | (`amountIn`: `BigNumberish`, `amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `swapExactTokensForTokens` | (`amountIn`: `BigNumberish`, `amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `swapTokensForExactETH` | (`amountOut`: `BigNumberish`, `amountInMax`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `swapTokensForExactTokens` | (`amountOut`: `BigNumberish`, `amountInMax`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:622](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L622)

___

### contractName

• **contractName**: ``"IUniswapV2Router01"``

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:271](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L271)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

BaseContract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `addLiquidity` | (`tokenA`: `string`, `tokenB`: `string`, `amountADesired`: `BigNumberish`, `amountBDesired`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addLiquidityETH` | (`token`: `string`, `amountTokenDesired`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAmountIn` | (`amountOut`: `BigNumberish`, `reserveIn`: `BigNumberish`, `reserveOut`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAmountOut` | (`amountIn`: `BigNumberish`, `reserveIn`: `BigNumberish`, `reserveOut`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAmountsIn` | (`amountOut`: `BigNumberish`, `path`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAmountsOut` | (`amountIn`: `BigNumberish`, `path`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `quote` | (`amountA`: `BigNumberish`, `reserveA`: `BigNumberish`, `reserveB`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeLiquidity` | (`tokenA`: `string`, `tokenB`: `string`, `liquidity`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeLiquidityETH` | (`token`: `string`, `liquidity`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeLiquidityETHWithPermit` | (`token`: `string`, `liquidity`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `approveMax`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeLiquidityWithPermit` | (`tokenA`: `string`, `tokenB`: `string`, `liquidity`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `approveMax`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swapETHForExactTokens` | (`amountOut`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swapExactETHForTokens` | (`amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swapExactTokensForETH` | (`amountIn`: `BigNumberish`, `amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swapExactTokensForTokens` | (`amountIn`: `BigNumberish`, `amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swapTokensForExactETH` | (`amountOut`: `BigNumberish`, `amountInMax`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swapTokensForExactTokens` | (`amountOut`: `BigNumberish`, `amountInMax`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:807](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L807)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:805](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L805)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `addLiquidity` | (`tokenA`: `string`, `tokenB`: `string`, `amountADesired`: `BigNumberish`, `amountBDesired`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addLiquidityETH` | (`token`: `string`, `amountTokenDesired`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getAmountIn` | (`amountOut`: `BigNumberish`, `reserveIn`: `BigNumberish`, `reserveOut`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amountIn`: `BigNumber`  }\> |
| `getAmountOut` | (`amountIn`: `BigNumberish`, `reserveIn`: `BigNumberish`, `reserveOut`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amountOut`: `BigNumber`  }\> |
| `getAmountsIn` | (`amountOut`: `BigNumberish`, `path`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]] & { `amounts`: `BigNumber`[]  }\> |
| `getAmountsOut` | (`amountIn`: `BigNumberish`, `path`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]] & { `amounts`: `BigNumber`[]  }\> |
| `quote` | (`amountA`: `BigNumberish`, `reserveA`: `BigNumberish`, `reserveB`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amountB`: `BigNumber`  }\> |
| `removeLiquidity` | (`tokenA`: `string`, `tokenB`: `string`, `liquidity`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeLiquidityETH` | (`token`: `string`, `liquidity`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeLiquidityETHWithPermit` | (`token`: `string`, `liquidity`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `approveMax`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeLiquidityWithPermit` | (`tokenA`: `string`, `tokenB`: `string`, `liquidity`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `approveMax`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swapETHForExactTokens` | (`amountOut`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swapExactETHForTokens` | (`amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swapExactTokensForETH` | (`amountIn`: `BigNumberish`, `amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swapExactTokensForTokens` | (`amountIn`: `BigNumberish`, `amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swapTokensForExactETH` | (`amountOut`: `BigNumberish`, `amountInMax`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swapTokensForExactTokens` | (`amountOut`: `BigNumberish`, `amountInMax`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:298](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L298)

___

### interface

• **interface**: `IUniswapV2Router01Interface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:277](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L277)

___

### off

• **off**: `OnEvent`<[`IUniswapV2Router01`](IUniswapV2Router01.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:293](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L293)

___

### on

• **on**: `OnEvent`<[`IUniswapV2Router01`](IUniswapV2Router01.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:294](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L294)

___

### once

• **once**: `OnEvent`<[`IUniswapV2Router01`](IUniswapV2Router01.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:295](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L295)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `WETH` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `addLiquidity` | (`tokenA`: `string`, `tokenB`: `string`, `amountADesired`: `BigNumberish`, `amountBDesired`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addLiquidityETH` | (`token`: `string`, `amountTokenDesired`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAmountIn` | (`amountOut`: `BigNumberish`, `reserveIn`: `BigNumberish`, `reserveOut`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAmountOut` | (`amountIn`: `BigNumberish`, `reserveIn`: `BigNumberish`, `reserveOut`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAmountsIn` | (`amountOut`: `BigNumberish`, `path`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAmountsOut` | (`amountIn`: `BigNumberish`, `path`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `quote` | (`amountA`: `BigNumberish`, `reserveA`: `BigNumberish`, `reserveB`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `removeLiquidity` | (`tokenA`: `string`, `tokenB`: `string`, `liquidity`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeLiquidityETH` | (`token`: `string`, `liquidity`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeLiquidityETHWithPermit` | (`token`: `string`, `liquidity`: `BigNumberish`, `amountTokenMin`: `BigNumberish`, `amountETHMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `approveMax`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeLiquidityWithPermit` | (`tokenA`: `string`, `tokenB`: `string`, `liquidity`: `BigNumberish`, `amountAMin`: `BigNumberish`, `amountBMin`: `BigNumberish`, `to`: `string`, `deadline`: `BigNumberish`, `approveMax`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swapETHForExactTokens` | (`amountOut`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swapExactETHForTokens` | (`amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swapExactTokensForETH` | (`amountIn`: `BigNumberish`, `amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swapExactTokensForTokens` | (`amountIn`: `BigNumberish`, `amountOutMin`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swapTokensForExactETH` | (`amountOut`: `BigNumberish`, `amountInMax`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swapTokensForExactTokens` | (`amountOut`: `BigNumberish`, `amountInMax`: `BigNumberish`, `path`: `string`[], `to`: `string`, `deadline`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:970](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L970)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IUniswapV2Router01`](IUniswapV2Router01.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:296](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L296)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### WETH

▸ **WETH**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:461](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L461)

___

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:121

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:114

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:122

___

### addLiquidity

▸ **addLiquidity**(`tokenA`, `tokenB`, `amountADesired`, `amountBDesired`, `amountAMin`, `amountBMin`, `to`, `deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenA` | `string` |
| `tokenB` | `string` |
| `amountADesired` | `BigNumberish` |
| `amountBDesired` | `BigNumberish` |
| `amountAMin` | `BigNumberish` |
| `amountBMin` | `BigNumberish` |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:463](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L463)

___

### addLiquidityETH

▸ **addLiquidityETH**(`token`, `amountTokenDesired`, `amountTokenMin`, `amountETHMin`, `to`, `deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `amountTokenDesired` | `BigNumberish` |
| `amountTokenMin` | `BigNumberish` |
| `amountETHMin` | `BigNumberish` |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:475](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L475)

___

### attach

▸ **attach**(`addressOrName`): [`IUniswapV2Router01`](IUniswapV2Router01.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IUniswapV2Router01`](IUniswapV2Router01.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:274](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L274)

___

### connect

▸ **connect**(`signerOrProvider`): [`IUniswapV2Router01`](IUniswapV2Router01.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IUniswapV2Router01`](IUniswapV2Router01.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:273](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L273)

___

### deployed

▸ **deployed**(): `Promise`<[`IUniswapV2Router01`](IUniswapV2Router01.md)\>

#### Returns

`Promise`<[`IUniswapV2Router01`](IUniswapV2Router01.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:275](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L275)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:127

___

### factory

▸ **factory**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:485](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L485)

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

BaseContract.fallback

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:115

___

### getAmountIn

▸ **getAmountIn**(`amountOut`, `reserveIn`, `reserveOut`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumberish` |
| `reserveIn` | `BigNumberish` |
| `reserveOut` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:487](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L487)

___

### getAmountOut

▸ **getAmountOut**(`amountIn`, `reserveIn`, `reserveOut`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountIn` | `BigNumberish` |
| `reserveIn` | `BigNumberish` |
| `reserveOut` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:494](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L494)

___

### getAmountsIn

▸ **getAmountsIn**(`amountOut`, `path`, `overrides?`): `Promise`<`BigNumber`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumberish` |
| `path` | `string`[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:501](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L501)

___

### getAmountsOut

▸ **getAmountsOut**(`amountIn`, `path`, `overrides?`): `Promise`<`BigNumber`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountIn` | `BigNumberish` |
| `path` | `string`[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:507](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L507)

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:128

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:285](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L285)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:288](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L288)

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:279](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L279)

___

### quote

▸ **quote**(`amountA`, `reserveA`, `reserveB`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountA` | `BigNumberish` |
| `reserveA` | `BigNumberish` |
| `reserveB` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:513](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L513)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IUniswapV2Router01`](IUniswapV2Router01.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IUniswapV2Router01`](IUniswapV2Router01.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:289](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L289)

▸ **removeAllListeners**(`eventName?`): [`IUniswapV2Router01`](IUniswapV2Router01.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IUniswapV2Router01`](IUniswapV2Router01.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:292](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L292)

___

### removeLiquidity

▸ **removeLiquidity**(`tokenA`, `tokenB`, `liquidity`, `amountAMin`, `amountBMin`, `to`, `deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenA` | `string` |
| `tokenB` | `string` |
| `liquidity` | `BigNumberish` |
| `amountAMin` | `BigNumberish` |
| `amountBMin` | `BigNumberish` |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:520](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L520)

___

### removeLiquidityETH

▸ **removeLiquidityETH**(`token`, `liquidity`, `amountTokenMin`, `amountETHMin`, `to`, `deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `liquidity` | `BigNumberish` |
| `amountTokenMin` | `BigNumberish` |
| `amountETHMin` | `BigNumberish` |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:531](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L531)

___

### removeLiquidityETHWithPermit

▸ **removeLiquidityETHWithPermit**(`token`, `liquidity`, `amountTokenMin`, `amountETHMin`, `to`, `deadline`, `approveMax`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `liquidity` | `BigNumberish` |
| `amountTokenMin` | `BigNumberish` |
| `amountETHMin` | `BigNumberish` |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `approveMax` | `boolean` |
| `v` | `BigNumberish` |
| `r` | `BytesLike` |
| `s` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:541](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L541)

___

### removeLiquidityWithPermit

▸ **removeLiquidityWithPermit**(`tokenA`, `tokenB`, `liquidity`, `amountAMin`, `amountBMin`, `to`, `deadline`, `approveMax`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenA` | `string` |
| `tokenB` | `string` |
| `liquidity` | `BigNumberish` |
| `amountAMin` | `BigNumberish` |
| `amountBMin` | `BigNumberish` |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `approveMax` | `boolean` |
| `v` | `BigNumberish` |
| `r` | `BytesLike` |
| `s` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:555](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L555)

___

### swapETHForExactTokens

▸ **swapETHForExactTokens**(`amountOut`, `path`, `to`, `deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumberish` |
| `path` | `string`[] |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:570](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L570)

___

### swapExactETHForTokens

▸ **swapExactETHForTokens**(`amountOutMin`, `path`, `to`, `deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountOutMin` | `BigNumberish` |
| `path` | `string`[] |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:578](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L578)

___

### swapExactTokensForETH

▸ **swapExactTokensForETH**(`amountIn`, `amountOutMin`, `path`, `to`, `deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountIn` | `BigNumberish` |
| `amountOutMin` | `BigNumberish` |
| `path` | `string`[] |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:586](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L586)

___

### swapExactTokensForTokens

▸ **swapExactTokensForTokens**(`amountIn`, `amountOutMin`, `path`, `to`, `deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountIn` | `BigNumberish` |
| `amountOutMin` | `BigNumberish` |
| `path` | `string`[] |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:595](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L595)

___

### swapTokensForExactETH

▸ **swapTokensForExactETH**(`amountOut`, `amountInMax`, `path`, `to`, `deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumberish` |
| `amountInMax` | `BigNumberish` |
| `path` | `string`[] |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:604](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L604)

___

### swapTokensForExactTokens

▸ **swapTokensForExactTokens**(`amountOut`, `amountInMax`, `path`, `to`, `deadline`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumberish` |
| `amountInMax` | `BigNumberish` |
| `path` | `string`[] |
| `to` | `string` |
| `deadline` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Router01.ts:613](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Router01.ts#L613)
