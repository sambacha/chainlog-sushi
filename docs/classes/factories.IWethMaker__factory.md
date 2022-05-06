[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / IWethMaker\_\_factory

# Class: IWethMaker\_\_factory

[factories](../modules/factories.md).IWethMaker__factory

## Table of contents

### Constructors

- [constructor](factories.IWethMaker__factory.md#constructor)

### Properties

- [abi](factories.IWethMaker__factory.md#abi)

### Methods

- [connect](factories.IWethMaker__factory.md#connect)
- [createInterface](factories.IWethMaker__factory.md#createinterface)

## Constructors

### constructor

• **new IWethMaker__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "user"; `type`: `string` = "address" }[] ; `name`: `string` = "SetTrusted"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `name`: `string` = "bridges"; `outputs`: { `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IWethMaker__factory.ts:115](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IWethMaker__factory.ts#L115)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IWethMaker`](../interfaces/IWethMaker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IWethMaker`](../interfaces/IWethMaker.md)

#### Defined in

[types/ethers-contracts/factories/IWethMaker__factory.ts:119](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IWethMaker__factory.ts#L119)

___

### createInterface

▸ `Static` **createInterface**(): `IWethMakerInterface`

#### Returns

`IWethMakerInterface`

#### Defined in

[types/ethers-contracts/factories/IWethMaker__factory.ts:116](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IWethMaker__factory.ts#L116)
