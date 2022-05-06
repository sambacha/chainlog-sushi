---
description: 
---

# IUniswapV2Pair.sol





## Methods

### DOMAIN_SEPARATOR



```solidity title="Solidity"
function DOMAIN_SEPARATOR() external view returns (bytes32)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### MINIMUM_LIQUIDITY



```solidity title="Solidity"
function MINIMUM_LIQUIDITY() external pure returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### PERMIT_TYPEHASH



```solidity title="Solidity"
function PERMIT_TYPEHASH() external pure returns (bytes32)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

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
function approve(address spender, uint256 value) external nonpayable returns (bool)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| value | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### balanceOf



```solidity title="Solidity"
function balanceOf(address owner) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### burn



```solidity title="Solidity"
function burn(address to) external nonpayable returns (uint256 amount0, uint256 amount1)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amount0 | uint256 | undefined |
| amount1 | uint256 | undefined |

### decimals



```solidity title="Solidity"
function decimals() external pure returns (uint8)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### factory



```solidity title="Solidity"
function factory() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getReserves



```solidity title="Solidity"
function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| reserve0 | uint112 | undefined |
| reserve1 | uint112 | undefined |
| blockTimestampLast | uint32 | undefined |

### initialize



```solidity title="Solidity"
function initialize(address, address) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |

### kLast



```solidity title="Solidity"
function kLast() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mint



```solidity title="Solidity"
function mint(address to) external nonpayable returns (uint256 liquidity)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| liquidity | uint256 | undefined |

### name



```solidity title="Solidity"
function name() external pure returns (string)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### nonces



```solidity title="Solidity"
function nonces(address owner) external view returns (uint256)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### permit



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

### price0CumulativeLast



```solidity title="Solidity"
function price0CumulativeLast() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### price1CumulativeLast



```solidity title="Solidity"
function price1CumulativeLast() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### skim



```solidity title="Solidity"
function skim(address to) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |

### swap



```solidity title="Solidity"
function swap(uint256 amount0Out, uint256 amount1Out, address to, bytes data) external nonpayable
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| amount0Out | uint256 | undefined |
| amount1Out | uint256 | undefined |
| to | address | undefined |
| data | bytes | undefined |

### symbol



```solidity title="Solidity"
function symbol() external pure returns (string)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### sync



```solidity title="Solidity"
function sync() external nonpayable
```





### token0



```solidity title="Solidity"
function token0() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### token1



```solidity title="Solidity"
function token1() external view returns (address)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### totalSupply



```solidity title="Solidity"
function totalSupply() external view returns (uint256)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transfer



```solidity title="Solidity"
function transfer(address to, uint256 value) external nonpayable returns (bool)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| value | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom



```solidity title="Solidity"
function transferFrom(address from, address to, uint256 value) external nonpayable returns (bool)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| value | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



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

### Burn



```solidity title="Solidity"
event Burn(address indexed sender, uint256 amount0, uint256 amount1, address indexed to)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| sender `indexed` | address | undefined |
| amount0  | uint256 | undefined |
| amount1  | uint256 | undefined |
| to `indexed` | address | undefined |

### Mint



```solidity title="Solidity"
event Mint(address indexed sender, uint256 amount0, uint256 amount1)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| sender `indexed` | address | undefined |
| amount0  | uint256 | undefined |
| amount1  | uint256 | undefined |

### Swap



```solidity title="Solidity"
event Swap(address indexed sender, uint256 amount0In, uint256 amount1In, uint256 amount0Out, uint256 amount1Out, address indexed to)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| sender `indexed` | address | undefined |
| amount0In  | uint256 | undefined |
| amount1In  | uint256 | undefined |
| amount0Out  | uint256 | undefined |
| amount1Out  | uint256 | undefined |
| to `indexed` | address | undefined |

### Sync



```solidity title="Solidity"
event Sync(uint112 reserve0, uint112 reserve1)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| reserve0  | uint112 | undefined |
| reserve1  | uint112 | undefined |

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



