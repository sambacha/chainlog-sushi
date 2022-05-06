---
description: 
---

# IERC20.sol





## Methods

### allowance



```solidity title="Solidity"
function allowance(address owner, address spender) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| spender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve



```solidity title="Solidity"
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### balanceOf



```solidity title="Solidity"
function balanceOf(address account) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### decimals



```solidity title="Solidity"
function decimals() external view returns (uint8)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### name



```solidity title="Solidity"
function name() external view returns (string)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### permit

EIP 2612

```solidity title="Solidity"
function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| spender | address | undefined |
| value | uint256 | undefined |
| deadline | uint256 | undefined |
| v | uint8 | undefined |
| r | bytes32 | undefined |
| s | bytes32 | undefined |

### symbol



```solidity title="Solidity"
function symbol() external view returns (string)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalSupply



```solidity title="Solidity"
function totalSupply() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |



## Events

### Approval



```solidity title="Solidity"
event Approval(address indexed owner, address indexed spender, uint256 value)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| value  | uint256 | undefined |

### Transfer



```solidity title="Solidity"
event Transfer(address indexed from, address indexed to, uint256 value)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| value  | uint256 | undefined |



