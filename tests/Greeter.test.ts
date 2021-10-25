import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("greeting constructor works", () => {
    const greeter = new Greeter("hello");
    expect(greeter.greeting).toBe("hello");
  });
  test("greet function", () => {
    const greeter = new Greeter("hello");
    let result = greeter.greet("Logan");
    expect(result).toBe("hello, Logan!");
  });
});
