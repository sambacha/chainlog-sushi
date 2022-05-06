[sushi-lens](../README.md) / [Exports](../modules.md) / IStrategy

# Interface: IStrategy

## Hierarchy

- `BaseContract`

  ↳ **`IStrategy`**

## Table of contents

### Properties

- [\_deployedPromise](IStrategy.md#_deployedpromise)
- [\_runningEvents](IStrategy.md#_runningevents)
- [\_wrappedEmits](IStrategy.md#_wrappedemits)
- [address](IStrategy.md#address)
- [callStatic](IStrategy.md#callstatic)
- [contractName](IStrategy.md#contractname)
- [deployTransaction](IStrategy.md#deploytransaction)
- [estimateGas](IStrategy.md#estimategas)
- [filters](IStrategy.md#filters)
- [functions](IStrategy.md#functions)
- [interface](IStrategy.md#interface)
- [off](IStrategy.md#off)
- [on](IStrategy.md#on)
- [once](IStrategy.md#once)
- [populateTransaction](IStrategy.md#populatetransaction)
- [provider](IStrategy.md#provider)
- [removeListener](IStrategy.md#removelistener)
- [resolvedAddress](IStrategy.md#resolvedaddress)
- [signer](IStrategy.md#signer)

### Methods

- [\_checkRunningEvents](IStrategy.md#_checkrunningevents)
- [\_deployed](IStrategy.md#_deployed)
- [\_wrapEvent](IStrategy.md#_wrapevent)
- [attach](IStrategy.md#attach)
- [connect](IStrategy.md#connect)
- [deployed](IStrategy.md#deployed)
- [emit](IStrategy.md#emit)
- [exit](IStrategy.md#exit)
- [fallback](IStrategy.md#fallback)
- [harvest](IStrategy.md#harvest)
- [listenerCount](IStrategy.md#listenercount)
- [listeners](IStrategy.md#listeners)
- [queryFilter](IStrategy.md#queryfilter)
- [removeAllListeners](IStrategy.md#removealllisteners)
- [skim](IStrategy.md#skim)
- [withdraw](IStrategy.md#withdraw)

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
| `exit` | (`balance`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `harvest` | (`balance`: `BigNumberish`, `sender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `skim` | (`amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdraw` | (`amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IStrategy.ts:130](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L130)

___

### contractName

• **contractName**: ``"IStrategy"``

#### Defined in

[types/ethers-contracts/IStrategy.ts:59](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L59)

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
| `exit` | (`balance`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `harvest` | (`balance`: `BigNumberish`, `sender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `skim` | (`amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw` | (`amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IStrategy.ts:149](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L149)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IStrategy.ts:147](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L147)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exit` | (`balance`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `harvest` | (`balance`: `BigNumberish`, `sender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `skim` | (`amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw` | (`amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IStrategy.ts:86](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L86)

___

### interface

• **interface**: `IStrategyInterface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IStrategy.ts:65](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L65)

___

### off

• **off**: `OnEvent`<[`IStrategy`](IStrategy.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IStrategy.ts:81](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L81)

___

### on

• **on**: `OnEvent`<[`IStrategy`](IStrategy.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IStrategy.ts:82](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L82)

___

### once

• **once**: `OnEvent`<[`IStrategy`](IStrategy.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IStrategy.ts:83](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L83)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exit` | (`balance`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `harvest` | (`balance`: `BigNumberish`, `sender`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `skim` | (`amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IStrategy.ts:172](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L172)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IStrategy`](IStrategy.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IStrategy.ts:84](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L84)

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

▸ **attach**(`addressOrName`): [`IStrategy`](IStrategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IStrategy`](IStrategy.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IStrategy.ts:62](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L62)

___

### connect

▸ **connect**(`signerOrProvider`): [`IStrategy`](IStrategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IStrategy`](IStrategy.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IStrategy.ts:61](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L61)

___

### deployed

▸ **deployed**(): `Promise`<[`IStrategy`](IStrategy.md)\>

#### Returns

`Promise`<[`IStrategy`](IStrategy.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IStrategy.ts:63](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L63)

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

### exit

▸ **exit**(`balance`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `balance` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IStrategy.ts:109](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L109)

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

### harvest

▸ **harvest**(`balance`, `sender`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `balance` | `BigNumberish` |
| `sender` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IStrategy.ts:114](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L114)

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

[types/ethers-contracts/IStrategy.ts:73](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L73)

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

[types/ethers-contracts/IStrategy.ts:76](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L76)

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

[types/ethers-contracts/IStrategy.ts:67](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L67)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IStrategy`](IStrategy.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IStrategy`](IStrategy.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IStrategy.ts:77](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L77)

▸ **removeAllListeners**(`eventName?`): [`IStrategy`](IStrategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IStrategy`](IStrategy.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IStrategy.ts:80](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L80)

___

### skim

▸ **skim**(`amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IStrategy.ts:120](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L120)

___

### withdraw

▸ **withdraw**(`amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IStrategy.ts:125](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IStrategy.ts#L125)
