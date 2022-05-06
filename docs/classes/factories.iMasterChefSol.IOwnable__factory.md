[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [iMasterChefSol](../modules/factories.iMasterChefSol.md) / IOwnable\_\_factory

# Class: IOwnable\_\_factory

[factories](../modules/factories.md).[iMasterChefSol](../modules/factories.iMasterChefSol.md).IOwnable__factory

## Table of contents

### Constructors

- [constructor](factories.iMasterChefSol.IOwnable__factory.md#constructor)

### Properties

- [abi](factories.iMasterChefSol.IOwnable__factory.md#abi)

### Methods

- [connect](factories.iMasterChefSol.IOwnable__factory.md#connect)
- [createInterface](factories.iMasterChefSol.IOwnable__factory.md#createinterface)

## Constructors

### constructor

• **new IOwnable__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "owner"; `outputs`: { `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "newOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "transferOwnership"; `outputs`: `never`[] = []; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IMasterChef.sol/IOwnable__factory.ts:68](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IMasterChef.sol/IOwnable__factory.ts#L68)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IOwnable`](../interfaces/iMasterChefSol.IOwnable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IOwnable`](../interfaces/iMasterChefSol.IOwnable.md)

#### Defined in

[types/ethers-contracts/factories/IMasterChef.sol/IOwnable__factory.ts:72](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IMasterChef.sol/IOwnable__factory.ts#L72)

___

### createInterface

▸ `Static` **createInterface**(): `IOwnableInterface`

#### Returns

`IOwnableInterface`

#### Defined in

[types/ethers-contracts/factories/IMasterChef.sol/IOwnable__factory.ts:69](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IMasterChef.sol/IOwnable__factory.ts#L69)
