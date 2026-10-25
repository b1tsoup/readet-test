import { StyleSheet, Text, View } from "react-native";
import renderer from "react-test-renderer";

import App from "../App";

it("renders the greeting", () => {
  const app = renderer.create(<App />);

  expect(app.root.findByType(Text).props.children).toBe("Hello Egor!!!!!");
  expect(StyleSheet.flatten(app.root.findByType(View).props.style)).toEqual(
    expect.objectContaining({ backgroundColor: "green" }),
  );
});
