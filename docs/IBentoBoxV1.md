---
description: 
---

# IBentoBoxV1.sol





## Methods

### balanceOf



```solidity title="Solidity"
function balanceOf(contract IERC20, address) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### batch



```solidity title="Solidity"
function batch(bytes[] calls, bool revertOnFail) external payable returns (bool[] successes, bytes[] results)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| calls | bytes[] | undefined |
| revertOnFail | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| successes | bool[] | undefined |
| results | bytes[] | undefined |

### claimOwnership



```solidity title="Solidity"
function claimOwnership() external nonpayable
```





### deploy



```solidity title="Solidity"
function deploy(address masterContract, bytes data, bool useCreate2) external payable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| masterContract | address | undefined |
| data | bytes | undefined |
| useCreate2 | bool | undefined |

### deposit



```solidity title="Solidity"
function deposit(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) external payable returns (uint256 amountOut, uint256 shareOut)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token_ | contract IERC20 | undefined |
| from | address | undefined |
| to | address | undefined |
| amount | uint256 | undefined |
| share | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amountOut | uint256 | undefined |
| shareOut | uint256 | undefined |

### harvest



```solidity title="Solidity"
function harvest(contract IERC20 token, bool balance, uint256 maxChangeAmount) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract IERC20 | undefined |
| balance | bool | undefined |
| maxChangeAmount | uint256 | undefined |

### masterContractApproved



```solidity title="Solidity"
function masterContractApproved(address, address) external view returns (bool)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### masterContractOf



```solidity title="Solidity"
function masterContractOf(address) external view returns (address)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### nonces



```solidity title="Solidity"
function nonces(address) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### owner



```solidity title="Solidity"
function owner() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pendingOwner



```solidity title="Solidity"
function pendingOwner() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pendingStrategy



