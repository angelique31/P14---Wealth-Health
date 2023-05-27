import { render, screen } from "@testing-library/react";
import NavBar from "../src/components/CreatEmployee/NavBar/NavBar";
import React from "react";

test("NavBar is rendered correctly", () => {
  render(<NavBar />);
  const navBarElement = screen.getByTestId("navbar");
  expect(navBarElement).toBeInTheDocument();
});
