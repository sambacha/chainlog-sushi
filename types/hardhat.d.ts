/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IBentoBoxV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBentoBoxV1__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IGnosisSafe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGnosisSafe__factory>;
    getContractFactory(
      name: "IMasterChef",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMasterChef__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IMasterChefV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMasterChefV2__factory>;
    getContractFactory(
      name: "IStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStrategy__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IWethMaker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWethMaker__factory>;
    getContractFactory(
      name: "Multicall2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall2__factory>;

    getContractAt(
      name: "IBentoBoxV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBentoBoxV1>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IGnosisSafe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGnosisSafe>;
    getContractAt(
      name: "IMasterChef",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMasterChef>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IMasterChefV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMasterChefV2>;
    getContractAt(
      name: "IStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStrategy>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router01>;
    getContractAt(
      name: "IWethMaker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWethMaker>;
    getContractAt(
      name: "Multicall2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Multicall2>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
