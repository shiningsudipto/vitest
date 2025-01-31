import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../components/Button";
import "@testing-library/jest-dom/vitest";

describe("Testing Button Component", () => {
  it("render Hello World", () => {
    render(<Button label={"Hello World"} />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
