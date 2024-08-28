// src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders customer rewards heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Customer Rewards/i);
  expect(headingElement).toBeInTheDocument();
});
