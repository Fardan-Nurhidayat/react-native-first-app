import HelloWorld from "@/components/HelloWorld";
import Tables from "@/components/ui/Tabltes";
import { View } from "react-native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <HelloWorld />
      <Tables />
    </View>
  );
}
