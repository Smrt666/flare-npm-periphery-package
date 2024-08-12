describe('testing index file imports', () => {
    test('Index gets imported', async () => {
        let index = await import("../dist/index");
        expect(index).toBeDefined();
    });

    test('Index imports chains, getters', async () => {
        let index = await import("../dist/index");
        expect(index.coston).toBeDefined();
        expect(index.coston2).toBeDefined();
        expect(index.flare).toBeDefined();
        expect(index.songbird).toBeDefined();

        expect(index.nameToAbi).toBeDefined();
        expect(index.nameToAddress).toBeDefined();
        expect(index.addressToName).toBeDefined();
    });

    test('Chains import abis, getters', async () => {
        let index = await import("../dist/index");
        [index.coston, index.coston2, index.flare, index.songbird].map(chain => {
            expect(chain.abis).toBeDefined();
            expect(chain.addressToName).toBeDefined();
            expect(chain.contractAddresses).toBeDefined();
            expect(chain.nameToAbi).toBeDefined();
            expect(chain.nameToAddress).toBeDefined();
        })
    });
});
