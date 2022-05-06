[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / IERC20\_\_factory

# Class: IERC20\_\_factory

[factories](../modules/factories.md).IERC20__factory

## Table of contents

### Constructors

- [constructor](factories.IERC20__factory.md#constructor)

### Properties

- [abi](factories.IERC20__factory.md#abi)

### Methods

- [connect](factories.IERC20__factory.md#connect)
- [createInterface](factories.IERC20__factory.md#createinterface)

## Constructors

### constructor

• **new IERC20__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "allowance"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IERC20__factory.ts:225](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IERC20__factory.ts#L225)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC20`](../interfaces/IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC20`](../interfaces/IERC20.md)

#### Defined in

[types/ethers-contracts/factories/IERC20__factory.ts:229](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IERC20__factory.ts#L229)

___

### createInterface

▸ `Static` **createInterface**(): `IERC20Interface`

#### Returns

`IERC20Interface`

#### Defined in

[types/ethers-contracts/factories/IERC20__factory.ts:226](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IERC20__factory.ts#L226)
