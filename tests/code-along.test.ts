import { Player, Timer } from "../src/Player";

describe("Player class", () => {
  test("the constructor property sets properties", () => {
    const result = new Player("name Lname", 11);
    expect(result.name).toBe("name Lname");
    expect(result.jersey).toBe(11);
  });
});

describe("Timer class", () => {
  test("constructor works", () => {
    const timer = new Timer("track");
    expect(timer.name).toBe("track");
    expect(timer.time).toBe(0);
  });
});
