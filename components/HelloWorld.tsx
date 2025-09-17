import { Text } from "react-native";
import Button from "./ui/button";
export default function HelloWorld() {
  return (
    <>
      <Text>Hello World!</Text>
      <Button
        type='primary'
        onClick={() => alert("Button Pressed!")}>
        Click Me
      </Button>
    </>
  );
}
