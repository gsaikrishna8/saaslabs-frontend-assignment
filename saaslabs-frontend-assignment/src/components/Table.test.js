import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./Table";
const mockData = [
  { "s.no": 1, "percentage.funded": "50%", "amt.pledged": "1500" },
  { "s.no": 2, "percentage.funded": "70%", "amt.pledged": "2500" },
  { "s.no": 3, "percentage.funded": "30%", "amt.pledged": "5550" },
];

describe("Table Component", () => {
  test("renders table headers correctly", () => {
    render(<Table tableData={mockData} />);
    expect(screen.getByText("S.No")).toBeInTheDocument();
    expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
    expect(screen.getByText("Amount Pledged")).toBeInTheDocument();
  });
});