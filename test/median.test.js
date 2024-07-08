import median from "../src/median";

test("make the median of 1, 2, 3, 4", () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
});