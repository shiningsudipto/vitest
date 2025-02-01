import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Counter } from "../components/Counter";
import "@testing-library/jest-dom/vitest";

describe("Counter Component", () => {
  it("increments count on button click", () => {
    render(<Counter />);

    const button = screen.getByText("Increment");

    fireEvent.click(button);

    // Check if count updated
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});
