import { Text } from "react-native";
import renderer from "react-test-renderer";

import App from "../App";

it("renders the welcome message", () => {
  const app = renderer.create(<App />);

  expect(app.root.findByType(Text).props.children).toBe("Welcome to Readet");
});
