import * as index from "../index";


describe('testing index file imports', () => {
    test('Index gets imported', async () => {
        expect(index).toBeDefined();
    });

    test('Index imports chains, getters', async () => {
        expect(index.coston).toBeDefined();
        expect(index.coston2).toBeDefined();
        expect(index.flare).toBeDefined();
        expect(index.songbird).toBeDefined();

        expect(index.nameToAbi).toBeDefined();
        expect(index.nameToAddress).toBeDefined();
        expect(index.namesToAddresses).toBeDefined();
    });

    test('Coston imports abis, getters', async () => {
        expect(index.coston.abis).toBeDefined();
        expect(index.coston.nameToAbi).toBeDefined();
    });

    test('Coston2 imports abis, getters', async () => {
        expect(index.coston2.abis).toBeDefined();
        expect(index.coston2.nameToAbi).toBeDefined();
    });

    test('Flare imports abis, getters', async () => {
        expect(index.flare.abis).toBeDefined();
        expect(index.flare.nameToAbi).toBeDefined();
    });

    test('Songbird imports abis, getters', async () => {
        expect(index.songbird.abis).toBeDefined();
        expect(index.songbird.nameToAbi).toBeDefined();
    });
});
