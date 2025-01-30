import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum function", () => {
  it("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });
  it("should add a positive and a negative number", () => {
    expect(sum(5, -3)).toBe(2);
  });
});