```solidity title="Solidity"
function pendingStrategy(contract IERC20) external view returns (contract IStrategy)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IStrategy | undefined |

### permitToken



```solidity title="Solidity"
function permitToken(contract IERC20 token, address from, address to, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract IERC20 | undefined |
| from | address | undefined |
| to | address | undefined |
| amount | uint256 | undefined |
| deadline | uint256 | undefined |
| v | uint8 | undefined |
| r | bytes32 | undefined |
| s | bytes32 | undefined |

### registerProtocol



```solidity title="Solidity"
function registerProtocol() external nonpayable
```





### setMasterContractApproval



```solidity title="Solidity"
function setMasterContractApproval(address user, address masterContract, bool approved, uint8 v, bytes32 r, bytes32 s) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| user | address | undefined |
| masterContract | address | undefined |
| approved | bool | undefined |
| v | uint8 | undefined |
| r | bytes32 | undefined |
| s | bytes32 | undefined |

### setStrategy



```solidity title="Solidity"
function setStrategy(contract IERC20 token, contract IStrategy newStrategy) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract IERC20 | undefined |
| newStrategy | contract IStrategy | undefined |

### setStrategyTargetPercentage



```solidity title="Solidity"
function setStrategyTargetPercentage(contract IERC20 token, uint64 targetPercentage_) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract IERC20 | undefined |
| targetPercentage_ | uint64 | undefined |

### strategy



```solidity title="Solidity"
function strategy(contract IERC20) external view returns (contract IStrategy)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IStrategy | undefined |

### strategyData



```solidity title="Solidity"
function strategyData(contract IERC20) external view returns (uint64 strategyStartDate, uint64 targetPercentage, uint128 balance)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| strategyStartDate | uint64 | undefined |
| targetPercentage | uint64 | undefined |
| balance | uint128 | undefined |

### toAmount



```solidity title="Solidity"
function toAmount(contract IERC20 token, uint256 share, bool roundUp) external view returns (uint256 amount)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract IERC20 | undefined |
| share | uint256 | undefined |
| roundUp | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |

### toShare



```solidity title="Solidity"
function toShare(contract IERC20 token, uint256 amount, bool roundUp) external view returns (uint256 share)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract IERC20 | undefined |
| amount | uint256 | undefined |
| roundUp | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| share | uint256 | undefined |

### totals



```solidity title="Solidity"
function totals(contract IERC20) external view returns (struct Rebase totals_)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| totals_ | Rebase | undefined |

### transfer



```solidity title="Solidity"
function transfer(contract IERC20 token, address from, address to, uint256 share) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract IERC20 | undefined |
| from | address | undefined |
| to | address | undefined |
| share | uint256 | undefined |

### transferMultiple



```solidity title="Solidity"
function transferMultiple(contract IERC20 token, address from, address[] tos, uint256[] shares) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract IERC20 | undefined |
| from | address | undefined |
| tos | address[] | undefined |
| shares | uint256[] | undefined |

### transferOwnership



```solidity title="Solidity"
function transferOwnership(address newOwner, bool direct, bool renounce) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |
| direct | bool | undefined |
| renounce | bool | undefined |

### whitelistMasterContract



```solidity title="Solidity"
function whitelistMasterContract(address masterContract, bool approved) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| masterContract | address | undefined |
| approved | bool | undefined |

### whitelistedMasterContracts



```solidity title="Solidity"
function whitelistedMasterContracts(address) external view returns (bool)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### withdraw



```solidity title="Solidity"
function withdraw(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) external nonpayable returns (uint256 amountOut, uint256 shareOut)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token_ | contract IERC20 | undefined |
| from | address | undefined |
| to | address | undefined |
| amount | uint256 | undefined |
| share | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amountOut | uint256 | undefined |
| shareOut | uint256 | undefined |



## Events

### LogDeploy



```solidity title="Solidity"
event LogDeploy(address indexed masterContract, bytes data, address indexed cloneAddress)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| masterContract `indexed` | address | undefined |
| data  | bytes | undefined |
| cloneAddress `indexed` | address | undefined |

### LogDeposit



```solidity title="Solidity"
event LogDeposit(address indexed token, address indexed from, address indexed to, uint256 amount, uint256 share)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| amount  | uint256 | undefined |
| share  | uint256 | undefined |

### LogFlashLoan



```solidity title="Solidity"
event LogFlashLoan(address indexed borrower, address indexed token, uint256 amount, uint256 feeAmount, address indexed receiver)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| borrower `indexed` | address | undefined |
| token `indexed` | address | undefined |
| amount  | uint256 | undefined |
| feeAmount  | uint256 | undefined |
| receiver `indexed` | address | undefined |

### LogRegisterProtocol



```solidity title="Solidity"
event LogRegisterProtocol(address indexed protocol)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| protocol `indexed` | address | undefined |

### LogSetMasterContractApproval



```solidity title="Solidity"
event LogSetMasterContractApproval(address indexed masterContract, address indexed user, bool approved)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| masterContract `indexed` | address | undefined |
| user `indexed` | address | undefined |
| approved  | bool | undefined |

### LogStrategyDivest



```solidity title="Solidity"
event LogStrategyDivest(address indexed token, uint256 amount)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| amount  | uint256 | undefined |

### LogStrategyInvest



```solidity title="Solidity"
event LogStrategyInvest(address indexed token, uint256 amount)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| amount  | uint256 | undefined |

### LogStrategyLoss



```solidity title="Solidity"
event LogStrategyLoss(address indexed token, uint256 amount)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| amount  | uint256 | undefined |

### LogStrategyProfit



```solidity title="Solidity"
event LogStrategyProfit(address indexed token, uint256 amount)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| amount  | uint256 | undefined |

### LogStrategyQueued



```solidity title="Solidity"
event LogStrategyQueued(address indexed token, address indexed strategy)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| strategy `indexed` | address | undefined |

### LogStrategySet



```solidity title="Solidity"
event LogStrategySet(address indexed token, address indexed strategy)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| strategy `indexed` | address | undefined |

### LogStrategyTargetPercentage



```solidity title="Solidity"
event LogStrategyTargetPercentage(address indexed token, uint256 targetPercentage)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| targetPercentage  | uint256 | undefined |

### LogTransfer



```solidity title="Solidity"
event LogTransfer(address indexed token, address indexed from, address indexed to, uint256 share)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| share  | uint256 | undefined |

### LogWhiteListMasterContract



```solidity title="Solidity"
event LogWhiteListMasterContract(address indexed masterContract, bool approved)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| masterContract `indexed` | address | undefined |
| approved  | bool | undefined |

### LogWithdraw



```solidity title="Solidity"
event LogWithdraw(address indexed token, address indexed from, address indexed to, uint256 amount, uint256 share)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| amount  | uint256 | undefined |
| share  | uint256 | undefined |

### OwnershipTransferred



```solidity title="Solidity"
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



