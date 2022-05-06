---
description: 
---

# IWethMaker.sol





## Methods

### bridges



```solidity title="Solidity"
function bridges(address) external view returns (address)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### burnPairs



```solidity title="Solidity"
function burnPairs(address[] lpTokens, uint256[] amounts, uint256[] minimumOut0, uint256[] minimumOut1) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| lpTokens | address[] | undefined |
| amounts | uint256[] | undefined |
| minimumOut0 | uint256[] | undefined |
| minimumOut1 | uint256[] | undefined |

### owner



```solidity title="Solidity"
function owner() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### withdraw



```solidity title="Solidity"
function withdraw(address token, address to, uint256 _value) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | undefined |
| to | address | undefined |
| _value | uint256 | undefined |



## Events

### SetTrusted



```solidity title="Solidity"
event SetTrusted(address indexed user, bool isTrusted)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| isTrusted  | bool | undefined |



