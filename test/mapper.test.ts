import { ethers } from "ethers";
import { coston, coston2, flare, songbird, nameToAbi, nameToAddress, namesToAddresses } from "../index";


[
    [coston, "coston"],
    [coston2, "coston2"],
    [flare, "flare"],
    [songbird, "songbird"],
].map(([chain, chainName]) => describe(`${chainName} adress getter`, () => {
    let jsonRPC: ethers.JsonRpcProvider;
    // @ts-ignore
    const chain_nameToAddress = chain.nameToAddress;
    // @ts-ignore
    const chain_namesToAddresses = chain.namesToAddresses;
    // @ts-ignore
    const chain_FlareContractRegistryAddress = chain.FlareContractRegistryAddress;
    // @ts-ignore
    let network: string = chainName;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider(`https://${network}-api.flare.network/ext/bc/C/rpc`);
    });

    test("Get FlareContractRegistry address", async () => {
        let fcrAddress = await chain_nameToAddress("FlareContractRegistry", jsonRPC);
        expect(fcrAddress).toBe(chain_FlareContractRegistryAddress);
        let fcrAddress2 = await nameToAddress("FlareContractRegistry", network, jsonRPC);
        expect(fcrAddress2).toBe(fcrAddress2);
    });

    test("Get addresses", async () => {
        let addresses = await chain_namesToAddresses(["FlareContractRegistry", "FtsoRewardManager"], jsonRPC);
        expect(addresses.length).toBe(2);
        expect(addresses[0]).toBe(chain_FlareContractRegistryAddress);
        let addresses2 = await namesToAddresses(["FlareContractRegistry", "FtsoRewardManager"], network, jsonRPC);
        expect(addresses2).toEqual(addresses);
    });

    test("Get nonexistent address", async () => {
        let address = await chain_nameToAddress("sejhfusdhgiluhflgrh", jsonRPC);
        expect(address).toBe("0x0000000000000000000000000000000000000000");
        let address2 = await nameToAddress("sejhfusdhgiluhflgrh", network, jsonRPC);
        expect(address2).toBe(address);
    });

    test("Get nonexistent addresses", async () => {
        let addresses = await chain_namesToAddresses(["dhbshdlfsdgrf", "orsdjigopaijro", "uhsdfiud"], jsonRPC);
        expect(addresses.length).toBe(3);
        expect(addresses[0]).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[1]).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[2]).toBe("0x0000000000000000000000000000000000000000");
        let addresses2 = await namesToAddresses(["dhbshdlfsdgrf", "orsdjigopaijro", "uhsdfiud"], network, jsonRPC);
        expect(addresses2).toEqual(addresses);
    });

    test("Invalid input", async () => {
        // @ts-ignore
        await expect(chain_nameToAddress(5, jsonRPC)).rejects.toThrow(TypeError);
        // @ts-ignore
        await expect(chain_namesToAddresses("FlareContractRegistry", jsonRPC)).rejects.toThrow();
        // @ts-ignore
        await expect(nameToAddress(5, network, jsonRPC)).rejects.toThrow(TypeError);
        // @ts-ignore
        await expect(namesToAddresses("FlareContractRegistry", network, jsonRPC)).rejects.toThrow();
    });
}));
