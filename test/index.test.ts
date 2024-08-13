import * as dist from "../dist/index"


describe('testing index file imports', () => {

    test('Index gets imported', async () => {
        expect(dist).toBeDefined();
    });

    test('Index imports chains, getters', async () => {
        expect(dist.coston).toBeDefined();
        expect(dist.coston2).toBeDefined();
        expect(dist.flare).toBeDefined();
        expect(dist.songbird).toBeDefined();

        expect(dist.nameToAbi).toBeDefined();
        expect(dist.nameToAddress).toBeDefined();
        expect(dist.nameToAddress).toBeDefined();
    });

    test('Coston imports abis, getters', async () => {
        expect(dist.coston.abis).toBeDefined();
        expect(dist.coston.namesToAddresses).toBeDefined();
        expect(dist.coston.nameToAbi).toBeDefined();
        expect(dist.coston.nameToAddress).toBeDefined();
    });

    test('Coston2 imports abis, getters', async () => {
        expect(dist.coston2.abis).toBeDefined();
        expect(dist.coston2.namesToAddresses).toBeDefined();
        expect(dist.coston2.nameToAbi).toBeDefined();
        expect(dist.coston2.nameToAddress).toBeDefined();
    });

    test('Flare imports abis, getters', async () => {
        expect(dist.flare.abis).toBeDefined();
        expect(dist.flare.namesToAddresses).toBeDefined();
        expect(dist.flare.nameToAbi).toBeDefined();
        expect(dist.flare.nameToAddress).toBeDefined();
    });

    test('Songbird imports abis, getters', async () => {
        expect(dist.songbird.abis).toBeDefined();
        expect(dist.songbird.namesToAddresses).toBeDefined();
        expect(dist.songbird.nameToAbi).toBeDefined();
        expect(dist.songbird.nameToAddress).toBeDefined();
    });
});
