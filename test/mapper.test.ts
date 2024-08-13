import { ethers } from "ethers";


describe("Coston2 adress getter", () => {
    let jsonRPC: ethers.JsonRpcProvider;
    let nameToAddress: any;
    let namesToAddresses: any;
    let FlareContractRegistryAddress: any;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider("https://coston2-api.flare.network/ext/bc/C/rpc");
        const chainIndex = await import("../coston2/index");
        nameToAddress = chainIndex.nameToAddress;
        namesToAddresses = chainIndex.namesToAddresses;
        FlareContractRegistryAddress = chainIndex.FlareContractRegistryAddress;
    });

    test("Get FlareContractRegistry address", async () => {
        let fcrAddress = await nameToAddress("FlareContractRegistry", jsonRPC);
        expect(fcrAddress.toLowerCase()).toBe(FlareContractRegistryAddress);
    });

    test("Get addresses", async () => {
        let addresses = await namesToAddresses(["FlareContractRegistry", "FtsoRewardManager"], jsonRPC);
        expect(addresses.length).toBe(2);
        expect(addresses[0].toLowerCase()).toBe(FlareContractRegistryAddress);
    });

    test("Get nonexistent address", async () => {
        let address = await nameToAddress("sejhfusdhgiluhflgrh", jsonRPC);
        expect(address).toBe("0x0000000000000000000000000000000000000000");
    });

    test("Get nonexistent addresses", async () => {
        let addresses = await namesToAddresses(["dhbshdlfsdgrf", "orsdjigopaijro", "uhsdfiud"], jsonRPC);
        expect(addresses.length).toBe(3);
        expect(addresses[0].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[1].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[2].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
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
    let nameToAddress: any;
    let namesToAddresses: any;
    let FlareContractRegistryAddress: any;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider("https://coston-api.flare.network/ext/bc/C/rpc");
        const chainIndex = await import("../coston2/index");
        nameToAddress = chainIndex.nameToAddress;
        namesToAddresses = chainIndex.namesToAddresses;
        FlareContractRegistryAddress = chainIndex.FlareContractRegistryAddress;
    });

    test("Get FlareContractRegistry address", async () => {
        let fcrAddress = await nameToAddress("FlareContractRegistry", jsonRPC);
        expect(fcrAddress.toLowerCase()).toBe(FlareContractRegistryAddress);
    });

    test("Get addresses", async () => {
        let addresses = await namesToAddresses(["FlareContractRegistry", "FtsoRewardManager"], jsonRPC);
        expect(addresses.length).toBe(2);
        expect(addresses[0].toLowerCase()).toBe(FlareContractRegistryAddress);
    });

    test("Get nonexistent address", async () => {
        let address = await nameToAddress("sejhfusdhgiluhflgrh", jsonRPC);
        expect(address).toBe("0x0000000000000000000000000000000000000000");
    });

    test("Get nonexistent addresses", async () => {
        let addresses = await namesToAddresses(["dhbshdlfsdgrf", "orsdjigopaijro", "uhsdfiud"], jsonRPC);
        expect(addresses.length).toBe(3);
        expect(addresses[0].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[1].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[2].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
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
    let nameToAddress: any;
    let namesToAddresses: any;
    let FlareContractRegistryAddress: any;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider("https://flare-api.flare.network/ext/bc/C/rpc");
        const chainIndex = await import("../coston2/index");
        nameToAddress = chainIndex.nameToAddress;
        namesToAddresses = chainIndex.namesToAddresses;
        FlareContractRegistryAddress = chainIndex.FlareContractRegistryAddress;
    });

    test("Get FlareContractRegistry address", async () => {
        let fcrAddress = await nameToAddress("FlareContractRegistry", jsonRPC);
        expect(fcrAddress.toLowerCase()).toBe(FlareContractRegistryAddress);
    });

    test("Get addresses", async () => {
        let addresses = await namesToAddresses(["FlareContractRegistry", "FtsoRewardManager"], jsonRPC);
        expect(addresses.length).toBe(2);
        expect(addresses[0].toLowerCase()).toBe(FlareContractRegistryAddress);
    });

    test("Get nonexistent address", async () => {
        let address = await nameToAddress("sejhfusdhgiluhflgrh", jsonRPC);
        expect(address).toBe("0x0000000000000000000000000000000000000000");
    });

    test("Get nonexistent addresses", async () => {
        let addresses = await namesToAddresses(["dhbshdlfsdgrf", "orsdjigopaijro", "uhsdfiud"], jsonRPC);
        expect(addresses.length).toBe(3);
        expect(addresses[0].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[1].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[2].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
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
    let nameToAddress: any;
    let namesToAddresses: any;
    let FlareContractRegistryAddress: any;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider("https://songbird-api.flare.network/ext/bc/C/rpc");
        const chainIndex = await import("../coston2/index");
        nameToAddress = chainIndex.nameToAddress;
        namesToAddresses = chainIndex.namesToAddresses;
        FlareContractRegistryAddress = chainIndex.FlareContractRegistryAddress;
    });

    test("Get FlareContractRegistry address", async () => {
        let fcrAddress = await nameToAddress("FlareContractRegistry", jsonRPC);
        expect(fcrAddress.toLowerCase()).toBe(FlareContractRegistryAddress);
    });

    test("Get addresses", async () => {
        let addresses = await namesToAddresses(["FlareContractRegistry", "FtsoRewardManager"], jsonRPC);
        expect(addresses.length).toBe(2);
        expect(addresses[0].toLowerCase()).toBe(FlareContractRegistryAddress);
    });

    test("Get nonexistent address", async () => {
        let address = await nameToAddress("sejhfusdhgiluhflgrh", jsonRPC);
        expect(address).toBe("0x0000000000000000000000000000000000000000");
    });

    test("Get nonexistent addresses", async () => {
        let addresses = await namesToAddresses(["dhbshdlfsdgrf", "orsdjigopaijro", "uhsdfiud"], jsonRPC);
        expect(addresses.length).toBe(3);
        expect(addresses[0].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[1].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[2].toLowerCase()).toBe("0x0000000000000000000000000000000000000000");
    });

    test("Invalid input", async () => {
        // @ts-ignore
        await expect(nameToAddress(5, jsonRPC)).rejects.toThrow(TypeError);
        // @ts-ignore
        await expect(namesToAddresses("FlareContractRegistry", jsonRPC)).rejects.toThrow();
    });
})