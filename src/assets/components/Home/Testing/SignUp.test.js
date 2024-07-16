import React from "react";
import { render, screen } from "@testing-library/react";
import SignUp from "../Home../../../Signup/SignUp";

test("renders signup form correctly", () => {
  render(<SignUp />);

  const usernameInput = screen.getByLabelText(/username/i);
  expect(usernameInput).toBeInTheDocument();
});
