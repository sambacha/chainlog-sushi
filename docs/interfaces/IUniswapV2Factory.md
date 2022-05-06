[sushi-lens](../README.md) / [Exports](../modules.md) / IUniswapV2Factory

# Interface: IUniswapV2Factory

## Hierarchy

- `BaseContract`

  ↳ **`IUniswapV2Factory`**

## Table of contents

### Properties

- [\_deployedPromise](IUniswapV2Factory.md#_deployedpromise)
- [\_runningEvents](IUniswapV2Factory.md#_runningevents)
- [\_wrappedEmits](IUniswapV2Factory.md#_wrappedemits)
- [address](IUniswapV2Factory.md#address)
- [callStatic](IUniswapV2Factory.md#callstatic)
- [contractName](IUniswapV2Factory.md#contractname)
- [deployTransaction](IUniswapV2Factory.md#deploytransaction)
- [estimateGas](IUniswapV2Factory.md#estimategas)
- [filters](IUniswapV2Factory.md#filters)
- [functions](IUniswapV2Factory.md#functions)
- [interface](IUniswapV2Factory.md#interface)
- [off](IUniswapV2Factory.md#off)
- [on](IUniswapV2Factory.md#on)
- [once](IUniswapV2Factory.md#once)
- [populateTransaction](IUniswapV2Factory.md#populatetransaction)
- [provider](IUniswapV2Factory.md#provider)
- [removeListener](IUniswapV2Factory.md#removelistener)
- [resolvedAddress](IUniswapV2Factory.md#resolvedaddress)
- [signer](IUniswapV2Factory.md#signer)

### Methods

- [\_checkRunningEvents](IUniswapV2Factory.md#_checkrunningevents)
- [\_deployed](IUniswapV2Factory.md#_deployed)
- [\_wrapEvent](IUniswapV2Factory.md#_wrapevent)
- [allPairs](IUniswapV2Factory.md#allpairs)
- [allPairsLength](IUniswapV2Factory.md#allpairslength)
- [attach](IUniswapV2Factory.md#attach)
- [connect](IUniswapV2Factory.md#connect)
- [createPair](IUniswapV2Factory.md#createpair)
- [deployed](IUniswapV2Factory.md#deployed)
- [emit](IUniswapV2Factory.md#emit)
- [fallback](IUniswapV2Factory.md#fallback)
- [feeTo](IUniswapV2Factory.md#feeto)
- [feeToSetter](IUniswapV2Factory.md#feetosetter)
- [getPair](IUniswapV2Factory.md#getpair)
- [listenerCount](IUniswapV2Factory.md#listenercount)
- [listeners](IUniswapV2Factory.md#listeners)
- [migrator](IUniswapV2Factory.md#migrator)
- [queryFilter](IUniswapV2Factory.md#queryfilter)
- [removeAllListeners](IUniswapV2Factory.md#removealllisteners)
- [setFeeTo](IUniswapV2Factory.md#setfeeto)
- [setFeeToSetter](IUniswapV2Factory.md#setfeetosetter)
- [setMigrator](IUniswapV2Factory.md#setmigrator)

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
| `allPairs` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `allPairsLength` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `createPair` | (`tokenA`: `string`, `tokenB`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `feeTo` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `feeToSetter` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getPair` | (`tokenA`: `string`, `tokenB`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `migrator` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setFeeTo` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setFeeToSetter` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMigrator` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:238](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L238)

___

### contractName

• **contractName**: ``"IUniswapV2Factory"``

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:132](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L132)

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
| `allPairs` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allPairsLength` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `createPair` | (`tokenA`: `string`, `tokenB`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `feeTo` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `feeToSetter` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPair` | (`tokenA`: `string`, `tokenB`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `migrator` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setFeeTo` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setFeeToSetter` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setMigrator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:283](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L283)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PairCreated` | (`token0?`: ``null`` \| `string`, `token1?`: ``null`` \| `string`, `pair?`: ``null``, `arg3?`: ``null``) => `PairCreatedEventFilter` |
| `PairCreated(address,address,address,uint256)` | (`token0?`: ``null`` \| `string`, `token1?`: ``null`` \| `string`, `pair?`: ``null``, `arg3?`: ``null``) => `PairCreatedEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:268](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L268)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allPairs` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `pair`: `string`  }\> |
| `allPairsLength` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `createPair` | (`tokenA`: `string`, `tokenB`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `feeTo` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `feeToSetter` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getPair` | (`tokenA`: `string`, `tokenB`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `pair`: `string`  }\> |
| `migrator` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setFeeTo` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setFeeToSetter` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setMigrator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:159](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L159)

___

### interface

• **interface**: `IUniswapV2FactoryInterface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:138](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L138)

___

### off

• **off**: `OnEvent`<[`IUniswapV2Factory`](IUniswapV2Factory.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:154](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L154)

___

### on

• **on**: `OnEvent`<[`IUniswapV2Factory`](IUniswapV2Factory.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:155](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L155)

___

### once

• **once**: `OnEvent`<[`IUniswapV2Factory`](IUniswapV2Factory.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:156](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L156)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allPairs` | (`arg0`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allPairsLength` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `createPair` | (`tokenA`: `string`, `tokenB`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `feeTo` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `feeToSetter` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPair` | (`tokenA`: `string`, `tokenB`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `migrator` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setFeeTo` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setFeeToSetter` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setMigrator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:322](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L322)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IUniswapV2Factory`](IUniswapV2Factory.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:157](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L157)

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

### allPairs

▸ **allPairs**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:201](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L201)

___

### allPairsLength

▸ **allPairsLength**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:203](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L203)

___

### attach

▸ **attach**(`addressOrName`): [`IUniswapV2Factory`](IUniswapV2Factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IUniswapV2Factory`](IUniswapV2Factory.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:135](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L135)

___

### connect

▸ **connect**(`signerOrProvider`): [`IUniswapV2Factory`](IUniswapV2Factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IUniswapV2Factory`](IUniswapV2Factory.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:134](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L134)

___

### createPair

▸ **createPair**(`tokenA`, `tokenB`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenA` | `string` |
| `tokenB` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:205](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L205)

___

### deployed

▸ **deployed**(): `Promise`<[`IUniswapV2Factory`](IUniswapV2Factory.md)\>

#### Returns

`Promise`<[`IUniswapV2Factory`](IUniswapV2Factory.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:136](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L136)

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

### feeTo

▸ **feeTo**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:211](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L211)

___

### feeToSetter

▸ **feeToSetter**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:213](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L213)

___

### getPair

▸ **getPair**(`tokenA`, `tokenB`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenA` | `string` |
| `tokenB` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:215](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L215)

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

[types/ethers-contracts/IUniswapV2Factory.ts:146](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L146)

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

[types/ethers-contracts/IUniswapV2Factory.ts:149](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L149)

___

### migrator

▸ **migrator**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:221](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L221)

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

[types/ethers-contracts/IUniswapV2Factory.ts:140](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L140)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IUniswapV2Factory`](IUniswapV2Factory.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IUniswapV2Factory`](IUniswapV2Factory.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:150](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L150)

▸ **removeAllListeners**(`eventName?`): [`IUniswapV2Factory`](IUniswapV2Factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IUniswapV2Factory`](IUniswapV2Factory.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:153](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L153)

___

### setFeeTo

▸ **setFeeTo**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:223](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L223)

___

### setFeeToSetter

▸ **setFeeToSetter**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:228](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L228)

___

### setMigrator

▸ **setMigrator**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IUniswapV2Factory.ts:233](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IUniswapV2Factory.ts#L233)
