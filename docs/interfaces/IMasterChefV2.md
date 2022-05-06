[sushi-lens](../README.md) / [Exports](../modules.md) / IMasterChefV2

# Interface: IMasterChefV2

## Hierarchy

- `BaseContract`

  ↳ **`IMasterChefV2`**

## Table of contents

### Properties

- [\_deployedPromise](IMasterChefV2.md#_deployedpromise)
- [\_runningEvents](IMasterChefV2.md#_runningevents)
- [\_wrappedEmits](IMasterChefV2.md#_wrappedemits)
- [address](IMasterChefV2.md#address)
- [callStatic](IMasterChefV2.md#callstatic)
- [contractName](IMasterChefV2.md#contractname)
- [deployTransaction](IMasterChefV2.md#deploytransaction)
- [estimateGas](IMasterChefV2.md#estimategas)
- [filters](IMasterChefV2.md#filters)
- [functions](IMasterChefV2.md#functions)
- [interface](IMasterChefV2.md#interface)
- [off](IMasterChefV2.md#off)
- [on](IMasterChefV2.md#on)
- [once](IMasterChefV2.md#once)
- [populateTransaction](IMasterChefV2.md#populatetransaction)
- [provider](IMasterChefV2.md#provider)
- [removeListener](IMasterChefV2.md#removelistener)
- [resolvedAddress](IMasterChefV2.md#resolvedaddress)
- [signer](IMasterChefV2.md#signer)

### Methods

- [\_checkRunningEvents](IMasterChefV2.md#_checkrunningevents)
- [\_deployed](IMasterChefV2.md#_deployed)
- [\_wrapEvent](IMasterChefV2.md#_wrapevent)
- [attach](IMasterChefV2.md#attach)
- [connect](IMasterChefV2.md#connect)
- [deployed](IMasterChefV2.md#deployed)
- [emit](IMasterChefV2.md#emit)
- [fallback](IMasterChefV2.md#fallback)
- [listenerCount](IMasterChefV2.md#listenercount)
- [listeners](IMasterChefV2.md#listeners)
- [lpToken](IMasterChefV2.md#lptoken)
- [poolInfo](IMasterChefV2.md#poolinfo)
- [queryFilter](IMasterChefV2.md#queryfilter)
- [removeAllListeners](IMasterChefV2.md#removealllisteners)

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
| `lpToken` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `poolInfo` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`PoolInfoStructOutput`](../modules/IMasterChefV2.md#poolinfostructoutput)\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:106](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L106)

___

### contractName

• **contractName**: ``"IMasterChefV2"``

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:63](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L63)

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
| `lpToken` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolInfo` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:117](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L117)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:115](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L115)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lpToken` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `poolInfo` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[[`PoolInfoStructOutput`](../modules/IMasterChefV2.md#poolinfostructoutput)]\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:90](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L90)

___

### interface

• **interface**: `IMasterChefV2Interface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:69](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L69)

___

### off

• **off**: `OnEvent`<[`IMasterChefV2`](IMasterChefV2.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:85](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L85)

___

### on

• **on**: `OnEvent`<[`IMasterChefV2`](IMasterChefV2.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:86](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L86)

___

### once

• **once**: `OnEvent`<[`IMasterChefV2`](IMasterChefV2.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:87](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L87)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lpToken` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolInfo` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:129](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L129)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IMasterChefV2`](IMasterChefV2.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:88](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L88)

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

### attach

▸ **attach**(`addressOrName`): [`IMasterChefV2`](IMasterChefV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IMasterChefV2`](IMasterChefV2.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:66](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L66)

___

### connect

▸ **connect**(`signerOrProvider`): [`IMasterChefV2`](IMasterChefV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IMasterChefV2`](IMasterChefV2.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:65](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L65)

___

### deployed

▸ **deployed**(): `Promise`<[`IMasterChefV2`](IMasterChefV2.md)\>

#### Returns

`Promise`<[`IMasterChefV2`](IMasterChefV2.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:67](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L67)

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

[types/ethers-contracts/IMasterChefV2.ts:77](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L77)

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

[types/ethers-contracts/IMasterChefV2.ts:80](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L80)

___

### lpToken

▸ **lpToken**(`poolId`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:99](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L99)

___

### poolInfo

▸ **poolInfo**(`poolId`, `overrides?`): `Promise`<[`PoolInfoStructOutput`](../modules/IMasterChefV2.md#poolinfostructoutput)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`PoolInfoStructOutput`](../modules/IMasterChefV2.md#poolinfostructoutput)\>

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:101](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L101)

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

[types/ethers-contracts/IMasterChefV2.ts:71](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L71)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IMasterChefV2`](IMasterChefV2.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IMasterChefV2`](IMasterChefV2.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:81](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L81)

▸ **removeAllListeners**(`eventName?`): [`IMasterChefV2`](IMasterChefV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IMasterChefV2`](IMasterChefV2.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IMasterChefV2.ts:84](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChefV2.ts#L84)
