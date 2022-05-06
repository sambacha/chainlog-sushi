[sushi-lens](../README.md) / [Exports](../modules.md) / Multicall2

# Namespace: Multicall2

## Table of contents

### Type aliases

- [CallStruct](Multicall2.md#callstruct)
- [CallStructOutput](Multicall2.md#callstructoutput)
- [ResultStruct](Multicall2.md#resultstruct)
- [ResultStructOutput](Multicall2.md#resultstructoutput)

## Type aliases

### CallStruct

Ƭ **CallStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callData` | `BytesLike` |
| `target` | `string` |

#### Defined in

[types/ethers-contracts/Multicall2.ts:26](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L26)

___

### CallStructOutput

Ƭ **CallStructOutput**: [`string`, `string`] & { `callData`: `string` ; `target`: `string`  }

#### Defined in

[types/ethers-contracts/Multicall2.ts:28](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L28)

___

### ResultStruct

Ƭ **ResultStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `returnData` | `BytesLike` |
| `success` | `boolean` |

#### Defined in

[types/ethers-contracts/Multicall2.ts:33](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L33)

___

### ResultStructOutput

Ƭ **ResultStructOutput**: [`boolean`, `string`] & { `returnData`: `string` ; `success`: `boolean`  }

#### Defined in

[types/ethers-contracts/Multicall2.ts:35](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/Multicall2.ts#L35)
