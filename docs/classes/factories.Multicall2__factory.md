[sushi-lens](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / Multicall2\_\_factory

# Class: Multicall2\_\_factory

[factories](../modules/factories.md).Multicall2__factory

## Hierarchy

- `ContractFactory`

  ↳ **`Multicall2__factory`**

## Table of contents

### Constructors

- [constructor](factories.Multicall2__factory.md#constructor)

### Properties

- [bytecode](factories.Multicall2__factory.md#bytecode)
- [contractName](factories.Multicall2__factory.md#contractname)
- [interface](factories.Multicall2__factory.md#interface)
- [signer](factories.Multicall2__factory.md#signer)
- [abi](factories.Multicall2__factory.md#abi)
- [bytecode](factories.Multicall2__factory.md#bytecode-1)
- [contractName](factories.Multicall2__factory.md#contractname-1)

### Methods

- [attach](factories.Multicall2__factory.md#attach)
- [connect](factories.Multicall2__factory.md#connect)
- [deploy](factories.Multicall2__factory.md#deploy)
- [getDeployTransaction](factories.Multicall2__factory.md#getdeploytransaction)
- [connect](factories.Multicall2__factory.md#connect-1)
- [createInterface](factories.Multicall2__factory.md#createinterface)
- [fromSolidity](factories.Multicall2__factory.md#fromsolidity)
- [getContract](factories.Multicall2__factory.md#getcontract)
- [getContractAddress](factories.Multicall2__factory.md#getcontractaddress)
- [getInterface](factories.Multicall2__factory.md#getinterface)

## Constructors

### constructor

• **new Multicall2__factory**(...`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Multicall2ConstructorParams` |

#### Overrides

ContractFactory.constructor

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:334](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L334)

## Properties

### bytecode

• `Readonly` **bytecode**: `string`

#### Inherited from

ContractFactory.bytecode

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:139

___

### contractName

• `Readonly` **contractName**: ``"Multicall2"``

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:361](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L361)

___

### interface

• `Readonly` **interface**: `Interface`

#### Inherited from

ContractFactory.interface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:138

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

ContractFactory.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:140

___

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: ({ `components`: `undefined` ; `internalType`: `string` = "bool"; `name`: `string` = "requireSuccess"; `type`: `string` = "bool" } \| { `components`: { `internalType`: `string` = "address"; `name`: `string` = "target"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct Multicall2.Call[]"; `name`: `string` = "calls"; `type`: `string` = "tuple[]" })[] ; `name`: `string` = "tryBlockAndAggregate"; `outputs`: ({ `components`: `undefined` ; `internalType`: `string` = "uint256"; `name`: `string` = "blockNumber"; `type`: `string` = "uint256" } \| { `components`: { `internalType`: `string` = "bool"; `name`: `string` = "success"; `type`: `string` = "bool" }[] ; `internalType`: `string` = "struct Multicall2.Result[]"; `name`: `string` = "returnData"; `type`: `string` = "tuple[]" })[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:364](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L364)

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x6080604052341561000f57600080fd5b610b2c8061001f608039806080f3fe60406080815260043610610258576000803560e01c630f28c97d811461009d5763252dba4281146100be576327e86d6e81146100eb5763399542e98114610110576342cbb15c811461014057634d2301cc811461015d576372425d9d8114610182576386d516e8811461019f5763a8b0574e81146101bc5763bce38bd781146101d95763c3077fa981146102065763ee82ac5e811461023057610255565b34156100a7578182fd5b6100b03661025e565b42608052607f1960a0016080f35b34156100c8578182fd5b6100d96100d436610478565b6107a3565b8451806100e7838584610505565b0381f35b34156100f5578182fd5b6100fe3661025e565b61010661097a565b8351818152602081f35b341561011a578182fd5b6101233661056f565b61012d8183610af9565b935091508551806100e785858585610632565b341561014a578182fd5b6101533661025e565b8251438152602081f35b3415610167578182fd5b6101703661065a565b318351806100e7838390815260200190565b341561018c578182fd5b6101953661025e565b8251448152602081f35b34156101a9578182fd5b6101b23661025e565b8251458152602081f35b34156101c6578182fd5b6101cf3661025e565b8251418152602081f35b34156101e3578182fd5b6101ec3661056f565b6101f68183610a07565b9150508351806100e78383610699565b3415610210578182fd5b61022161021c36610478565b610887565b8551806100e783858785610632565b341561023a578182fd5b610243366106ac565b408351806100e7838390815260200190565b50505b50600080fd5b60006003198201121561027057600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156102ac576102ac610273565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156102db576102db610273565b604052919050565b600067ffffffffffffffff8211156102fd576102fd610273565b5060051b60200190565b803573ffffffffffffffffffffffffffffffffffffffff8116811461032b57600080fd5b919050565b600067ffffffffffffffff82111561034a5761034a610273565b50601f01601f191660200190565b600082601f83011261036957600080fd5b813561037c610377826102e3565b6102b2565b8082825260208083019250808460051b87010193508684111561039e57600080fd5b8086015b8481101561046c57803567ffffffffffffffff808211156103c35760008081fd5b908801906040828b03601f19018113156103dd5760008081fd5b6103e5610289565b6103f0868501610307565b815281840135838111156104045760008081fd5b8085019450508b603f85011261041c57600092508283fd5b85840135925061042e61037784610330565b8381528c838587010111156104435760008081fd5b8383860188830137600093810187019390935280860192909252508552509281019281016103a2565b50909695505050505050565b600060206003198301121561048c57600080fd5b60043567ffffffffffffffff8111156104a457600080fd5b6104b18382600401610358565b9392505050565b6000815180845260005b818110156104de576020818501810151868301820152016104c2565b818111156104f0576000602083870101525b50601f01601f19169290920160200192915050565b600060408201838352602060408185015281865180845260608601915060608160051b870101935082880160005b8281101561056157605f1988870301845261054f8683516104b8565b95509284019290840190600101610533565b509398975050505050505050565b60008060406003198401121561058457600080fd5b600435801515811461059557600080fd5b915060243567ffffffffffffffff8111156105af57600080fd5b6105bc8482600401610358565b915050915091565b600082825180855260208086019550808260051b84010181860160005b8481101561062557858303601f1901895281518051151584528401516040858501819052610611818601836104b8565b9a86019a94505050908301906001016105e1565b5090979650505050505050565b81815282602082015260606040820152600061065160608301866105c4565b95945050505050565b600060206003198301121561066e57600080fd5b60043573ffffffffffffffffffffffffffffffffffffffff8116811461069357600080fd5b92915050565b6020815260006104b160208301846105c4565b60006020600319830112156106c057600080fd5b505060043590565b634e487b7160e01b600052601160045260246000fd5b60006000198214156106f2576106f26106c8565b5060010190565b60008151831061071957634e487b7160e01b600052603260045260246000fd5b5060059190911b0160200190565b60003d8015610751573d61073d61037782610330565b8181528093503d6000602083013e50505090565b606091505090565b806102705760405162461bcd60e51b815260206004820152602060248201527f4d756c746963616c6c206167677265676174653a2063616c6c206661696c65646044820152606481fd5b805143906000906107b6610377826102e3565b818152601f196107c5836102e3565b01915060005b828110156107e7576060602082840101526020810190506107cb565b50809250600091505b845182106107fd57610880565b61082561080a83876106f9565b515173ffffffffffffffffffffffffffffffffffffffff1690565b60208061083285896106f9565b51015160008082518484016000875af19250505061084e610727565b61085782610759565b8061086285856106f9565b52505061086f82826106f9565b50610879826106de565b91506107f0565b5050915091565b6000806000835161089a610377826102e3565b818152601f196108a9836102e3565b01915060005b828110156108dd576108bf610289565b600081526060602080830191909152838301810191909152016108af565b50600091505b855182106108f05761096b565b6108fd61080a83886106f9565b60208061090a858a6106f9565b51015160008082518484016000875af1925050610925610727565b61092e83610997565b610936610289565b831515815281838201528061094b87876106f9565b525050505061095a82826106f9565b50610964826106de565b91506108e3565b43968740965090945092505050565b6000600143101561098d5761098d6106c8565b5043600019014090565b806102705760405162461bcd60e51b815260206004820152602160248201527f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560448201527f64000000000000000000000000000000000000000000000000000000000000006064820152608481fd5b60008251610a17610377826102e3565b818152601f19610a26836102e3565b01915060005b82811015610a5a57610a3c610289565b60008152606060208083019190915283830181019190915201610a2c565b50809250600091505b84518210610a7057610af1565b610a7d61080a83876106f9565b602080610a8a85896106f9565b51015160008082518484016000875af1925050610aa5610727565b8615610ab457610ab483610997565b610abc610289565b8315158152818382015280610ad187876106f9565b5250505050610ae082826106f9565b50610aea826106de565b9150610a63565b505092915050565b4380406000610b088585610a07565b9050925092509256fea26c6578706572696d656e74616cf564736f6c63430008090018"``

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:363](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L363)

___

### contractName

▪ `Static` `Readonly` **contractName**: ``"Multicall2"``

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:359](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L359)

## Methods

### attach

▸ **attach**(`address`): [`Multicall2`](../interfaces/Multicall2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Multicall2`](../interfaces/Multicall2.md)

#### Overrides

ContractFactory.attach

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:353](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L353)

___

### connect

▸ **connect**(`signer`): [`Multicall2__factory`](factories.Multicall2__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`Multicall2__factory`](factories.Multicall2__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:356](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L356)

___

### deploy

▸ **deploy**(`overrides?`): `Promise`<[`Multicall2`](../interfaces/Multicall2.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`Multicall2`](../interfaces/Multicall2.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:343](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L343)

___

### getDeployTransaction

▸ **getDeployTransaction**(`overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:348](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L348)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Multicall2`](../interfaces/Multicall2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Multicall2`](../interfaces/Multicall2.md)

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:368](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L368)

___

### createInterface

▸ `Static` **createInterface**(): `Multicall2Interface`

#### Returns

`Multicall2Interface`

#### Defined in

[types/ethers-contracts/factories/Multicall2__factory.ts:365](https://github.com/sambacha/chainlog-sushi/blob/bdcb16d/types/ethers-contracts/factories/Multicall2__factory.ts#L365)

___

### fromSolidity

▸ `Static` **fromSolidity**(`compilerOutput`, `signer?`): `ContractFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compilerOutput` | `any` |
| `signer?` | `Signer` |

#### Returns

`ContractFactory`

#### Inherited from

ContractFactory.fromSolidity

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:148

___

### getContract

▸ `Static` **getContract**(`address`, `contractInterface`, `signer?`): `Contract`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `contractInterface` | `ContractInterface` |
| `signer?` | `Signer` |

#### Returns

`Contract`

#### Inherited from

ContractFactory.getContract

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:154

___

### getContractAddress

▸ `Static` **getContractAddress**(`tx`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.from` | `string` |
| `tx.nonce` | `number` \| `BigNumber` \| `BytesLike` |

#### Returns

`string`

#### Inherited from

ContractFactory.getContractAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:150

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): `Interface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | `ContractInterface` |

#### Returns

`Interface`

#### Inherited from

ContractFactory.getInterface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:149
