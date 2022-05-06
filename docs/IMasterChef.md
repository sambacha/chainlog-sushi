---
description: 
---

# IMasterChef.sol





## Methods

### BONUS_MULTIPLIER



```solidity title="Solidity"
function BONUS_MULTIPLIER() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### add



```solidity title="Solidity"
function add(uint256 _allocPoint, contract IERC20 _lpToken, bool _withUpdate) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _allocPoint | uint256 | undefined |
| _lpToken | contract IERC20 | undefined |
| _withUpdate | bool | undefined |

### bonusEndBlock



```solidity title="Solidity"
function bonusEndBlock() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### deposit



```solidity title="Solidity"
function deposit(uint256 _pid, uint256 _amount) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined |
| _amount | uint256 | undefined |

### dev



```solidity title="Solidity"
function dev(address _devaddr) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _devaddr | address | undefined |

### devaddr



```solidity title="Solidity"
function devaddr() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### emergencyWithdraw



```solidity title="Solidity"
function emergencyWithdraw(uint256 _pid) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined |

### getMultiplier



```solidity title="Solidity"
function getMultiplier(uint256 _from, uint256 _to) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | uint256 | undefined |
| _to | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### massUpdatePools



```solidity title="Solidity"
function massUpdatePools() external nonpayable
```





### migrate



```solidity title="Solidity"
function migrate(uint256 _pid) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined |

### migrator



```solidity title="Solidity"
function migrator() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### owner



```solidity title="Solidity"
function owner() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pendingSushi



```solidity title="Solidity"
function pendingSushi(uint256 _pid, address _user) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined |
| _user | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### poolInfo



```solidity title="Solidity"
function poolInfo(uint256 poolId) external view returns (struct IMasterChef.PoolInfo)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| poolId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IMasterChef.PoolInfo | undefined |

### poolLength



```solidity title="Solidity"
function poolLength() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### renounceOwnership



```solidity title="Solidity"
function renounceOwnership() external nonpayable
```





### set



```solidity title="Solidity"
function set(uint256 _pid, uint256 _allocPoint, bool _withUpdate) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined |
| _allocPoint | uint256 | undefined |
| _withUpdate | bool | undefined |

### setMigrator



```solidity title="Solidity"
function setMigrator(address _migrator) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _migrator | address | undefined |

### startBlock



```solidity title="Solidity"
function startBlock() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### sushi



```solidity title="Solidity"
function sushi() external view returns (contract IERC20)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

### sushiPerBlock



```solidity title="Solidity"
function sushiPerBlock() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### sushiPerSecond



```solidity title="Solidity"
function sushiPerSecond() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### totalAllocPoint



```solidity title="Solidity"
function totalAllocPoint() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferOwnership



```solidity title="Solidity"
function transferOwnership(address newOwner) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### updatePool



```solidity title="Solidity"
function updatePool(uint256 _pid) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined |

### userInfo



```solidity title="Solidity"
function userInfo(uint256 poolId, address user) external view returns (struct IMasterChef.UserInfo)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| poolId | uint256 | undefined |
| user | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IMasterChef.UserInfo | undefined |

### withdraw



```solidity title="Solidity"
function withdraw(uint256 _pid, uint256 _amount) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined |
| _amount | uint256 | undefined |



## Events

### Deposit



```solidity title="Solidity"
event Deposit(address indexed user, uint256 indexed pid, uint256 amount)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| pid `indexed` | uint256 | undefined |
| amount  | uint256 | undefined |

### EmergencyWithdraw



```solidity title="Solidity"
event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| pid `indexed` | uint256 | undefined |
| amount  | uint256 | undefined |

### OwnershipTransferred



```solidity title="Solidity"
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### Withdraw



```solidity title="Solidity"
event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| pid `indexed` | uint256 | undefined |
| amount  | uint256 | undefined |



