[sushi-lens](../README.md) / [Exports](../modules.md) / [iBentoBoxSol](../modules/iBentoBoxSol.md) / IBentoBoxV1

# Interface: IBentoBoxV1

[iBentoBoxSol](../modules/iBentoBoxSol.md).IBentoBoxV1

## Hierarchy

- `BaseContract`

  ↳ **`IBentoBoxV1`**

## Table of contents

### Properties

- [\_deployedPromise](iBentoBoxSol.IBentoBoxV1.md#_deployedpromise)
- [\_runningEvents](iBentoBoxSol.IBentoBoxV1.md#_runningevents)
- [\_wrappedEmits](iBentoBoxSol.IBentoBoxV1.md#_wrappedemits)
- [address](iBentoBoxSol.IBentoBoxV1.md#address)
- [callStatic](iBentoBoxSol.IBentoBoxV1.md#callstatic)
- [contractName](iBentoBoxSol.IBentoBoxV1.md#contractname)
- [deployTransaction](iBentoBoxSol.IBentoBoxV1.md#deploytransaction)
- [estimateGas](iBentoBoxSol.IBentoBoxV1.md#estimategas)
- [filters](iBentoBoxSol.IBentoBoxV1.md#filters)
- [functions](iBentoBoxSol.IBentoBoxV1.md#functions)
- [interface](iBentoBoxSol.IBentoBoxV1.md#interface)
- [off](iBentoBoxSol.IBentoBoxV1.md#off)
- [on](iBentoBoxSol.IBentoBoxV1.md#on)
- [once](iBentoBoxSol.IBentoBoxV1.md#once)
- [populateTransaction](iBentoBoxSol.IBentoBoxV1.md#populatetransaction)
- [provider](iBentoBoxSol.IBentoBoxV1.md#provider)
- [removeListener](iBentoBoxSol.IBentoBoxV1.md#removelistener)
- [resolvedAddress](iBentoBoxSol.IBentoBoxV1.md#resolvedaddress)
- [signer](iBentoBoxSol.IBentoBoxV1.md#signer)

### Methods

- [\_checkRunningEvents](iBentoBoxSol.IBentoBoxV1.md#_checkrunningevents)
- [\_deployed](iBentoBoxSol.IBentoBoxV1.md#_deployed)
- [\_wrapEvent](iBentoBoxSol.IBentoBoxV1.md#_wrapevent)
- [attach](iBentoBoxSol.IBentoBoxV1.md#attach)
- [balanceOf](iBentoBoxSol.IBentoBoxV1.md#balanceof)
- [batch](iBentoBoxSol.IBentoBoxV1.md#batch)
- [claimOwnership](iBentoBoxSol.IBentoBoxV1.md#claimownership)
- [connect](iBentoBoxSol.IBentoBoxV1.md#connect)
- [deploy](iBentoBoxSol.IBentoBoxV1.md#deploy)
- [deployed](iBentoBoxSol.IBentoBoxV1.md#deployed)
- [deposit](iBentoBoxSol.IBentoBoxV1.md#deposit)
- [emit](iBentoBoxSol.IBentoBoxV1.md#emit)
- [fallback](iBentoBoxSol.IBentoBoxV1.md#fallback)
- [harvest](iBentoBoxSol.IBentoBoxV1.md#harvest)
- [listenerCount](iBentoBoxSol.IBentoBoxV1.md#listenercount)
- [listeners](iBentoBoxSol.IBentoBoxV1.md#listeners)
- [masterContractApproved](iBentoBoxSol.IBentoBoxV1.md#mastercontractapproved)
- [masterContractOf](iBentoBoxSol.IBentoBoxV1.md#mastercontractof)
- [nonces](iBentoBoxSol.IBentoBoxV1.md#nonces)
- [owner](iBentoBoxSol.IBentoBoxV1.md#owner)
- [pendingOwner](iBentoBoxSol.IBentoBoxV1.md#pendingowner)
- [pendingStrategy](iBentoBoxSol.IBentoBoxV1.md#pendingstrategy)
- [permitToken](iBentoBoxSol.IBentoBoxV1.md#permittoken)
- [queryFilter](iBentoBoxSol.IBentoBoxV1.md#queryfilter)
- [registerProtocol](iBentoBoxSol.IBentoBoxV1.md#registerprotocol)
- [removeAllListeners](iBentoBoxSol.IBentoBoxV1.md#removealllisteners)
- [setMasterContractApproval](iBentoBoxSol.IBentoBoxV1.md#setmastercontractapproval)
- [setStrategy](iBentoBoxSol.IBentoBoxV1.md#setstrategy)
- [setStrategyTargetPercentage](iBentoBoxSol.IBentoBoxV1.md#setstrategytargetpercentage)
- [strategy](iBentoBoxSol.IBentoBoxV1.md#strategy)
- [strategyData](iBentoBoxSol.IBentoBoxV1.md#strategydata)
- [toAmount](iBentoBoxSol.IBentoBoxV1.md#toamount)
- [toShare](iBentoBoxSol.IBentoBoxV1.md#toshare)
- [totals](iBentoBoxSol.IBentoBoxV1.md#totals)
- [transfer](iBentoBoxSol.IBentoBoxV1.md#transfer)
- [transferMultiple](iBentoBoxSol.IBentoBoxV1.md#transfermultiple)
- [transferOwnership](iBentoBoxSol.IBentoBoxV1.md#transferownership)
- [whitelistMasterContract](iBentoBoxSol.IBentoBoxV1.md#whitelistmastercontract)
- [whitelistedMasterContracts](iBentoBoxSol.IBentoBoxV1.md#whitelistedmastercontracts)
- [withdraw](iBentoBoxSol.IBentoBoxV1.md#withdraw)

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
| `balanceOf` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `batch` | (`calls`: `BytesLike`[], `revertOnFail`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`[], `string`[]] & { `results`: `string`[] ; `successes`: `boolean`[]  }\> |
| `claimOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deploy` | (`masterContract`: `string`, `data`: `BytesLike`, `useCreate2`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit` | (`token_`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `share`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amountOut`: `BigNumber` ; `shareOut`: `BigNumber`  }\> |
| `harvest` | (`token`: `string`, `balance`: `boolean`, `maxChangeAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `masterContractApproved` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `masterContractOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `nonces` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `pendingOwner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `pendingStrategy` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `permitToken` | (`token`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerProtocol` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMasterContractApproval` | (`user`: `string`, `masterContract`: `string`, `approved`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStrategy` | (`token`: `string`, `newStrategy`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStrategyTargetPercentage` | (`token`: `string`, `targetPercentage_`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `strategy` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `strategyData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `balance`: `BigNumber` ; `strategyStartDate`: `BigNumber` ; `targetPercentage`: `BigNumber`  }\> |
| `toAmount` | (`token`: `string`, `share`: `BigNumberish`, `roundUp`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `toShare` | (`token`: `string`, `amount`: `BigNumberish`, `roundUp`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totals` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`RebaseStructOutput`\> |
| `transfer` | (`token`: `string`, `from`: `string`, `to`: `string`, `share`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferMultiple` | (`token`: `string`, `from`: `string`, `tos`: `string`[], `shares`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `direct`: `boolean`, `renounce`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `whitelistMasterContract` | (`masterContract`: `string`, `approved`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `whitelistedMasterContracts` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `withdraw` | (`token_`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `share`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`] & { `amountOut`: `BigNumber` ; `shareOut`: `BigNumber`  }\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:891](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L891)

___

### contractName

• **contractName**: ``"IBentoBoxV1"``

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:526](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L526)

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
| `balanceOf` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `batch` | (`calls`: `BytesLike`[], `revertOnFail`: `boolean`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deploy` | (`masterContract`: `string`, `data`: `BytesLike`, `useCreate2`: `boolean`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit` | (`token_`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `share`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `harvest` | (`token`: `string`, `balance`: `boolean`, `maxChangeAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `masterContractApproved` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `masterContractOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingOwner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingStrategy` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permitToken` | (`token`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerProtocol` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setMasterContractApproval` | (`user`: `string`, `masterContract`: `string`, `approved`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setStrategy` | (`token`: `string`, `newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setStrategyTargetPercentage` | (`token`: `string`, `targetPercentage_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `strategy` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `strategyData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `toAmount` | (`token`: `string`, `share`: `BigNumberish`, `roundUp`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `toShare` | (`token`: `string`, `amount`: `BigNumberish`, `roundUp`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totals` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`token`: `string`, `from`: `string`, `to`: `string`, `share`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferMultiple` | (`token`: `string`, `from`: `string`, `tos`: `string`[], `shares`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `direct`: `boolean`, `renounce`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `whitelistMasterContract` | (`masterContract`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `whitelistedMasterContracts` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdraw` | (`token_`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `share`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:1233](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L1233)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LogDeploy` | (`masterContract?`: ``null`` \| `string`, `data?`: ``null``, `cloneAddress?`: ``null`` \| `string`) => `LogDeployEventFilter` |
| `LogDeploy(address,bytes,address)` | (`masterContract?`: ``null`` \| `string`, `data?`: ``null``, `cloneAddress?`: ``null`` \| `string`) => `LogDeployEventFilter` |
| `LogDeposit` | (`token?`: ``null`` \| `string`, `from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `amount?`: ``null``, `share?`: ``null``) => `LogDepositEventFilter` |
| `LogDeposit(address,address,address,uint256,uint256)` | (`token?`: ``null`` \| `string`, `from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `amount?`: ``null``, `share?`: ``null``) => `LogDepositEventFilter` |
| `LogFlashLoan` | (`borrower?`: ``null`` \| `string`, `token?`: ``null`` \| `string`, `amount?`: ``null``, `feeAmount?`: ``null``, `receiver?`: ``null`` \| `string`) => `LogFlashLoanEventFilter` |
| `LogFlashLoan(address,address,uint256,uint256,address)` | (`borrower?`: ``null`` \| `string`, `token?`: ``null`` \| `string`, `amount?`: ``null``, `feeAmount?`: ``null``, `receiver?`: ``null`` \| `string`) => `LogFlashLoanEventFilter` |
| `LogRegisterProtocol` | (`protocol?`: ``null`` \| `string`) => `LogRegisterProtocolEventFilter` |
| `LogRegisterProtocol(address)` | (`protocol?`: ``null`` \| `string`) => `LogRegisterProtocolEventFilter` |
| `LogSetMasterContractApproval` | (`masterContract?`: ``null`` \| `string`, `user?`: ``null`` \| `string`, `approved?`: ``null``) => `LogSetMasterContractApprovalEventFilter` |
| `LogSetMasterContractApproval(address,address,bool)` | (`masterContract?`: ``null`` \| `string`, `user?`: ``null`` \| `string`, `approved?`: ``null``) => `LogSetMasterContractApprovalEventFilter` |
| `LogStrategyDivest` | (`token?`: ``null`` \| `string`, `amount?`: ``null``) => `LogStrategyDivestEventFilter` |
| `LogStrategyDivest(address,uint256)` | (`token?`: ``null`` \| `string`, `amount?`: ``null``) => `LogStrategyDivestEventFilter` |
| `LogStrategyInvest` | (`token?`: ``null`` \| `string`, `amount?`: ``null``) => `LogStrategyInvestEventFilter` |
| `LogStrategyInvest(address,uint256)` | (`token?`: ``null`` \| `string`, `amount?`: ``null``) => `LogStrategyInvestEventFilter` |
| `LogStrategyLoss` | (`token?`: ``null`` \| `string`, `amount?`: ``null``) => `LogStrategyLossEventFilter` |
| `LogStrategyLoss(address,uint256)` | (`token?`: ``null`` \| `string`, `amount?`: ``null``) => `LogStrategyLossEventFilter` |
| `LogStrategyProfit` | (`token?`: ``null`` \| `string`, `amount?`: ``null``) => `LogStrategyProfitEventFilter` |
| `LogStrategyProfit(address,uint256)` | (`token?`: ``null`` \| `string`, `amount?`: ``null``) => `LogStrategyProfitEventFilter` |
| `LogStrategyQueued` | (`token?`: ``null`` \| `string`, `strategy?`: ``null`` \| `string`) => `LogStrategyQueuedEventFilter` |
| `LogStrategyQueued(address,address)` | (`token?`: ``null`` \| `string`, `strategy?`: ``null`` \| `string`) => `LogStrategyQueuedEventFilter` |
| `LogStrategySet` | (`token?`: ``null`` \| `string`, `strategy?`: ``null`` \| `string`) => `LogStrategySetEventFilter` |
| `LogStrategySet(address,address)` | (`token?`: ``null`` \| `string`, `strategy?`: ``null`` \| `string`) => `LogStrategySetEventFilter` |
| `LogStrategyTargetPercentage` | (`token?`: ``null`` \| `string`, `targetPercentage?`: ``null``) => `LogStrategyTargetPercentageEventFilter` |
| `LogStrategyTargetPercentage(address,uint256)` | (`token?`: ``null`` \| `string`, `targetPercentage?`: ``null``) => `LogStrategyTargetPercentageEventFilter` |
| `LogTransfer` | (`token?`: ``null`` \| `string`, `from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `share?`: ``null``) => `LogTransferEventFilter` |
| `LogTransfer(address,address,address,uint256)` | (`token?`: ``null`` \| `string`, `from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `share?`: ``null``) => `LogTransferEventFilter` |
| `LogWhiteListMasterContract` | (`masterContract?`: ``null`` \| `string`, `approved?`: ``null``) => `LogWhiteListMasterContractEventFilter` |
| `LogWhiteListMasterContract(address,bool)` | (`masterContract?`: ``null`` \| `string`, `approved?`: ``null``) => `LogWhiteListMasterContractEventFilter` |
| `LogWithdraw` | (`token?`: ``null`` \| `string`, `from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `amount?`: ``null``, `share?`: ``null``) => `LogWithdrawEventFilter` |
| `LogWithdraw(address,address,address,uint256,uint256)` | (`token?`: ``null`` \| `string`, `from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `amount?`: ``null``, `share?`: ``null``) => `LogWithdrawEventFilter` |
| `OwnershipTransferred` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => `OwnershipTransferredEventFilter` |
| `OwnershipTransferred(address,address)` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => `OwnershipTransferredEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:1063](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L1063)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `batch` | (`calls`: `BytesLike`[], `revertOnFail`: `boolean`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deploy` | (`masterContract`: `string`, `data`: `BytesLike`, `useCreate2`: `boolean`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit` | (`token_`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `share`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `harvest` | (`token`: `string`, `balance`: `boolean`, `maxChangeAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `masterContractApproved` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `masterContractOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `nonces` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `pendingOwner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `pendingStrategy` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `permitToken` | (`token`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerProtocol` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setMasterContractApproval` | (`user`: `string`, `masterContract`: `string`, `approved`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setStrategy` | (`token`: `string`, `newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setStrategyTargetPercentage` | (`token`: `string`, `targetPercentage_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `strategy` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `strategyData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `balance`: `BigNumber` ; `strategyStartDate`: `BigNumber` ; `targetPercentage`: `BigNumber`  }\> |
| `toAmount` | (`token`: `string`, `share`: `BigNumberish`, `roundUp`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `toShare` | (`token`: `string`, `amount`: `BigNumberish`, `roundUp`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `share`: `BigNumber`  }\> |
| `totals` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`RebaseStructOutput`] & { `totals_`: `RebaseStructOutput`  }\> |
| `transfer` | (`token`: `string`, `from`: `string`, `to`: `string`, `share`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferMultiple` | (`token`: `string`, `from`: `string`, `tos`: `string`[], `shares`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `direct`: `boolean`, `renounce`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `whitelistMasterContract` | (`masterContract`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `whitelistedMasterContracts` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `withdraw` | (`token_`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `share`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:553](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L553)

___

### interface

• **interface**: `IBentoBoxV1Interface`

#### Overrides

BaseContract.interface

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:532](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L532)

___

### off

• **off**: `OnEvent`<[`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)\>

#### Overrides

BaseContract.off

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:548](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L548)

___

### on

• **on**: `OnEvent`<[`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)\>

#### Overrides

BaseContract.on

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:549](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L549)

___

### once

• **once**: `OnEvent`<[`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)\>

#### Overrides

BaseContract.once

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:550](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L550)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `batch` | (`calls`: `BytesLike`[], `revertOnFail`: `boolean`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deploy` | (`masterContract`: `string`, `data`: `BytesLike`, `useCreate2`: `boolean`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit` | (`token_`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `share`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `harvest` | (`token`: `string`, `balance`: `boolean`, `maxChangeAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `masterContractApproved` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `masterContractOf` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nonces` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pendingOwner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pendingStrategy` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `permitToken` | (`token`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerProtocol` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setMasterContractApproval` | (`user`: `string`, `masterContract`: `string`, `approved`: `boolean`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setStrategy` | (`token`: `string`, `newStrategy`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setStrategyTargetPercentage` | (`token`: `string`, `targetPercentage_`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `strategy` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `strategyData` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `toAmount` | (`token`: `string`, `share`: `BigNumberish`, `roundUp`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `toShare` | (`token`: `string`, `amount`: `BigNumberish`, `roundUp`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totals` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`token`: `string`, `from`: `string`, `to`: `string`, `share`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferMultiple` | (`token`: `string`, `from`: `string`, `tos`: `string`[], `shares`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `direct`: `boolean`, `renounce`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `whitelistMasterContract` | (`masterContract`: `string`, `approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `whitelistedMasterContracts` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`token_`: `string`, `from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `share`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:1397](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L1397)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:551](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L551)

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

▸ **attach**(`addressOrName`): [`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)

#### Overrides

BaseContract.attach

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:529](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L529)

___

### balanceOf

▸ **balanceOf**(`arg0`, `arg1`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:726](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L726)

___

### batch

▸ **batch**(`calls`, `revertOnFail`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `calls` | `BytesLike`[] |
| `revertOnFail` | `boolean` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:732](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L732)

___

### claimOwnership

▸ **claimOwnership**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:738](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L738)

___

### connect

▸ **connect**(`signerOrProvider`): [`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)

#### Overrides

BaseContract.connect

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:528](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L528)

___

### deploy

▸ **deploy**(`masterContract`, `data`, `useCreate2`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masterContract` | `string` |
| `data` | `BytesLike` |
| `useCreate2` | `boolean` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:742](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L742)

___

### deployed

▸ **deployed**(): `Promise`<[`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)\>

#### Returns

`Promise`<[`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:530](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L530)

___

### deposit

▸ **deposit**(`token_`, `from`, `to`, `amount`, `share`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token_` | `string` |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `share` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:749](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L749)

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

### harvest

▸ **harvest**(`token`, `balance`, `maxChangeAmount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `balance` | `boolean` |
| `maxChangeAmount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:758](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L758)

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

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:540](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L540)

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

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:543](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L543)

___

### masterContractApproved

▸ **masterContractApproved**(`arg0`, `arg1`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:765](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L765)

___

### masterContractOf

▸ **masterContractOf**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:771](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L771)

___

### nonces

▸ **nonces**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:773](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L773)

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

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:775](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L775)

___

### pendingOwner

▸ **pendingOwner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:777](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L777)

___

### pendingStrategy

▸ **pendingStrategy**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:779](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L779)

___

### permitToken

▸ **permitToken**(`token`, `from`, `to`, `amount`, `deadline`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `deadline` | `BigNumberish` |
| `v` | `BigNumberish` |
| `r` | `BytesLike` |
| `s` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:781](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L781)

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

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:534](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L534)

___

### registerProtocol

▸ **registerProtocol**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:793](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L793)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:544](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L544)

▸ **removeAllListeners**(`eventName?`): [`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IBentoBoxV1`](iBentoBoxSol.IBentoBoxV1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:547](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L547)

___

### setMasterContractApproval

▸ **setMasterContractApproval**(`user`, `masterContract`, `approved`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `masterContract` | `string` |
| `approved` | `boolean` |
| `v` | `BigNumberish` |
| `r` | `BytesLike` |
| `s` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:797](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L797)

___

### setStrategy

▸ **setStrategy**(`token`, `newStrategy`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `newStrategy` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:807](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L807)

___

### setStrategyTargetPercentage

▸ **setStrategyTargetPercentage**(`token`, `targetPercentage_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `targetPercentage_` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:813](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L813)

___

### strategy

▸ **strategy**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:819](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L819)

___

### strategyData

▸ **strategyData**(`arg0`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `balance`: `BigNumber` ; `strategyStartDate`: `BigNumber` ; `targetPercentage`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`] & { `balance`: `BigNumber` ; `strategyStartDate`: `BigNumber` ; `targetPercentage`: `BigNumber`  }\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:821](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L821)

___

### toAmount

▸ **toAmount**(`token`, `share`, `roundUp`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `share` | `BigNumberish` |
| `roundUp` | `boolean` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:832](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L832)

___

### toShare

▸ **toShare**(`token`, `amount`, `roundUp`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `amount` | `BigNumberish` |
| `roundUp` | `boolean` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:839](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L839)

___

### totals

▸ **totals**(`arg0`, `overrides?`): `Promise`<`RebaseStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`RebaseStructOutput`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:846](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L846)

___

### transfer

▸ **transfer**(`token`, `from`, `to`, `share`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `from` | `string` |
| `to` | `string` |
| `share` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:848](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L848)

___

### transferMultiple

▸ **transferMultiple**(`token`, `from`, `tos`, `shares`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `from` | `string` |
| `tos` | `string`[] |
| `shares` | `BigNumberish`[] |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:856](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L856)

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `direct`, `renounce`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `direct` | `boolean` |
| `renounce` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:864](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L864)

___

### whitelistMasterContract

▸ **whitelistMasterContract**(`masterContract`, `approved`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `masterContract` | `string` |
| `approved` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:871](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L871)

___

### whitelistedMasterContracts

▸ **whitelistedMasterContracts**(`arg0`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:877](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L877)

___

### withdraw

▸ **withdraw**(`token_`, `from`, `to`, `amount`, `share`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token_` | `string` |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `share` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts:882](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IBentoBox.sol/IBentoBoxV1.ts#L882)
