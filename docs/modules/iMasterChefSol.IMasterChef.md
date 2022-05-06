[sushi-lens](../README.md) / [Exports](../modules.md) / [iMasterChefSol](iMasterChefSol.md) / IMasterChef

# Namespace: IMasterChef

[iMasterChefSol](iMasterChefSol.md).IMasterChef

## Table of contents

### Type aliases

- [PoolInfoStruct](iMasterChefSol.IMasterChef.md#poolinfostruct)
- [PoolInfoStructOutput](iMasterChefSol.IMasterChef.md#poolinfostructoutput)
- [UserInfoStruct](iMasterChefSol.IMasterChef.md#userinfostruct)
- [UserInfoStructOutput](iMasterChefSol.IMasterChef.md#userinfostructoutput)

## Type aliases

### PoolInfoStruct

Ƭ **PoolInfoStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accSushiPerShare` | `BigNumberish` |
| `allocPoint` | `BigNumberish` |
| `lastRewardBlock` | `BigNumberish` |
| `lpToken` | `string` |

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:30](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L30)

___

### PoolInfoStructOutput

Ƭ **PoolInfoStructOutput**: [`string`, `BigNumber`, `BigNumber`, `BigNumber`] & { `accSushiPerShare`: `BigNumber` ; `allocPoint`: `BigNumber` ; `lastRewardBlock`: `BigNumber` ; `lpToken`: `string`  }

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:37](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L37)

___

### UserInfoStruct

Ƭ **UserInfoStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |
| `rewardDebt` | `BigNumberish` |

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:49](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L49)

___

### UserInfoStructOutput

Ƭ **UserInfoStructOutput**: [`BigNumber`, `BigNumber`] & { `amount`: `BigNumber` ; `rewardDebt`: `BigNumber`  }

#### Defined in

[types/ethers-contracts/IMasterChef.sol/IMasterChef.ts:54](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/IMasterChef.sol/IMasterChef.ts#L54)
