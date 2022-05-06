[sushi-lens](../README.md) / [Exports](../modules.md) / [iMasterChefSol](../modules/iMasterChefSol.md) / IMasterChef

# Interface: IMasterChef

[iMasterChefSol](../modules/iMasterChefSol.md).IMasterChef

## Hierarchy

- `BaseContract`

  ↳ **`IMasterChef`**

## Table of contents

### Properties

- [\_deployedPromise](iMasterChefSol.IMasterChef-1.md#_deployedpromise)
- [\_runningEvents](iMasterChefSol.IMasterChef-1.md#_runningevents)
- [\_wrappedEmits](iMasterChefSol.IMasterChef-1.md#_wrappedemits)
- [address](iMasterChefSol.IMasterChef-1.md#address)
- [callStatic](iMasterChefSol.IMasterChef-1.md#callstatic)
- [contractName](iMasterChefSol.IMasterChef-1.md#contractname)
- [deployTransaction](iMasterChefSol.IMasterChef-1.md#deploytransaction)
- [estimateGas](iMasterChefSol.IMasterChef-1.md#estimategas)
- [filters](iMasterChefSol.IMasterChef-1.md#filters)
- [functions](iMasterChefSol.IMasterChef-1.md#functions)
- [interface](iMasterChefSol.IMasterChef-1.md#interface)
- [off](iMasterChefSol.IMasterChef-1.md#off)
- [on](iMasterChefSol.IMasterChef-1.md#on)
- [once](iMasterChefSol.IMasterChef-1.md#once)
- [populateTransaction](iMasterChefSol.IMasterChef-1.md#populatetransaction)
- [provider](iMasterChefSol.IMasterChef-1.md#provider)
- [removeListener](iMasterChefSol.IMasterChef-1.md#removelistener)
- [resolvedAddress](iMasterChefSol.IMasterChef-1.md#resolvedaddress)
- [signer](iMasterChefSol.IMasterChef-1.md#signer)

### Methods

- [BONUS\_MULTIPLIER](iMasterChefSol.IMasterChef-1.md#bonus_multiplier)
- [\_checkRunningEvents](iMasterChefSol.IMasterChef-1.md#_checkrunningevents)
- [\_deployed](iMasterChefSol.IMasterChef-1.md#_deployed)
- [\_wrapEvent](iMasterChefSol.IMasterChef-1.md#_wrapevent)
- [add](iMasterChefSol.IMasterChef-1.md#add)
- [attach](iMasterChefSol.IMasterChef-1.md#attach)
- [bonusEndBlock](iMasterChefSol.IMasterChef-1.md#bonusendblock)
- [connect](iMasterChefSol.IMasterChef-1.md#connect)
- [deployed](iMasterChefSol.IMasterChef-1.md#deployed)
- [deposit](iMasterChefSol.IMasterChef-1.md#deposit)
- [dev](iMasterChefSol.IMasterChef-1.md#dev)
- [devaddr](iMasterChefSol.IMasterChef-1.md#devaddr)
- [emergencyWithdraw](iMasterChefSol.IMasterChef-1.md#emergencywithdraw)
- [emit](iMasterChefSol.IMasterChef-1.md#emit)
- [fallback](iMasterChefSol.IMasterChef-1.md#fallback)
- [getMultiplier](iMasterChefSol.IMasterChef-1.md#getmultiplier)
- [listenerCount](iMasterChefSol.IMasterChef-1.md#listenercount)
- [listeners](iMasterChefSol.IMasterChef-1.md#listeners)
- [massUpdatePools](iMasterChefSol.IMasterChef-1.md#massupdatepools)
- [migrate](iMasterChefSol.IMasterChef-1.md#migrate)
- [migrator](iMasterChefSol.IMasterChef-1.md#migrator)
- [owner](iMasterChefSol.IMasterChef-1.md#owner)
- [pendingSushi](iMasterChefSol.IMasterChef-1.md#pendingsushi)
- [poolInfo](iMasterChefSol.IMasterChef-1.md#poolinfo)
- [poolLength](iMasterChefSol.IMasterChef-1.md#poollength)
- [queryFilter](iMasterChefSol.IMasterChef-1.md#queryfilter)
- [removeAllListeners](iMasterChefSol.IMasterChef-1.md#removealllisteners)
- [renounceOwnership](iMasterChefSol.IMasterChef-1.md#renounceownership)
- [set](iMasterChefSol.IMasterChef-1.md#set)
- [setMigrator](iMasterChefSol.IMasterChef-1.md#setmigrator)
- [startBlock](iMasterChefSol.IMasterChef-1.md#startblock)
- [sushi](iMasterChefSol.IMasterChef-1.md#sushi)
- [sushiPerBlock](iMasterChefSol.IMasterChef-1.md#sushiperblock)
- [sushiPerSecond](iMasterChefSol.IMasterChef-1.md#sushipersecond)
- [totalAllocPoint](iMasterChefSol.IMasterChef-1.md#totalallocpoint)
- [transferOwnership](iMasterChefSol.IMasterChef-1.md#transferownership)
- [updatePool](iMasterChefSol.IMasterChef-1.md#updatepool)
- [userInfo](iMasterChefSol.IMasterChef-1.md#userinfo)
- [withdraw](iMasterChefSol.IMasterChef-1.md#withdraw)

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
| `BONUS_MULTIPLIER` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `add` | (`_allocPoint`: `BigNumberish`, `_lpToken`: `string`, `_withUpdate`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `bonusEndBlock` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deposit` | (`_pid`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `dev` | (`_devaddr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `devaddr` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `emergencyWithdraw` | (`_pid`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getMultiplier` | (`_from`: `BigNumberish`, `_to`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `massUpdatePools` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `migrate` | (`_pid`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `migrator` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `pendingSushi` | (`_pid`: `BigNumberish`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolInfo` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`PoolInfoStructOutput`](../modules/iMasterChefSol.IMasterChef.md#poolinfostructoutput)\> |
| `poolLength` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `set` | (`_pid`: `BigNumberish`, `_allocPoint`: `BigNumberish`, `_withUpdate`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMigrator` | (`_migrator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startBlock` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `sushi` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `sushiPerBlock` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `sushiPerSecond` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalAllocPoint` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePool` | (`_pid`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `userInfo` | (`poolId`: `BigNumberish`, `user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`UserInfoStructOutput`](../modules/iMasterChefSol.IMasterChef.md#userinfostructoutput)\> |
| `withdraw` | (`_pid`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:589](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L589)

___

### contractName

• **contractName**: ``"IMasterChef"``

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:342](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L342)

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
| `BONUS_MULTIPLIER` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `add` | (`_allocPoint`: `BigNumberish`, `_lpToken`: `string`, `_withUpdate`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `bonusEndBlock` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deposit` | (`_pid`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `dev` | (`_devaddr`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `devaddr` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `emergencyWithdraw` | (`_pid`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getMultiplier` | (`_from`: `BigNumberish`, `_to`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `massUpdatePools` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `migrate` | (`_pid`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `migrator` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingSushi` | (`_pid`: `BigNumberish`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolInfo` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `poolLength` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `set` | (`_pid`: `BigNumberish`, `_allocPoint`: `BigNumberish`, `_withUpdate`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setMigrator` | (`_migrator`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `startBlock` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `sushi` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `sushiPerBlock` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `sushiPerSecond` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalAllocPoint` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updatePool` | (`_pid`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `userInfo` | (`poolId`: `BigNumberish`, `user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdraw` | (`_pid`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:728](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L728)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Deposit` | (`user?`: ``null`` \| `string`, `pid?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => `DepositEventFilter` |
| `Deposit(address,uint256,uint256)` | (`user?`: ``null`` \| `string`, `pid?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => `DepositEventFilter` |
| `EmergencyWithdraw` | (`user?`: ``null`` \| `string`, `pid?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => `EmergencyWithdrawEventFilter` |
| `EmergencyWithdraw(address,uint256,uint256)` | (`user?`: ``null`` \| `string`, `pid?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => `EmergencyWithdrawEventFilter` |
| `OwnershipTransferred` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => `OwnershipTransferredEventFilter` |
| `OwnershipTransferred(address,address)` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => `OwnershipTransferredEventFilter` |
| `Withdraw` | (`user?`: ``null`` \| `string`, `pid?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => `WithdrawEventFilter` |
| `Withdraw(address,uint256,uint256)` | (`user?`: ``null`` \| `string`, `pid?`: ``null`` \| `BigNumberish`, `amount?`: ``null``) => `WithdrawEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:684](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L684)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BONUS_MULTIPLIER` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `add` | (`_allocPoint`: `BigNumberish`, `_lpToken`: `string`, `_withUpdate`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `bonusEndBlock` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `deposit` | (`_pid`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `dev` | (`_devaddr`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `devaddr` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `emergencyWithdraw` | (`_pid`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getMultiplier` | (`_from`: `BigNumberish`, `_to`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `massUpdatePools` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `migrate` | (`_pid`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `migrator` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `pendingSushi` | (`_pid`: `BigNumberish`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `poolInfo` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[[`PoolInfoStructOutput`](../modules/iMasterChefSol.IMasterChef.md#poolinfostructoutput)]\> |
| `poolLength` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `set` | (`_pid`: `BigNumberish`, `_allocPoint`: `BigNumberish`, `_withUpdate`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setMigrator` | (`_migrator`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `startBlock` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `sushi` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `sushiPerBlock` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `sushiPerSecond` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalAllocPoint` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePool` | (`_pid`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `userInfo` | (`poolId`: `BigNumberish`, `user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[[`UserInfoStructOutput`](../modules/iMasterChefSol.IMasterChef.md#userinfostructoutput)]\> |
| `withdraw` | (`_pid`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:369](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L369)

___

### interface

• **interface**: `IMasterChefInterface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:348](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L348)

___

### off

• **off**: `OnEvent`<[`IMasterChef`](iMasterChefSol.IMasterChef-1.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:364](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L364)

___

### on

• **on**: `OnEvent`<[`IMasterChef`](iMasterChefSol.IMasterChef-1.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:365](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L365)

___

### once

• **once**: `OnEvent`<[`IMasterChef`](iMasterChefSol.IMasterChef-1.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:366](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L366)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BONUS_MULTIPLIER` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `add` | (`_allocPoint`: `BigNumberish`, `_lpToken`: `string`, `_withUpdate`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `bonusEndBlock` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deposit` | (`_pid`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `dev` | (`_devaddr`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `devaddr` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `emergencyWithdraw` | (`_pid`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getMultiplier` | (`_from`: `BigNumberish`, `_to`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `massUpdatePools` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `migrate` | (`_pid`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `migrator` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pendingSushi` | (`_pid`: `BigNumberish`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolInfo` | (`poolId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `poolLength` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `set` | (`_pid`: `BigNumberish`, `_allocPoint`: `BigNumberish`, `_withUpdate`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setMigrator` | (`_migrator`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `startBlock` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `sushi` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `sushiPerBlock` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `sushiPerSecond` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalAllocPoint` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePool` | (`_pid`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `userInfo` | (`poolId`: `BigNumberish`, `user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`_pid`: `BigNumberish`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:839](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L839)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IMasterChef`](iMasterChefSol.IMasterChef-1.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:367](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L367)

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

### BONUS\_MULTIPLIER

▸ **BONUS_MULTIPLIER**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:480](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L480)

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

### add

▸ **add**(`_allocPoint`, `_lpToken`, `_withUpdate`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_allocPoint` | `BigNumberish` |
| `_lpToken` | `string` |
| `_withUpdate` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:482](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L482)

___

### attach

▸ **attach**(`addressOrName`): [`IMasterChef`](iMasterChefSol.IMasterChef-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IMasterChef`](iMasterChefSol.IMasterChef-1.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:345](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L345)

___

### bonusEndBlock

▸ **bonusEndBlock**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:489](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L489)

___

### connect

▸ **connect**(`signerOrProvider`): [`IMasterChef`](iMasterChefSol.IMasterChef-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IMasterChef`](iMasterChefSol.IMasterChef-1.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:344](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L344)

___

### deployed

▸ **deployed**(): `Promise`<[`IMasterChef`](iMasterChefSol.IMasterChef-1.md)\>

#### Returns

`Promise`<[`IMasterChef`](iMasterChefSol.IMasterChef-1.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:346](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L346)

___

### deposit

▸ **deposit**(`_pid`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pid` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:491](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L491)

___

### dev

▸ **dev**(`_devaddr`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_devaddr` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:497](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L497)

___

### devaddr

▸ **devaddr**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:502](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L502)

___

### emergencyWithdraw

▸ **emergencyWithdraw**(`_pid`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pid` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:504](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L504)

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

### getMultiplier

▸ **getMultiplier**(`_from`, `_to`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_from` | `BigNumberish` |
| `_to` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:509](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L509)

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

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:356](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L356)

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

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:359](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L359)

___

### massUpdatePools

▸ **massUpdatePools**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:515](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L515)

___

### migrate

▸ **migrate**(`_pid`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pid` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:519](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L519)

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

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:524](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L524)

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

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:526](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L526)

___

### pendingSushi

▸ **pendingSushi**(`_pid`, `_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pid` | `BigNumberish` |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:528](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L528)

___

### poolInfo

▸ **poolInfo**(`poolId`, `overrides?`): `Promise`<[`PoolInfoStructOutput`](../modules/iMasterChefSol.IMasterChef.md#poolinfostructoutput)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`PoolInfoStructOutput`](../modules/iMasterChefSol.IMasterChef.md#poolinfostructoutput)\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:534](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L534)

___

### poolLength

▸ **poolLength**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:539](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L539)

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

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:350](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L350)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IMasterChef`](iMasterChefSol.IMasterChef-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IMasterChef`](iMasterChefSol.IMasterChef-1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:360](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L360)

▸ **removeAllListeners**(`eventName?`): [`IMasterChef`](iMasterChefSol.IMasterChef-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IMasterChef`](iMasterChefSol.IMasterChef-1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:363](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L363)

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

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:541](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L541)

___

### set

▸ **set**(`_pid`, `_allocPoint`, `_withUpdate`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pid` | `BigNumberish` |
| `_allocPoint` | `BigNumberish` |
| `_withUpdate` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:545](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L545)

___

### setMigrator

▸ **setMigrator**(`_migrator`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_migrator` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:552](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L552)

___

### startBlock

▸ **startBlock**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:557](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L557)

___

### sushi

▸ **sushi**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:559](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L559)

___

### sushiPerBlock

▸ **sushiPerBlock**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:561](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L561)

___

### sushiPerSecond

▸ **sushiPerSecond**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:563](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L563)

___

### totalAllocPoint

▸ **totalAllocPoint**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:565](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L565)

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

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:567](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L567)

___

### updatePool

▸ **updatePool**(`_pid`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pid` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:572](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L572)

___

### userInfo

▸ **userInfo**(`poolId`, `user`, `overrides?`): `Promise`<[`UserInfoStructOutput`](../modules/iMasterChefSol.IMasterChef.md#userinfostructoutput)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolId` | `BigNumberish` |
| `user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`UserInfoStructOutput`](../modules/iMasterChefSol.IMasterChef.md#userinfostructoutput)\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:577](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L577)

___

### withdraw

▸ **withdraw**(`_pid`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pid` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:583](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L583)
