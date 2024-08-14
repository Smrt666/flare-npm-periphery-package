import { nameToAbi as nameToAbiCST } from "./coston";
import { nameToAbi as nameToAbiCST2 } from "./coston2";
import { nameToAbi as nameToAbiFLR } from "./flare";
import { nameToAbi as nameToAbiSGB } from "./songbird";

import { ethers } from "ethers";

// This should never change
export const FlareContractRegistryAddress = "0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019";

export const nameToAddress = async (name: string, provider: ethers.JsonRpcApiProvider): Promise<string> => {
  const fcrContract = new ethers.Contract(FlareContractRegistryAddress, nameToAbi("IFlareContractRegistry", "flare").data, provider);
  return await fcrContract.getContractAddressByName(name);
};

export const namesToAddresses = async (names: string[], provider: ethers.JsonRpcApiProvider): Promise<string[]> => {
  const fcrContract = new ethers.Contract(FlareContractRegistryAddress, nameToAbi("IFlareContractRegistry", "flare").data, provider);
  return await fcrContract.getContractAddressesByName(names);
};


export const nameToAbi = (
  name: string,
  network: string,
): { data: any; status: string } => {
  if (network.toLowerCase() == "flare") return nameToAbiFLR(name);
  if (network.toLowerCase() == "songbird") return nameToAbiSGB(name);
  if (network.toLowerCase() == "coston") return nameToAbiCST(name);
  if (network.toLowerCase() == "coston2") return nameToAbiCST2(name);
  return { data: [], status: "Please select a network" };
};

export * as coston from "./coston";
export * as coston2 from "./coston2";
export * as flare from "./flare";
export * as songbird from "./songbird";

