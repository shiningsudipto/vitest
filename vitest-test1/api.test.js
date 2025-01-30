import { describe, it, expect, vi } from "vitest";
import { fetchProducts } from "./api";

// Mock fetch globally
global.fetch = vi.fn();

describe("fetchProducts", () => {
  it("should return mock product data", async () => {
    // Mock the API response
    fetch.mockResolvedValue({
      json: vi.fn().mockResolvedValue([
        { id: 1, name: "Dumbbell", price: 50 },
        { id: 2, name: "Treadmill", price: 500 },
      ]),
    });

    const data = await fetchProducts();

    // Validate mock data
    expect(data).toHaveLength(2);
    expect(data[0]).toHaveProperty("name", "Dumbbell");
    expect(data[1]).toHaveProperty("price", 500);
  });
});
