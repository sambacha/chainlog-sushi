[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / IUniswapV2Factory\_\_factory

# Class: IUniswapV2Factory\_\_factory

[factories](../modules/factories.md).IUniswapV2Factory__factory

## Table of contents

### Constructors

- [constructor](factories.IUniswapV2Factory__factory.md#constructor)

### Properties

- [abi](factories.IUniswapV2Factory__factory.md#abi)

### Methods

- [connect](factories.IUniswapV2Factory__factory.md#connect)
- [createInterface](factories.IUniswapV2Factory__factory.md#createinterface)

## Constructors

### constructor

• **new IUniswapV2Factory__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "token0"; `type`: `string` = "address" }[] ; `name`: `string` = "PairCreated"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `name`: `string` = "allPairs"; `outputs`: { `internalType`: `string` = "address"; `name`: `string` = "pair"; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IUniswapV2Factory__factory.ts:205](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IUniswapV2Factory__factory.ts#L205)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IUniswapV2Factory`](../interfaces/IUniswapV2Factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IUniswapV2Factory`](../interfaces/IUniswapV2Factory.md)

#### Defined in

[types/ethers-contracts/factories/IUniswapV2Factory__factory.ts:209](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IUniswapV2Factory__factory.ts#L209)

___

### createInterface

▸ `Static` **createInterface**(): `IUniswapV2FactoryInterface`

#### Returns

`IUniswapV2FactoryInterface`

#### Defined in

[types/ethers-contracts/factories/IUniswapV2Factory__factory.ts:206](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IUniswapV2Factory__factory.ts#L206)
