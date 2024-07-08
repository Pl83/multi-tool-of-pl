import fiboCryption from "../src/fiboEncrypte";

test("make the fiboCryption of 'hello'", () => {
    expect(fiboCryption('hello')).toBe('hfmnr');
});