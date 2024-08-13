import { ethers } from "ethers";
import { coston, coston2, flare, songbird } from "../dist";


describe("Coston2 adress getter", () => {
    let jsonRPC: ethers.JsonRpcProvider;
    const nameToAddress = coston2.nameToAddress;
    const namesToAddresses = coston2.namesToAddresses;
    const FlareContractRegistryAddress = coston2.FlareContractRegistryAddress;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider("https://coston2-api.flare.network/ext/bc/C/rpc");
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
})

describe("Coston adress getter", () => {
    let jsonRPC: ethers.JsonRpcProvider;
    const nameToAddress = coston.nameToAddress;
    const namesToAddresses = coston.namesToAddresses;
    const FlareContractRegistryAddress = coston.FlareContractRegistryAddress;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider("https://coston-api.flare.network/ext/bc/C/rpc");
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
})

describe("Flare adress getter", () => {
    let jsonRPC: ethers.JsonRpcProvider;
    const nameToAddress = flare.nameToAddress;
    const namesToAddresses = flare.namesToAddresses;
    const FlareContractRegistryAddress = flare.FlareContractRegistryAddress;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider("https://flare-api.flare.network/ext/bc/C/rpc");
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
})

describe("Songbird adress getter", () => {
    let jsonRPC: ethers.JsonRpcProvider;
    const nameToAddress = songbird.nameToAddress;
    const namesToAddresses = songbird.namesToAddresses;
    const FlareContractRegistryAddress = songbird.FlareContractRegistryAddress;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider("https://songbird-api.flare.network/ext/bc/C/rpc");
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
})