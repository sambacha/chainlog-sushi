---
description: 
---

# IOwnable.sol





## Methods

### owner



```solidity title="Solidity"
function owner() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership



```solidity title="Solidity"
function renounceOwnership() external nonpayable
```





### transferOwnership



```solidity title="Solidity"
function transferOwnership(address newOwner) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



## Events

### OwnershipTransferred



```solidity title="Solidity"
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



