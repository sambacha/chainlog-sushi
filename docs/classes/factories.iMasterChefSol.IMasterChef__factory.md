[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [iMasterChefSol](../modules/factories.iMasterChefSol.md) / IMasterChef\_\_factory

# Class: IMasterChef\_\_factory

[factories](../modules/factories.md).[iMasterChefSol](../modules/factories.iMasterChefSol.md).IMasterChef__factory

## Table of contents

### Constructors

- [constructor](factories.iMasterChefSol.IMasterChef__factory.md#constructor)

### Properties

- [abi](factories.iMasterChefSol.IMasterChef__factory.md#abi)

### Methods

- [connect](factories.iMasterChefSol.IMasterChef__factory.md#connect)
- [createInterface](factories.iMasterChefSol.IMasterChef__factory.md#createinterface)

## Constructors

### constructor

• **new IMasterChef__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "user"; `type`: `string` = "address" }[] ; `name`: `string` = "Deposit"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "\_from"; `type`: `string` = "uint256" }[] ; `name`: `string` = "getMultiplier"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "poolId"; `type`: `string` = "uint256" }[] ; `name`: `string` = "poolInfo"; `outputs`: { `components`: { `internalType`: `string` = "contract IERC20"; `name`: `string` = "lpToken"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct IMasterChef.PoolInfo"; `name`: `string` = ""; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/IMasterChef.sol/IMasterChef__factory.ts:552](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IMasterChef.sol/IMasterChef__factory.ts#L552)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IMasterChef`](../interfaces/iMasterChefSol.IMasterChef-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IMasterChef`](../interfaces/iMasterChefSol.IMasterChef-1.md)

#### Defined in

[types/ethers-contracts/factories/IMasterChef.sol/IMasterChef__factory.ts:556](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IMasterChef.sol/IMasterChef__factory.ts#L556)

___

### createInterface

▸ `Static` **createInterface**(): `IMasterChefInterface`

#### Returns

`IMasterChefInterface`

#### Defined in

[types/ethers-contracts/factories/IMasterChef.sol/IMasterChef__factory.ts:553](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/IMasterChef.sol/IMasterChef__factory.ts#L553)
