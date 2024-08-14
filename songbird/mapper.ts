import { abis } from "./abis";


export const nameToAbi = (name: string): { data: any; status: string } => {
  try {
    const abiData = abis[name];
    if (abiData !== undefined) return { data: abiData, status: "OK" };
    return { data: [], status: "No official Flare Network contract with this name" };

  } catch (e) {
    if (e instanceof TypeError) {
      return { data: [], status: "No official Flare Network contract with this name" };
    }
  }

  return { data: [], status: "Unknown error" };
};
