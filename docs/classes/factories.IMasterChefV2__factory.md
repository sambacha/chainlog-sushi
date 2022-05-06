[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / IMasterChefV2\_\_factory

# Class: IMasterChefV2\_\_factory

[factories](../modules/factories.md).IMasterChefV2__factory

## Table of contents

### Constructors

- [constructor](factories.IMasterChefV2__factory.md#constructor)

### Properties

- [abi](factories.IMasterChefV2__factory.md#abi)

### Methods

- [connect](factories.IMasterChefV2__factory.md#connect)
- [createInterface](factories.IMasterChefV2__factory.md#createinterface)

## Constructors

### constructor

• **new IMasterChefV2__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "poolId"; `type`: `string` = "uint256" }[] ; `name`: `string` = "lpToken"; `outputs`: { `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "poolId"; `type`: `string` = "uint256" }[] ; `name`: `string` = "poolInfo"; `outputs`: { `components`: { `internalType`: `string` = "uint128"; `name`: `string` = "accSushiPerShare"; `type`: `string` = "uint128" }[] ; `internalType`: `string` = "struct IMasterChefV2.PoolInfo"; `name`: `string` = ""; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IMasterChefV2__factory.ts:68](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IMasterChefV2__factory.ts#L68)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IMasterChefV2`](../interfaces/IMasterChefV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IMasterChefV2`](../interfaces/IMasterChefV2.md)

#### Defined in

[types/ethers-contracts/factories/IMasterChefV2__factory.ts:72](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IMasterChefV2__factory.ts#L72)

___

### createInterface

▸ `Static` **createInterface**(): `IMasterChefV2Interface`

#### Returns

`IMasterChefV2Interface`

#### Defined in

[types/ethers-contracts/factories/IMasterChefV2__factory.ts:69](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IMasterChefV2__factory.ts#L69)
