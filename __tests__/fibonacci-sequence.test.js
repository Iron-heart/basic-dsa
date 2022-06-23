const fibonacci = require("../algorithms/fibonacci-sequence")

test("Calculates expected results", () => {
    // expect(fibonacci(3).toBe([0, 1, 1]))
    expect(fibonacci(2)).toStrictEqual([0, 1]);
    expect(fibonacci(3)).toStrictEqual([0, 1, 1]);
    expect(fibonacci(7)).toStrictEqual([0, 1, 1, 2, 3, 5, 8]);
})