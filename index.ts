import { JsonRpcProvider } from "ethers";
import {
  nameToAbi as nameToAbiCST,
  nameToAddress as nameToAddressCST,
  namesToAddresses as namesToAddressesCST,
} from "./coston";
import {
  nameToAbi as nameToAbiCST2,
  nameToAddress as nameToAddressCST2,
  namesToAddresses as namesToAddressesCST2,
} from "./coston2";
import {
  nameToAbi as nameToAbiFLR,
  nameToAddress as nameToAddressFLR,
  namesToAddresses as namesToAddressesFLR,
} from "./flare";
import {
  nameToAbi as nameToAbiSGB,
  nameToAddress as nameToAddressSGB,
  namesToAddresses as namesToAddressesSGB,
} from "./songbird";

export const nameToAddress = async (name: string, network: string, provider: JsonRpcProvider): Promise<string> => {
  if (network.toLowerCase() == "flare") return await nameToAddressFLR(name, provider);
  if (network.toLowerCase() == "songbird") return await nameToAddressSGB(name, provider);
  if (network.toLowerCase() == "coston") return await nameToAddressCST(name, provider);
  if (network.toLowerCase() == "coston2") return await nameToAddressCST2(name, provider);
  return "";
};

export const namesToAddresses = async (names: string[], network: string, provider: JsonRpcProvider): Promise<string[]> => {
  if (network.toLowerCase() == "flare") return await namesToAddressesFLR(names, provider);
  if (network.toLowerCase() == "songbird") return await namesToAddressesSGB(names, provider);
  if (network.toLowerCase() == "coston") return await namesToAddressesCST(names, provider);
  if (network.toLowerCase() == "coston2") return await namesToAddressesCST2(names, provider);
  return [];
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

