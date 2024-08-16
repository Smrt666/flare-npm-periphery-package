import { ethers } from "ethers";
import { FlareContractRegistryAddress, nameToAddress, namesToAddresses } from "../index";


[
    "coston",
    "coston2",
    "flare",
    "songbird",
].map(chainName => describe(`${chainName} adress getter`, () => {
    let jsonRPC: ethers.JsonRpcProvider;
    // @ts-ignore
    let network: string = chainName;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider(`https://${network}-api.flare.network/ext/bc/C/rpc`);
    });

    test("Get FlareContractRegistry address", async () => {
        let fcrAddress2 = await nameToAddress("FlareContractRegistry", jsonRPC);
        expect(fcrAddress2).toBe(FlareContractRegistryAddress);
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
        await expect(nameToAddress(5, jsonRPC)).rejects.toThrow();
        // @ts-ignore
        await expect(namesToAddresses("FlareContractRegistry", jsonRPC)).rejects.toThrow();
    });
}));
