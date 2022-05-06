[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [iBentoBoxSol](../modules/factories.iBentoBoxSol.md) / IBentoBoxV1\_\_factory

# Class: IBentoBoxV1\_\_factory

[factories](../modules/factories.md).[iBentoBoxSol](../modules/factories.iBentoBoxSol.md).IBentoBoxV1__factory

## Table of contents

### Constructors

- [constructor](factories.iBentoBoxSol.IBentoBoxV1__factory.md#constructor)

### Properties

- [abi](factories.iBentoBoxSol.IBentoBoxV1__factory.md#abi)

### Methods

- [connect](factories.iBentoBoxSol.IBentoBoxV1__factory.md#connect)
- [createInterface](factories.iBentoBoxSol.IBentoBoxV1__factory.md#createinterface)

## Constructors

### constructor

• **new IBentoBoxV1__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "masterContract"; `type`: `string` = "address" }[] ; `name`: `string` = "LogDeploy"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "contract IERC20"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "contract IERC20"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `name`: `string` = "totals"; `outputs`: { `components`: { `internalType`: `string` = "uint128"; `name`: `string` = "elastic"; `type`: `string` = "uint128" }[] ; `internalType`: `string` = "struct Rebase"; `name`: `string` = "totals\_"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IBentoBox.sol/IBentoBoxV1__factory.ts:1075](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IBentoBox.sol/IBentoBoxV1__factory.ts#L1075)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IBentoBoxV1`](../interfaces/iBentoBoxSol.IBentoBoxV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IBentoBoxV1`](../interfaces/iBentoBoxSol.IBentoBoxV1.md)

#### Defined in

[types/ethers-contracts/factories/IBentoBox.sol/IBentoBoxV1__factory.ts:1079](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IBentoBox.sol/IBentoBoxV1__factory.ts#L1079)

___

### createInterface

▸ `Static` **createInterface**(): `IBentoBoxV1Interface`

#### Returns

`IBentoBoxV1Interface`

#### Defined in

[types/ethers-contracts/factories/IBentoBox.sol/IBentoBoxV1__factory.ts:1076](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IBentoBox.sol/IBentoBoxV1__factory.ts#L1076)
