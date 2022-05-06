[sushi-lens](../README.md) / [Exports](../modules.md) / [iMasterChefSol](../modules/iMasterChefSol.md) / IOwnable

# Interface: IOwnable

[iMasterChefSol](../modules/iMasterChefSol.md).IOwnable

## Hierarchy

- `BaseContract`

  ↳ **`IOwnable`**

## Table of contents

### Properties

- [\_deployedPromise](iMasterChefSol.IOwnable.md#_deployedpromise)
- [\_runningEvents](iMasterChefSol.IOwnable.md#_runningevents)
- [\_wrappedEmits](iMasterChefSol.IOwnable.md#_wrappedemits)
- [address](iMasterChefSol.IOwnable.md#address)
- [callStatic](iMasterChefSol.IOwnable.md#callstatic)
- [contractName](iMasterChefSol.IOwnable.md#contractname)
- [deployTransaction](iMasterChefSol.IOwnable.md#deploytransaction)
- [estimateGas](iMasterChefSol.IOwnable.md#estimategas)
- [filters](iMasterChefSol.IOwnable.md#filters)
- [functions](iMasterChefSol.IOwnable.md#functions)
- [interface](iMasterChefSol.IOwnable.md#interface)
- [off](iMasterChefSol.IOwnable.md#off)
- [on](iMasterChefSol.IOwnable.md#on)
- [once](iMasterChefSol.IOwnable.md#once)
- [populateTransaction](iMasterChefSol.IOwnable.md#populatetransaction)
- [provider](iMasterChefSol.IOwnable.md#provider)
- [removeListener](iMasterChefSol.IOwnable.md#removelistener)
- [resolvedAddress](iMasterChefSol.IOwnable.md#resolvedaddress)
- [signer](iMasterChefSol.IOwnable.md#signer)

### Methods

- [\_checkRunningEvents](iMasterChefSol.IOwnable.md#_checkrunningevents)
- [\_deployed](iMasterChefSol.IOwnable.md#_deployed)
- [\_wrapEvent](iMasterChefSol.IOwnable.md#_wrapevent)
- [attach](iMasterChefSol.IOwnable.md#attach)
- [connect](iMasterChefSol.IOwnable.md#connect)
- [deployed](iMasterChefSol.IOwnable.md#deployed)
- [emit](iMasterChefSol.IOwnable.md#emit)
- [fallback](iMasterChefSol.IOwnable.md#fallback)
- [listenerCount](iMasterChefSol.IOwnable.md#listenercount)
- [listeners](iMasterChefSol.IOwnable.md#listeners)
- [owner](iMasterChefSol.IOwnable.md#owner)
- [queryFilter](iMasterChefSol.IOwnable.md#queryfilter)
- [removeAllListeners](iMasterChefSol.IOwnable.md#removealllisteners)
- [renounceOwnership](iMasterChefSol.IOwnable.md#renounceownership)
- [transferOwnership](iMasterChefSol.IOwnable.md#transferownership)

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
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:132](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L132)

___

### contractName

• **contractName**: ``"IOwnable"``

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:81](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L81)

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
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:154](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L154)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `OwnershipTransferred` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => `OwnershipTransferredEventFilter` |
| `OwnershipTransferred(address,address)` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => `OwnershipTransferredEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:143](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L143)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:108](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L108)

___

### interface

• **interface**: `IOwnableInterface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:87](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L87)

___

### off

• **off**: `OnEvent`<[`IOwnable`](iMasterChefSol.IOwnable.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:103](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L103)

___

### on

• **on**: `OnEvent`<[`IOwnable`](iMasterChefSol.IOwnable.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:104](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L104)

___

### once

• **once**: `OnEvent`<[`IOwnable`](iMasterChefSol.IOwnable.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:105](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L105)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:167](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L167)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IOwnable`](iMasterChefSol.IOwnable.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:106](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L106)

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

▸ **attach**(`addressOrName`): [`IOwnable`](iMasterChefSol.IOwnable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IOwnable`](iMasterChefSol.IOwnable.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:84](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L84)

___

### connect

▸ **connect**(`signerOrProvider`): [`IOwnable`](iMasterChefSol.IOwnable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IOwnable`](iMasterChefSol.IOwnable.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:83](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L83)

___

### deployed

▸ **deployed**(): `Promise`<[`IOwnable`](iMasterChefSol.IOwnable.md)\>

#### Returns

`Promise`<[`IOwnable`](iMasterChefSol.IOwnable.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:85](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L85)

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

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:95](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L95)

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

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:98](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L98)

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

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:121](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L121)

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

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:89](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L89)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IOwnable`](iMasterChefSol.IOwnable.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IOwnable`](iMasterChefSol.IOwnable.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:99](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L99)

▸ **removeAllListeners**(`eventName?`): [`IOwnable`](iMasterChefSol.IOwnable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IOwnable`](iMasterChefSol.IOwnable.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:102](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L102)

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:123](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L123)

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IOwnable.ts:127](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IOwnable.ts#L127)
