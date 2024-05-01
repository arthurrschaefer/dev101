const calc = require("../models/calc.js");

test("sum 2 + 2 should bring 4 as a result", () => {
    const result = calc.sum(2, 2);
    expect(result).toBe(4);
});

test("sum 5 + 100 should bring 105 as a result", () => {
    const result = calc.sum(5, 100);
    expect(result).toBe(105);
});