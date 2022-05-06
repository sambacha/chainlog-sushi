[sushi-lens](../README.md) / [Exports](../modules.md) / IWethMaker

# Interface: IWethMaker

## Hierarchy

- `BaseContract`

  ↳ **`IWethMaker`**

## Table of contents

### Properties

- [\_deployedPromise](IWethMaker.md#_deployedpromise)
- [\_runningEvents](IWethMaker.md#_runningevents)
- [\_wrappedEmits](IWethMaker.md#_wrappedemits)
- [address](IWethMaker.md#address)
- [callStatic](IWethMaker.md#callstatic)
- [contractName](IWethMaker.md#contractname)
- [deployTransaction](IWethMaker.md#deploytransaction)
- [estimateGas](IWethMaker.md#estimategas)
- [filters](IWethMaker.md#filters)
- [functions](IWethMaker.md#functions)
- [interface](IWethMaker.md#interface)
- [off](IWethMaker.md#off)
- [on](IWethMaker.md#on)
- [once](IWethMaker.md#once)
- [populateTransaction](IWethMaker.md#populatetransaction)
- [provider](IWethMaker.md#provider)
- [removeListener](IWethMaker.md#removelistener)
- [resolvedAddress](IWethMaker.md#resolvedaddress)
- [signer](IWethMaker.md#signer)

### Methods

- [\_checkRunningEvents](IWethMaker.md#_checkrunningevents)
- [\_deployed](IWethMaker.md#_deployed)
- [\_wrapEvent](IWethMaker.md#_wrapevent)
- [attach](IWethMaker.md#attach)
- [bridges](IWethMaker.md#bridges)
- [burnPairs](IWethMaker.md#burnpairs)
- [connect](IWethMaker.md#connect)
- [deployed](IWethMaker.md#deployed)
- [emit](IWethMaker.md#emit)
- [fallback](IWethMaker.md#fallback)
- [listenerCount](IWethMaker.md#listenercount)
- [listeners](IWethMaker.md#listeners)
- [owner](IWethMaker.md#owner)
- [queryFilter](IWethMaker.md#queryfilter)
- [removeAllListeners](IWethMaker.md#removealllisteners)
- [withdraw](IWethMaker.md#withdraw)

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
| `bridges` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `burnPairs` | (`lpTokens`: `string`[], `amounts`: `BigNumberish`[], `minimumOut0`: `BigNumberish`[], `minimumOut1`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `withdraw` | (`token`: `string`, `to`: `string`, `_value`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IWethMaker.ts:145](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L145)

___

### contractName

• **contractName**: ``"IWethMaker"``

#### Defined in

[types/ethers-contracts/IWethMaker.ts:78](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L78)

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
| `bridges` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burnPairs` | (`lpTokens`: `string`[], `amounts`: `BigNumberish`[], `minimumOut0`: `BigNumberish`[], `minimumOut1`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdraw` | (`token`: `string`, `to`: `string`, `_value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IWethMaker.ts:174](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L174)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SetTrusted` | (`user?`: ``null`` \| `string`, `isTrusted?`: ``null``) => `SetTrustedEventFilter` |
| `SetTrusted(address,bool)` | (`user?`: ``null`` \| `string`, `isTrusted?`: ``null``) => `SetTrustedEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IWethMaker.ts:166](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L166)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bridges` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `burnPairs` | (`lpTokens`: `string`[], `amounts`: `BigNumberish`[], `minimumOut0`: `BigNumberish`[], `minimumOut1`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `withdraw` | (`token`: `string`, `to`: `string`, `_value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IWethMaker.ts:105](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L105)

___

### interface

• **interface**: `IWethMakerInterface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IWethMaker.ts:84](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L84)

___

### off

• **off**: `OnEvent`<[`IWethMaker`](IWethMaker.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IWethMaker.ts:100](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L100)

___

### on

• **on**: `OnEvent`<[`IWethMaker`](IWethMaker.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IWethMaker.ts:101](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L101)

___

### once

• **once**: `OnEvent`<[`IWethMaker`](IWethMaker.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IWethMaker.ts:102](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L102)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bridges` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `burnPairs` | (`lpTokens`: `string`[], `amounts`: `BigNumberish`[], `minimumOut0`: `BigNumberish`[], `minimumOut1`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`token`: `string`, `to`: `string`, `_value`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IWethMaker.ts:195](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L195)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IWethMaker`](IWethMaker.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IWethMaker.ts:103](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L103)

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

▸ **attach**(`addressOrName`): [`IWethMaker`](IWethMaker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IWethMaker`](IWethMaker.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IWethMaker.ts:81](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L81)

___

### bridges

▸ **bridges**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IWethMaker.ts:126](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L126)

___

### burnPairs

▸ **burnPairs**(`lpTokens`, `amounts`, `minimumOut0`, `minimumOut1`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lpTokens` | `string`[] |
| `amounts` | `BigNumberish`[] |
| `minimumOut0` | `BigNumberish`[] |
| `minimumOut1` | `BigNumberish`[] |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IWethMaker.ts:128](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L128)

___

### connect

▸ **connect**(`signerOrProvider`): [`IWethMaker`](IWethMaker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IWethMaker`](IWethMaker.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IWethMaker.ts:80](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L80)

___

### deployed

▸ **deployed**(): `Promise`<[`IWethMaker`](IWethMaker.md)\>

#### Returns

`Promise`<[`IWethMaker`](IWethMaker.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IWethMaker.ts:82](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L82)

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

[types/ethers-contracts/IWethMaker.ts:92](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L92)

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

[types/ethers-contracts/IWethMaker.ts:95](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L95)

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IWethMaker.ts:136](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L136)

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

[types/ethers-contracts/IWethMaker.ts:86](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L86)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IWethMaker`](IWethMaker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IWethMaker`](IWethMaker.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IWethMaker.ts:96](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L96)

▸ **removeAllListeners**(`eventName?`): [`IWethMaker`](IWethMaker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IWethMaker`](IWethMaker.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IWethMaker.ts:99](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L99)

___

### withdraw

▸ **withdraw**(`token`, `to`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `_value` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IWethMaker.ts:138](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IWethMaker.ts#L138)
