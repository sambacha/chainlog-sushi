---
description: Multicall2 - Aggregate results from multiple read-only function calls
---

# Multicall2.sol





## Methods

### aggregate



```solidity title="Solidity"
function aggregate(Multicall2.Call[] calls) external nonpayable returns (uint256 blockNumber, bytes[] returnData)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| calls | Multicall2.Call[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| blockNumber | uint256 | undefined |
| returnData | bytes[] | undefined |

### blockAndAggregate



```solidity title="Solidity"
function blockAndAggregate(Multicall2.Call[] calls) external nonpayable returns (uint256 blockNumber, bytes32 blockHash, struct Multicall2.Result[] returnData)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| calls | Multicall2.Call[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| blockNumber | uint256 | undefined |
| blockHash | bytes32 | undefined |
| returnData | Multicall2.Result[] | undefined |

### getBlockHash



```solidity title="Solidity"
function getBlockHash(uint256 blockNumber) external view returns (bytes32 blockHash)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| blockNumber | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| blockHash | bytes32 | undefined |

### getBlockNumber



```solidity title="Solidity"
function getBlockNumber() external view returns (uint256 blockNumber)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| blockNumber | uint256 | undefined |

### getCurrentBlockCoinbase



```solidity title="Solidity"
function getCurrentBlockCoinbase() external view returns (address coinbase)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| coinbase | address | undefined |

### getCurrentBlockDifficulty



```solidity title="Solidity"
function getCurrentBlockDifficulty() external view returns (uint256 difficulty)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| difficulty | uint256 | undefined |

### getCurrentBlockGasLimit



```solidity title="Solidity"
function getCurrentBlockGasLimit() external view returns (uint256 gaslimit)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| gaslimit | uint256 | undefined |

### getCurrentBlockTimestamp



```solidity title="Solidity"
function getCurrentBlockTimestamp() external view returns (uint256 timestamp)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| timestamp | uint256 | undefined |

### getEthBalance



```solidity title="Solidity"
function getEthBalance(address addr) external view returns (uint256 balance)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| addr | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| balance | uint256 | undefined |

### getLastBlockHash



```solidity title="Solidity"
function getLastBlockHash() external view returns (bytes32 blockHash)
```





#### Returns

| Name | Type | Description |
|---|---|---|
| blockHash | bytes32 | undefined |

### tryAggregate



```solidity title="Solidity"
function tryAggregate(bool requireSuccess, Multicall2.Call[] calls) external nonpayable returns (struct Multicall2.Result[] returnData)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| requireSuccess | bool | undefined |
| calls | Multicall2.Call[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| returnData | Multicall2.Result[] | undefined |

### tryBlockAndAggregate



```solidity title="Solidity"
function tryBlockAndAggregate(bool requireSuccess, Multicall2.Call[] calls) external nonpayable returns (uint256 blockNumber, bytes32 blockHash, struct Multicall2.Result[] returnData)
```




#### Parameters

| Name | Type | Description |
|---|---|---|
| requireSuccess | bool | undefined |
| calls | Multicall2.Call[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| blockNumber | uint256 | undefined |
| blockHash | bytes32 | undefined |
| returnData | Multicall2.Result[] | undefined |




