import { abis } from "./abis";
import { ethers } from "ethers";

// This should never change
export const FlareContractRegistryAddress = "0xad67fe66660fb8dfe9d6b1b4240d8650e30f6019";

export const nameToAddress = async (name: string, provider: ethers.JsonRpcApiProvider): Promise<string> => {
  const fcrContract = new ethers.Contract(FlareContractRegistryAddress, abis.IFlareContractRegistry, provider);
  return await fcrContract.getContractAddressByName(name);
};

export const namesToAddresses = async (names: string[], provider: ethers.JsonRpcApiProvider): Promise<string[]> => {
  const fcrContract = new ethers.Contract(FlareContractRegistryAddress, abis.IFlareContractRegistry, provider);
  return await fcrContract.getContractAddressesByName(names);
};

export const nameToAbi = (name: string): { data: any; status: string } => {
  try {
    const abiData = abis[name];
    if (abiData !== undefined) return { data: abiData, status: "OK" };
    return { data: [], status: "No official Flare Network contract at this address" };

  } catch (e) {
    if (e instanceof TypeError) {
      return { data: [], status: "No official Flare Network contract at this address" };
    }
  }

  return { data: [], status: "Unknown error" };
};
