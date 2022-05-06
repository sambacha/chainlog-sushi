[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / IUniswapV2Router01\_\_factory

# Class: IUniswapV2Router01\_\_factory

[factories](../modules/factories.md).IUniswapV2Router01__factory

## Table of contents

### Constructors

- [constructor](factories.IUniswapV2Router01__factory.md#constructor)

### Properties

- [abi](factories.IUniswapV2Router01__factory.md#abi)

### Methods

- [connect](factories.IUniswapV2Router01__factory.md#connect)
- [createInterface](factories.IUniswapV2Router01__factory.md#createinterface)

## Constructors

### constructor

• **new IUniswapV2Router01__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "tokenA"; `type`: `string` = "address" }[] ; `name`: `string` = "addLiquidity"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "amountA"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IUniswapV2Router01__factory.ts:765](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IUniswapV2Router01__factory.ts#L765)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IUniswapV2Router01`](../interfaces/IUniswapV2Router01.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IUniswapV2Router01`](../interfaces/IUniswapV2Router01.md)

#### Defined in

[types/ethers-contracts/factories/IUniswapV2Router01__factory.ts:769](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IUniswapV2Router01__factory.ts#L769)

___

### createInterface

▸ `Static` **createInterface**(): `IUniswapV2Router01Interface`

#### Returns

`IUniswapV2Router01Interface`

#### Defined in

[types/ethers-contracts/factories/IUniswapV2Router01__factory.ts:766](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IUniswapV2Router01__factory.ts#L766)
