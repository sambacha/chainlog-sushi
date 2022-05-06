[sushi-lens](../README.md) / [Exports](../modules.md) / IERC20

# Interface: IERC20

## Hierarchy

- `BaseContract`

  ↳ **`IERC20`**

## Table of contents

### Properties

- [\_deployedPromise](IERC20.md#_deployedpromise)
- [\_runningEvents](IERC20.md#_runningevents)
- [\_wrappedEmits](IERC20.md#_wrappedemits)
- [address](IERC20.md#address)
- [callStatic](IERC20.md#callstatic)
- [contractName](IERC20.md#contractname)
- [deployTransaction](IERC20.md#deploytransaction)
- [estimateGas](IERC20.md#estimategas)
- [filters](IERC20.md#filters)
- [functions](IERC20.md#functions)
- [interface](IERC20.md#interface)
- [off](IERC20.md#off)
- [on](IERC20.md#on)
- [once](IERC20.md#once)
- [populateTransaction](IERC20.md#populatetransaction)
- [provider](IERC20.md#provider)
- [removeListener](IERC20.md#removelistener)
- [resolvedAddress](IERC20.md#resolvedaddress)
- [signer](IERC20.md#signer)

### Methods

- [\_checkRunningEvents](IERC20.md#_checkrunningevents)
- [\_deployed](IERC20.md#_deployed)
- [\_wrapEvent](IERC20.md#_wrapevent)
- [allowance](IERC20.md#allowance)
- [approve](IERC20.md#approve)
- [attach](IERC20.md#attach)
- [balanceOf](IERC20.md#balanceof)
- [connect](IERC20.md#connect)
- [decimals](IERC20.md#decimals)
- [deployed](IERC20.md#deployed)
- [emit](IERC20.md#emit)
- [fallback](IERC20.md#fallback)
- [listenerCount](IERC20.md#listenercount)
- [listeners](IERC20.md#listeners)
- [name](IERC20.md#name)
- [permit](IERC20.md#permit)
- [queryFilter](IERC20.md#queryfilter)
- [removeAllListeners](IERC20.md#removealllisteners)
- [symbol](IERC20.md#symbol)
- [totalSupply](IERC20.md#totalsupply)

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
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IERC20.ts:225](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L225)

___

### contractName

• **contractName**: ``"IERC20"``

#### Defined in

[types/ethers-contracts/IERC20.ts:130](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L130)

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
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IERC20.ts:284](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L284)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `ApprovalEventFilter` |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `ApprovalEventFilter` |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TransferEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IERC20.ts:260](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L260)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IERC20.ts:157](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L157)

___

### interface

• **interface**: `IERC20Interface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IERC20.ts:136](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L136)

___

### off

• **off**: `OnEvent`<[`IERC20`](IERC20.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IERC20.ts:152](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L152)

___

### on

• **on**: `OnEvent`<[`IERC20`](IERC20.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IERC20.ts:153](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L153)

___

### once

• **once**: `OnEvent`<[`IERC20`](IERC20.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IERC20.ts:154](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L154)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IERC20.ts:319](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L319)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IERC20`](IERC20.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IERC20.ts:155](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L155)

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

[types/ethers-contracts/IERC20.ts:192](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L192)

___

### approve

▸ **approve**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IERC20.ts:198](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L198)

___

### attach

▸ **attach**(`addressOrName`): [`IERC20`](IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC20`](IERC20.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IERC20.ts:133](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L133)

___

### balanceOf

▸ **balanceOf**(`account`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IERC20.ts:204](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L204)

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC20`](IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC20`](IERC20.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IERC20.ts:132](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L132)

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

[types/ethers-contracts/IERC20.ts:206](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L206)

___

### deployed

▸ **deployed**(): `Promise`<[`IERC20`](IERC20.md)\>

#### Returns

`Promise`<[`IERC20`](IERC20.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IERC20.ts:134](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L134)

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

[types/ethers-contracts/IERC20.ts:144](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L144)

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

[types/ethers-contracts/IERC20.ts:147](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L147)

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

[types/ethers-contracts/IERC20.ts:208](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L208)

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

[types/ethers-contracts/IERC20.ts:210](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L210)

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

[types/ethers-contracts/IERC20.ts:138](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L138)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IERC20`](IERC20.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IERC20`](IERC20.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IERC20.ts:148](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L148)

▸ **removeAllListeners**(`eventName?`): [`IERC20`](IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC20`](IERC20.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IERC20.ts:151](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L151)

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

[types/ethers-contracts/IERC20.ts:221](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L221)

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

[types/ethers-contracts/IERC20.ts:223](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IERC20.ts#L223)
