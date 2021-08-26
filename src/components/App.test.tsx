import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders h1", () => {
  render(<App />);
  const h1 = screen.getByText(/lCheckers/i);
  expect(h1).toBeInTheDocument();
});
