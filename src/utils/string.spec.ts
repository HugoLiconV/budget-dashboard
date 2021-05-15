import { splice } from "./string";

describe("splice fn", () => {
  it("should insert a string at a specific index", () => {
    const result = splice({
      value: "Hllo, World",
      start: 1,
      delCount: 0,
      newSubStr: "e",
    });
    expect(result).toBe("Hello, World");
  });
});
