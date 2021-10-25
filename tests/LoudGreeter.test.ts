import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("it works?", () => {
    const loud = new LoudGreeter("Hello");
    expect(loud.greet("Logan")).toBe("Hello, Logan!!");
  });
});
