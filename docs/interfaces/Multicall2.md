[sushi-lens](../README.md) / [Exports](../modules.md) / Multicall2

# Interface: Multicall2

## Hierarchy

- `BaseContract`

  ↳ **`Multicall2`**

## Table of contents

### Properties

- [\_deployedPromise](Multicall2.md#_deployedpromise)
- [\_runningEvents](Multicall2.md#_runningevents)
- [\_wrappedEmits](Multicall2.md#_wrappedemits)
- [address](Multicall2.md#address)
- [callStatic](Multicall2.md#callstatic)
- [contractName](Multicall2.md#contractname)
- [deployTransaction](Multicall2.md#deploytransaction)
- [estimateGas](Multicall2.md#estimategas)
- [filters](Multicall2.md#filters)
- [functions](Multicall2.md#functions)
- [interface](Multicall2.md#interface)
- [off](Multicall2.md#off)
- [on](Multicall2.md#on)
- [once](Multicall2.md#once)
- [populateTransaction](Multicall2.md#populatetransaction)
- [provider](Multicall2.md#provider)
- [removeListener](Multicall2.md#removelistener)
- [resolvedAddress](Multicall2.md#resolvedaddress)
- [signer](Multicall2.md#signer)

### Methods

- [\_checkRunningEvents](Multicall2.md#_checkrunningevents)
- [\_deployed](Multicall2.md#_deployed)
- [\_wrapEvent](Multicall2.md#_wrapevent)
- [aggregate](Multicall2.md#aggregate)
- [attach](Multicall2.md#attach)
- [blockAndAggregate](Multicall2.md#blockandaggregate)
- [connect](Multicall2.md#connect)
- [deployed](Multicall2.md#deployed)
- [emit](Multicall2.md#emit)
- [fallback](Multicall2.md#fallback)
- [getBlockHash](Multicall2.md#getblockhash)
- [getBlockNumber](Multicall2.md#getblocknumber)
- [getCurrentBlockCoinbase](Multicall2.md#getcurrentblockcoinbase)
- [getCurrentBlockDifficulty](Multicall2.md#getcurrentblockdifficulty)
- [getCurrentBlockGasLimit](Multicall2.md#getcurrentblockgaslimit)
- [getCurrentBlockTimestamp](Multicall2.md#getcurrentblocktimestamp)
- [getEthBalance](Multicall2.md#getethbalance)
- [getLastBlockHash](Multicall2.md#getlastblockhash)
- [listenerCount](Multicall2.md#listenercount)
- [listeners](Multicall2.md#listeners)
- [queryFilter](Multicall2.md#queryfilter)
- [removeAllListeners](Multicall2.md#removealllisteners)
- [tryAggregate](Multicall2.md#tryaggregate)
- [tryBlockAndAggregate](Multicall2.md#tryblockandaggregate)

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
| `aggregate` | (`calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`[]] & { `blockNumber`: `BigNumber` ; `returnData`: `string`[]  }\> |
| `blockAndAggregate` | (`calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`, [`ResultStructOutput`](../modules/Multicall2.md#resultstructoutput)[]] & { `blockHash`: `string` ; `blockNumber`: `BigNumber` ; `returnData`: [`ResultStructOutput`](../modules/Multicall2.md#resultstructoutput)[]  }\> |
| `getBlockHash` | (`blockNumber`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getBlockNumber` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentBlockCoinbase` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCurrentBlockDifficulty` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentBlockGasLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentBlockTimestamp` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEthBalance` | (`addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLastBlockHash` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `tryAggregate` | (`requireSuccess`: `boolean`, `calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `CallOverrides`) => `Promise`<[`ResultStructOutput`](../modules/Multicall2.md#resultstructoutput)[]\> |
| `tryBlockAndAggregate` | (`requireSuccess`: `boolean`, `calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `string`, [`ResultStructOutput`](../modules/Multicall2.md#resultstructoutput)[]] & { `blockHash`: `string` ; `blockNumber`: `BigNumber` ; `returnData`: [`ResultStructOutput`](../modules/Multicall2.md#resultstructoutput)[]  }\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/Multicall2.ts:300](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L300)

___

### contractName

• **contractName**: ``"Multicall2"``

#### Defined in

[types/ethers-contracts/Multicall2.ts:174](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L174)

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
| `aggregate` | (`calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `blockAndAggregate` | (`calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getBlockHash` | (`blockNumber`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getBlockNumber` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentBlockCoinbase` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentBlockDifficulty` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentBlockGasLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentBlockTimestamp` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEthBalance` | (`addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLastBlockHash` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `tryAggregate` | (`requireSuccess`: `boolean`, `calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `tryBlockAndAggregate` | (`requireSuccess`: `boolean`, `calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/Multicall2.ts:359](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L359)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/Multicall2.ts:357](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L357)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregate` | (`calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `blockAndAggregate` | (`calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getBlockHash` | (`blockNumber`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `blockHash`: `string`  }\> |
| `getBlockNumber` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `blockNumber`: `BigNumber`  }\> |
| `getCurrentBlockCoinbase` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `coinbase`: `string`  }\> |
| `getCurrentBlockDifficulty` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `difficulty`: `BigNumber`  }\> |
| `getCurrentBlockGasLimit` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `gaslimit`: `BigNumber`  }\> |
| `getCurrentBlockTimestamp` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `timestamp`: `BigNumber`  }\> |
| `getEthBalance` | (`addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `balance`: `BigNumber`  }\> |
| `getLastBlockHash` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `blockHash`: `string`  }\> |
| `tryAggregate` | (`requireSuccess`: `boolean`, `calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `tryBlockAndAggregate` | (`requireSuccess`: `boolean`, `calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/Multicall2.ts:201](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L201)

___

### interface

• **interface**: `Multicall2Interface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/Multicall2.ts:180](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L180)

___

### off

• **off**: `OnEvent`<[`Multicall2`](Multicall2.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/Multicall2.ts:196](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L196)

___

### on

• **on**: `OnEvent`<[`Multicall2`](Multicall2.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/Multicall2.ts:197](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L197)

___

### once

• **once**: `OnEvent`<[`Multicall2`](Multicall2.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/Multicall2.ts:198](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L198)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregate` | (`calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `blockAndAggregate` | (`calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getBlockHash` | (`blockNumber`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getBlockNumber` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentBlockCoinbase` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentBlockDifficulty` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentBlockGasLimit` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentBlockTimestamp` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEthBalance` | (`addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLastBlockHash` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `tryAggregate` | (`requireSuccess`: `boolean`, `calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `tryBlockAndAggregate` | (`requireSuccess`: `boolean`, `calls`: [`CallStruct`](../modules/Multicall2.md#callstruct)[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/Multicall2.ts:402](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L402)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`Multicall2`](Multicall2.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/Multicall2.ts:199](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L199)

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

### aggregate

▸ **aggregate**(`calls`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `calls` | [`CallStruct`](../modules/Multicall2.md#callstruct)[] |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:259](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L259)

___

### attach

▸ **attach**(`addressOrName`): [`Multicall2`](Multicall2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Multicall2`](Multicall2.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/Multicall2.ts:177](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L177)

___

### blockAndAggregate

▸ **blockAndAggregate**(`calls`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `calls` | [`CallStruct`](../modules/Multicall2.md#callstruct)[] |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:264](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L264)

___

### connect

▸ **connect**(`signerOrProvider`): [`Multicall2`](Multicall2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Multicall2`](Multicall2.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/Multicall2.ts:176](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L176)

___

### deployed

▸ **deployed**(): `Promise`<[`Multicall2`](Multicall2.md)\>

#### Returns

`Promise`<[`Multicall2`](Multicall2.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/Multicall2.ts:178](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L178)

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

### getBlockHash

▸ **getBlockHash**(`blockNumber`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:269](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L269)

___

### getBlockNumber

▸ **getBlockNumber**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:274](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L274)

___

### getCurrentBlockCoinbase

▸ **getCurrentBlockCoinbase**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:276](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L276)

___

### getCurrentBlockDifficulty

▸ **getCurrentBlockDifficulty**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:278](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L278)

___

### getCurrentBlockGasLimit

▸ **getCurrentBlockGasLimit**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:280](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L280)

___

### getCurrentBlockTimestamp

▸ **getCurrentBlockTimestamp**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:282](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L282)

___

### getEthBalance

▸ **getEthBalance**(`addr`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:284](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L284)

___

### getLastBlockHash

▸ **getLastBlockHash**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:286](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L286)

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

[types/ethers-contracts/Multicall2.ts:188](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L188)

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

[types/ethers-contracts/Multicall2.ts:191](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L191)

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

[types/ethers-contracts/Multicall2.ts:182](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L182)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`Multicall2`](Multicall2.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`Multicall2`](Multicall2.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/Multicall2.ts:192](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L192)

▸ **removeAllListeners**(`eventName?`): [`Multicall2`](Multicall2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Multicall2`](Multicall2.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/Multicall2.ts:195](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L195)

___

### tryAggregate

▸ **tryAggregate**(`requireSuccess`, `calls`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requireSuccess` | `boolean` |
| `calls` | [`CallStruct`](../modules/Multicall2.md#callstruct)[] |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:288](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L288)

___

### tryBlockAndAggregate

▸ **tryBlockAndAggregate**(`requireSuccess`, `calls`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requireSuccess` | `boolean` |
| `calls` | [`CallStruct`](../modules/Multicall2.md#callstruct)[] |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/Multicall2.ts:294](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L294)
