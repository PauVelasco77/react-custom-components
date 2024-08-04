import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Switch from "../switch";

describe("SWitch component", () => {
  it("Should render the Switch button", () => {
    render(<Switch />);
    const getCheckbox = screen.getByRole("checkbox");
    expect(getCheckbox).toBeInTheDocument();
  });
});
