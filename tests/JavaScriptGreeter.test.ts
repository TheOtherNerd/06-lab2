import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JSGreeter class", () => {
  test("constructor", () => {
    const JSGreeter = new JavaScriptGreeter("Hello");
    expect(JSGreeter.greeting).toBe("Hello");
  });
});
