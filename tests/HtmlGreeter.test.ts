import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test("the constructor works", () => {
    const htmlGreeter = new HtmlGreeter("hello", "div");
    expect(htmlGreeter.tagName).toBe("div");
  });
  test("override greet to wrap result", () => {
    const htmlGreeter = new HtmlGreeter("hello", "div");
    expect(htmlGreeter.greet("Logan")).toBe("<div>hello, Logan!</div>");
  });
});
