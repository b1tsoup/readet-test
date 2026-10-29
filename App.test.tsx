import { render, screen } from "@testing-library/react-native";

import App from "./App";

test("renders the welcome message", () => {
  render(<App />);

  expect(screen.getByText("Welcome to Readet")).toBeTruthy();
});
