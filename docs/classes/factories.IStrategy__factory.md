[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / IStrategy\_\_factory

# Class: IStrategy\_\_factory

[factories](../modules/factories.md).IStrategy__factory

## Table of contents

### Constructors

- [constructor](factories.IStrategy__factory.md#constructor)

### Properties

- [abi](factories.IStrategy__factory.md#abi)

### Methods

- [connect](factories.IStrategy__factory.md#connect)
- [createInterface](factories.IStrategy__factory.md#createinterface)

## Constructors

### constructor

• **new IStrategy__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "balance"; `type`: `string` = "uint256" }[] ; `name`: `string` = "exit"; `outputs`: { `internalType`: `string` = "int256"; `name`: `string` = "amountAdded"; `type`: `string` = "int256" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IStrategy__factory.ts:88](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IStrategy__factory.ts#L88)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IStrategy`](../interfaces/IStrategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IStrategy`](../interfaces/IStrategy.md)

#### Defined in

[types/ethers-contracts/factories/IStrategy__factory.ts:92](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IStrategy__factory.ts#L92)

___

### createInterface

▸ `Static` **createInterface**(): `IStrategyInterface`

#### Returns

`IStrategyInterface`

#### Defined in

[types/ethers-contracts/factories/IStrategy__factory.ts:89](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IStrategy__factory.ts#L89)
