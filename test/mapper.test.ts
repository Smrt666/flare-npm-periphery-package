import { ethers } from "ethers";
import { coston, coston2, flare, songbird } from "../dist/index";


[
    [coston, "coston"],
    [coston2, "coston2"],
    [flare, "flare"],
    [songbird, "songbird"],
].map(([chain, chainName]) => describe(`${chainName} adress getter`, () => {
    let jsonRPC: ethers.JsonRpcProvider;
    // @ts-ignore
    const nameToAddress = chain.nameToAddress;
    // @ts-ignore
    const namesToAddresses = chain.namesToAddresses;
    // @ts-ignore
    const FlareContractRegistryAddress = chain.FlareContractRegistryAddress;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider(`https://${chainName}-api.flare.network/ext/bc/C/rpc`);
    });

    test("Get FlareContractRegistry address", async () => {
        let fcrAddress = await nameToAddress("FlareContractRegistry", jsonRPC);
        expect(fcrAddress).toBe(FlareContractRegistryAddress);
    });

    test("Get addresses", async () => {
        let addresses = await namesToAddresses(["FlareContractRegistry", "FtsoRewardManager"], jsonRPC);
        expect(addresses.length).toBe(2);
        expect(addresses[0]).toBe(FlareContractRegistryAddress);
    });

    test("Get nonexistent address", async () => {
        let address = await nameToAddress("sejhfusdhgiluhflgrh", jsonRPC);
        expect(address).toBe("0x0000000000000000000000000000000000000000");
    });

    test("Get nonexistent addresses", async () => {
        let addresses = await namesToAddresses(["dhbshdlfsdgrf", "orsdjigopaijro", "uhsdfiud"], jsonRPC);
        expect(addresses.length).toBe(3);
        expect(addresses[0]).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[1]).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[2]).toBe("0x0000000000000000000000000000000000000000");
    });

    test("Invalid input", async () => {
        // @ts-ignore
        await expect(nameToAddress(5, jsonRPC)).rejects.toThrow(TypeError);
        // @ts-ignore
        await expect(namesToAddresses("FlareContractRegistry", jsonRPC)).rejects.toThrow();
    });
}));
