[sushi-lens](../README.md) / [Exports](../modules.md) / IGnosisSafe

# Interface: IGnosisSafe

## Hierarchy

- `BaseContract`

  ↳ **`IGnosisSafe`**

## Table of contents

### Properties

- [\_deployedPromise](IGnosisSafe.md#_deployedpromise)
- [\_runningEvents](IGnosisSafe.md#_runningevents)
- [\_wrappedEmits](IGnosisSafe.md#_wrappedemits)
- [address](IGnosisSafe.md#address)
- [callStatic](IGnosisSafe.md#callstatic)
- [contractName](IGnosisSafe.md#contractname)
- [deployTransaction](IGnosisSafe.md#deploytransaction)
- [estimateGas](IGnosisSafe.md#estimategas)
- [filters](IGnosisSafe.md#filters)
- [functions](IGnosisSafe.md#functions)
- [interface](IGnosisSafe.md#interface)
- [off](IGnosisSafe.md#off)
- [on](IGnosisSafe.md#on)
- [once](IGnosisSafe.md#once)
- [populateTransaction](IGnosisSafe.md#populatetransaction)
- [provider](IGnosisSafe.md#provider)
- [removeListener](IGnosisSafe.md#removelistener)
- [resolvedAddress](IGnosisSafe.md#resolvedaddress)
- [signer](IGnosisSafe.md#signer)

### Methods

- [\_checkRunningEvents](IGnosisSafe.md#_checkrunningevents)
- [\_deployed](IGnosisSafe.md#_deployed)
- [\_wrapEvent](IGnosisSafe.md#_wrapevent)
- [attach](IGnosisSafe.md#attach)
- [connect](IGnosisSafe.md#connect)
- [deployed](IGnosisSafe.md#deployed)
- [emit](IGnosisSafe.md#emit)
- [fallback](IGnosisSafe.md#fallback)
- [getOwners](IGnosisSafe.md#getowners)
- [getThreshold](IGnosisSafe.md#getthreshold)
- [listenerCount](IGnosisSafe.md#listenercount)
- [listeners](IGnosisSafe.md#listeners)
- [queryFilter](IGnosisSafe.md#queryfilter)
- [removeAllListeners](IGnosisSafe.md#removealllisteners)

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
| `getOwners` | (`overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `getThreshold` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:87](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L87)

___

### contractName

• **contractName**: ``"IGnosisSafe"``

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:50](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L50)

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
| `getOwners` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getThreshold` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:95](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L95)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:93](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L93)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getOwners` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`[]]\> |
| `getThreshold` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:77](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L77)

___

### interface

• **interface**: `IGnosisSafeInterface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:56](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L56)

___

### off

• **off**: `OnEvent`<[`IGnosisSafe`](IGnosisSafe.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:72](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L72)

___

### on

• **on**: `OnEvent`<[`IGnosisSafe`](IGnosisSafe.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:73](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L73)

___

### once

• **once**: `OnEvent`<[`IGnosisSafe`](IGnosisSafe.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:74](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L74)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getOwners` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getThreshold` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:101](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L101)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IGnosisSafe`](IGnosisSafe.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:75](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L75)

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

▸ **attach**(`addressOrName`): [`IGnosisSafe`](IGnosisSafe.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IGnosisSafe`](IGnosisSafe.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:53](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L53)

___

### connect

▸ **connect**(`signerOrProvider`): [`IGnosisSafe`](IGnosisSafe.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IGnosisSafe`](IGnosisSafe.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:52](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L52)

___

### deployed

▸ **deployed**(): `Promise`<[`IGnosisSafe`](IGnosisSafe.md)\>

#### Returns

`Promise`<[`IGnosisSafe`](IGnosisSafe.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:54](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L54)

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

### getOwners

▸ **getOwners**(`overrides?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:83](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L83)

___

### getThreshold

▸ **getThreshold**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:85](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L85)

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

[types/ethers-contracts/IGnosisSafe.ts:64](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L64)

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

[types/ethers-contracts/IGnosisSafe.ts:67](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L67)

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

[types/ethers-contracts/IGnosisSafe.ts:58](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L58)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IGnosisSafe`](IGnosisSafe.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IGnosisSafe`](IGnosisSafe.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:68](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L68)

▸ **removeAllListeners**(`eventName?`): [`IGnosisSafe`](IGnosisSafe.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IGnosisSafe`](IGnosisSafe.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IGnosisSafe.ts:71](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IGnosisSafe.ts#L71)
