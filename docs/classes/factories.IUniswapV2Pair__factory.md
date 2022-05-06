[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / IUniswapV2Pair\_\_factory

# Class: IUniswapV2Pair\_\_factory

[factories](../modules/factories.md).IUniswapV2Pair__factory

## Table of contents

### Constructors

- [constructor](factories.IUniswapV2Pair__factory.md#constructor)

### Properties

- [abi](factories.IUniswapV2Pair__factory.md#abi)

### Methods

- [connect](factories.IUniswapV2Pair__factory.md#connect)
- [createInterface](factories.IUniswapV2Pair__factory.md#createinterface)

## Constructors

### constructor

• **new IUniswapV2Pair__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "allowance"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IUniswapV2Pair__factory.ts:667](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IUniswapV2Pair__factory.ts#L667)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IUniswapV2Pair`](../interfaces/IUniswapV2Pair.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IUniswapV2Pair`](../interfaces/IUniswapV2Pair.md)

#### Defined in

[types/ethers-contracts/factories/IUniswapV2Pair__factory.ts:671](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IUniswapV2Pair__factory.ts#L671)

___

### createInterface

▸ `Static` **createInterface**(): `IUniswapV2PairInterface`

#### Returns

`IUniswapV2PairInterface`

#### Defined in

[types/ethers-contracts/factories/IUniswapV2Pair__factory.ts:668](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IUniswapV2Pair__factory.ts#L668)
