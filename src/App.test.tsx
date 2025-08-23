import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("button click works", () => {
  render(<App />);
  const button = screen.getByRole("button");
  fireEvent.click(button); // instead of userEvent.click
  // add expectations here if your App has button functionality
});
