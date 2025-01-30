import { describe, it, expect } from "vitest";

describe("Basic Matchers", () => {
  it("checks exact equality", () => {
    expect(5).toBe(5);
  });
  it("checks object deep equality", () => {
    expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
  });
  it("checks for undefined value", () => {
    let value;
    expect(value).toBeUndefined();
  });
});

describe("Array & String Matchers", () => {
  it("checks if array contains an item", () => {
    expect([1, 2, 3]).toContain(2);
  });

  it("checks string length", () => {
    expect("Vitest").toHaveLength(6);
  });
});

describe("Number Matchers", () => {
  it("checks greater than condition", () => {
    expect(10).toBeGreaterThan(5);
  });

  it("handles floating-point numbers correctly", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });
});

describe("Error Handling", () => {
  it("checks if function throws an error", () => {
    expect(() => errorFunction()).toThrow("error");
  });
});

async function fetchData() {
  return "Hello, World!";
}

async function fetchError() {
  throw new Error("API failed");
}

describe("Async Matchers", () => {
  it("resolves with correct value", async () => {
    await expect(fetchData()).resolves.toBe("Hello, World!");
  });

  it("rejects with error", async () => {
    await expect(fetchError()).rejects.toThrow("API failed");
  });
});
