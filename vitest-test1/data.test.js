import { describe, it, expect } from "vitest";
import { fetchData, fetchProducts } from "./data";

describe("fetchProducts", () => {
  it("should return an array of objects", async () => {
    const data = await fetchProducts();

    // Check if it's an array
    expect(Array.isArray(data)).toBe(true);

    // Check length of array
    expect(data).toHaveLength(2);

    // Check if first object contains required properties
    expect(data[0]).toMatchObject({ id: 1, name: "Dumbbell", price: 50 });

    // Check if array contains an object with specific values
    expect(data).toContainEqual({ id: 2, name: "Treadmill", price: 500 });

    // Check structure of each object
    data.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("price");
    });
  });

  it("should return an array of products", async () => {
    const data = await fetchData();

    expect(Array.isArray(data)).toBe(true);
    expect(data).toContain("Dumbbell");
  });
});
