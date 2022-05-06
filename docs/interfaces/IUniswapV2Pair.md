[sushi-lens](../README.md) / [Exports](../modules.md) / IUniswapV2Pair

# Interface: IUniswapV2Pair

## Hierarchy

- `BaseContract`

  ↳ **`IUniswapV2Pair`**

## Table of contents

### Properties

- [\_deployedPromise](IUniswapV2Pair.md#_deployedpromise)
- [\_runningEvents](IUniswapV2Pair.md#_runningevents)
- [\_wrappedEmits](IUniswapV2Pair.md#_wrappedemits)
- [address](IUniswapV2Pair.md#address)
- [callStatic](IUniswapV2Pair.md#callstatic)
- [contractName](IUniswapV2Pair.md#contractname)
- [deployTransaction](IUniswapV2Pair.md#deploytransaction)
- [estimateGas](IUniswapV2Pair.md#estimategas)
- [filters](IUniswapV2Pair.md#filters)
- [functions](IUniswapV2Pair.md#functions)
- [interface](IUniswapV2Pair.md#interface)
- [off](IUniswapV2Pair.md#off)
- [on](IUniswapV2Pair.md#on)
- [once](IUniswapV2Pair.md#once)
- [populateTransaction](IUniswapV2Pair.md#populatetransaction)
- [provider](IUniswapV2Pair.md#provider)
- [removeListener](IUniswapV2Pair.md#removelistener)
- [resolvedAddress](IUniswapV2Pair.md#resolvedaddress)
- [signer](IUniswapV2Pair.md#signer)

### Methods

- [DOMAIN\_SEPARATOR](IUniswapV2Pair.md#domain_separator)
- [MINIMUM\_LIQUIDITY](IUniswapV2Pair.md#minimum_liquidity)
- [PERMIT\_TYPEHASH](IUniswapV2Pair.md#permit_typehash)
- [\_checkRunningEvents](IUniswapV2Pair.md#_checkrunningevents)
- [\_deployed](IUniswapV2Pair.md#_deployed)
- [\_wrapEvent](IUniswapV2Pair.md#_wrapevent)
- [allowance](IUniswapV2Pair.md#allowance)
- [approve](IUniswapV2Pair.md#approve)
- [attach](IUniswapV2Pair.md#attach)
- [balanceOf](IUniswapV2Pair.md#balanceof)
- [burn](IUniswapV2Pair.md#burn)
- [connect](IUniswapV2Pair.md#connect)
- [decimals](IUniswapV2Pair.md#decimals)
- [deployed](IUniswapV2Pair.md#deployed)
- [emit](IUniswapV2Pair.md#emit)
- [factory](IUniswapV2Pair.md#factory)
- [fallback](IUniswapV2Pair.md#fallback)
- [getReserves](IUniswapV2Pair.md#getreserves)
- [initialize](IUniswapV2Pair.md#initialize)
- [kLast](IUniswapV2Pair.md#klast)
- [listenerCount](IUniswapV2Pair.md#listenercount)
- [listeners](IUniswapV2Pair.md#listeners)
- [mint](IUniswapV2Pair.md#mint)
- [name](IUniswapV2Pair.md#name)
- [nonces](IUniswapV2Pair.md#nonces)
- [permit](IUniswapV2Pair.md#permit)
- [price0CumulativeLast](IUniswapV2Pair.md#price0cumulativelast)
- [price1CumulativeLast](IUniswapV2Pair.md#price1cumulativelast)
- [queryFilter](IUniswapV2Pair.md#queryfilter)
- [removeAllListeners](IUniswapV2Pair.md#removealllisteners)
- [skim](IUniswapV2Pair.md#skim)
- [swap](IUniswapV2Pair.md#swap)
- [symbol](IUniswapV2Pair.md#symbol)
- [sync](IUniswapV2Pair.md#sync)
- [token0](IUniswapV2Pair.md#token0)
- [token1](IUniswapV2Pair.md#token1)
- [totalSupply](IUniswapV2Pair.md#totalsupply)
- [transfer](IUniswapV2Pair.md#transfer)
- [transferFrom](IUniswapV2Pair.md#transferfrom)

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
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `MINIMUM_LIQUIDITY` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn` | (`to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amount0`: `BigNumber` ; `amount1`: `BigNumber`  }\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReserves` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `blockTimestampLast`: `number` ; `reserve0`: `BigNumber` ; `reserve1`: `BigNumber`  }\> |
| `initialize` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `kLast` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint` | (`to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `nonces` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `price0CumulativeLast` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `price1CumulativeLast` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `skim` | (`to`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `swap` | (`amount0Out`: `BigNumberish`, `amount1Out`: `BigNumberish`, `to`: `string`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `sync` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `string`, `value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:560](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L560)

___

### contractName

• **contractName**: ``"IUniswapV2Pair"``

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:313](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L313)

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
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `MINIMUM_LIQUIDITY` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn` | (`to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReserves` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `kLast` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint` | (`to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `price0CumulativeLast` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `price1CumulativeLast` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `skim` | (`to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `swap` | (`amount0Out`: `BigNumberish`, `amount1Out`: `BigNumberish`, `to`: `string`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `sync` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `string`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:733](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L733)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `ApprovalEventFilter` |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `ApprovalEventFilter` |
| `Burn` | (`sender?`: ``null`` \| `string`, `amount0?`: ``null``, `amount1?`: ``null``, `to?`: ``null`` \| `string`) => `BurnEventFilter` |
| `Burn(address,uint256,uint256,address)` | (`sender?`: ``null`` \| `string`, `amount0?`: ``null``, `amount1?`: ``null``, `to?`: ``null`` \| `string`) => `BurnEventFilter` |
| `Mint` | (`sender?`: ``null`` \| `string`, `amount0?`: ``null``, `amount1?`: ``null``) => `MintEventFilter` |
| `Mint(address,uint256,uint256)` | (`sender?`: ``null`` \| `string`, `amount0?`: ``null``, `amount1?`: ``null``) => `MintEventFilter` |
| `Swap` | (`sender?`: ``null`` \| `string`, `amount0In?`: ``null``, `amount1In?`: ``null``, `amount0Out?`: ``null``, `amount1Out?`: ``null``, `to?`: ``null`` \| `string`) => `SwapEventFilter` |
| `Swap(address,uint256,uint256,uint256,uint256,address)` | (`sender?`: ``null`` \| `string`, `amount0In?`: ``null``, `amount1In?`: ``null``, `amount0Out?`: ``null``, `amount1Out?`: ``null``, `to?`: ``null`` \| `string`) => `SwapEventFilter` |
| `Sync` | (`reserve0?`: ``null``, `reserve1?`: ``null``) => `SyncEventFilter` |
| `Sync(uint112,uint112)` | (`reserve0?`: ``null``, `reserve1?`: ``null``) => `SyncEventFilter` |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TransferEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:665](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L665)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `MINIMUM_LIQUIDITY` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `string`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `burn` | (`to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getReserves` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `blockTimestampLast`: `number` ; `reserve0`: `BigNumber` ; `reserve1`: `BigNumber`  }\> |
| `initialize` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `kLast` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `mint` | (`to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `nonces` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `price0CumulativeLast` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `price1CumulativeLast` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `skim` | (`to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `swap` | (`amount0Out`: `BigNumberish`, `amount1Out`: `BigNumberish`, `to`: `string`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `sync` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`to`: `string`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:340](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L340)

___

### interface

• **interface**: `IUniswapV2PairInterface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:319](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L319)

___

### off

• **off**: `OnEvent`<[`IUniswapV2Pair`](IUniswapV2Pair.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:335](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L335)

___

### on

• **on**: `OnEvent`<[`IUniswapV2Pair`](IUniswapV2Pair.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:336](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L336)

___

### once

• **once**: `OnEvent`<[`IUniswapV2Pair`](IUniswapV2Pair.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:337](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L337)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `MINIMUM_LIQUIDITY` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `PERMIT_TYPEHASH` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `string`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `burn` | (`to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReserves` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `kLast` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `mint` | (`to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nonces` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `price0CumulativeLast` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `price1CumulativeLast` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `skim` | (`to`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `swap` | (`amount0Out`: `BigNumberish`, `amount1Out`: `BigNumberish`, `to`: `string`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `sync` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `token0` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token1` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`to`: `string`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:836](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L836)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IUniswapV2Pair`](IUniswapV2Pair.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:338](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L338)

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

### DOMAIN\_SEPARATOR

▸ **DOMAIN_SEPARATOR**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:451](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L451)

___

### MINIMUM\_LIQUIDITY

▸ **MINIMUM_LIQUIDITY**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:453](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L453)

___

### PERMIT\_TYPEHASH

▸ **PERMIT_TYPEHASH**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:455](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L455)

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

### allowance

▸ **allowance**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:457](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L457)

___

### approve

▸ **approve**(`spender`, `value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `value` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:463](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L463)

___

### attach

▸ **attach**(`addressOrName`): [`IUniswapV2Pair`](IUniswapV2Pair.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IUniswapV2Pair`](IUniswapV2Pair.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:316](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L316)

___

### balanceOf

▸ **balanceOf**(`owner`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:469](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L469)

___

### burn

▸ **burn**(`to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:471](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L471)

___

### connect

▸ **connect**(`signerOrProvider`): [`IUniswapV2Pair`](IUniswapV2Pair.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IUniswapV2Pair`](IUniswapV2Pair.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:315](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L315)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:476](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L476)

___

### deployed

▸ **deployed**(): `Promise`<[`IUniswapV2Pair`](IUniswapV2Pair.md)\>

#### Returns

`Promise`<[`IUniswapV2Pair`](IUniswapV2Pair.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:317](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L317)

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

[types/ethers-contracts/IUniswapV2Pair.ts:478](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L478)

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

### getReserves

▸ **getReserves**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `number`] & { `blockTimestampLast`: `number` ; `reserve0`: `BigNumber` ; `reserve1`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `number`] & { `blockTimestampLast`: `number` ; `reserve0`: `BigNumber` ; `reserve1`: `BigNumber`  }\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:480](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L480)

___

### initialize

▸ **initialize**(`arg0`, `arg1`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:490](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L490)

___

### kLast

▸ **kLast**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:496](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L496)

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

[types/ethers-contracts/IUniswapV2Pair.ts:327](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L327)

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

[types/ethers-contracts/IUniswapV2Pair.ts:330](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L330)

___

### mint

▸ **mint**(`to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:498](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L498)

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:503](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L503)

___

### nonces

▸ **nonces**(`owner`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:505](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L505)

___

### permit

▸ **permit**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `value` | `BigNumberish` |
| `deadline` | `BigNumberish` |
| `v` | `BigNumberish` |
| `r` | `BytesLike` |
| `s` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:507](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L507)

___

### price0CumulativeLast

▸ **price0CumulativeLast**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:518](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L518)

___

### price1CumulativeLast

▸ **price1CumulativeLast**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:520](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L520)

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

[types/ethers-contracts/IUniswapV2Pair.ts:321](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L321)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IUniswapV2Pair`](IUniswapV2Pair.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IUniswapV2Pair`](IUniswapV2Pair.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:331](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L331)

▸ **removeAllListeners**(`eventName?`): [`IUniswapV2Pair`](IUniswapV2Pair.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IUniswapV2Pair`](IUniswapV2Pair.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:334](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L334)

___

### skim

▸ **skim**(`to`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:522](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L522)

___

### swap

▸ **swap**(`amount0Out`, `amount1Out`, `to`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount0Out` | `BigNumberish` |
| `amount1Out` | `BigNumberish` |
| `to` | `string` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:527](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L527)

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:535](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L535)

___

### sync

▸ **sync**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:537](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L537)

___

### token0

▸ **token0**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:541](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L541)

___

### token1

▸ **token1**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:543](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L543)

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:545](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L545)

___

### transfer

▸ **transfer**(`to`, `value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `value` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:547](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L547)

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `value` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Pair.ts:553](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Pair.ts#L553)
