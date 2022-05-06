[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / IGnosisSafe\_\_factory

# Class: IGnosisSafe\_\_factory

[factories](../modules/factories.md).IGnosisSafe__factory

## Table of contents

### Constructors

- [constructor](factories.IGnosisSafe__factory.md#constructor)

### Properties

- [abi](factories.IGnosisSafe__factory.md#abi)

### Methods

- [connect](factories.IGnosisSafe__factory.md#connect)
- [createInterface](factories.IGnosisSafe__factory.md#createinterface)

## Constructors

### constructor

• **new IGnosisSafe__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: `never`[] = []; `name`: `string` = "getOwners"; `outputs`: { `internalType`: `string` = "address[]"; `name`: `string` = ""; `type`: `string` = "address[]" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IGnosisSafe__factory.ts:39](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IGnosisSafe__factory.ts#L39)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IGnosisSafe`](../interfaces/IGnosisSafe.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IGnosisSafe`](../interfaces/IGnosisSafe.md)

#### Defined in

[types/ethers-contracts/factories/IGnosisSafe__factory.ts:43](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IGnosisSafe__factory.ts#L43)

___

### createInterface

▸ `Static` **createInterface**(): `IGnosisSafeInterface`

#### Returns

`IGnosisSafeInterface`

#### Defined in

[types/ethers-contracts/factories/IGnosisSafe__factory.ts:40](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IGnosisSafe__factory.ts#L40)
