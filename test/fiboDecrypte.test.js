import fiboDecryption from "../src/fiboDecrypte";

test("make the fiboDecryption of 'hfmnr'", () => {
    expect(fiboDecryption('hfmnr')).toBe('hello');
});