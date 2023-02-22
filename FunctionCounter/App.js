import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);

  const handlePlus = () => {
    setNum(num + 1);
    console.log("Plus Clicked");
  };
  const handleReset = () => {
    setNum(0);
    console.log("Reset!");
  };
  const handleMinus = () => {
    setNum(num - 1);
    console.log("Minus Clicked");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter App Using Functional Component</Text>
      <View style={styles.topItemContainer}>
        <Text style={styles.textStyle}>{num}</Text>
      </View>
      <View style={styles.bottomItemContainer}>
        <Text style={styles.btn} onPress={handlePlus}>
          +
        </Text>
        <Text style={styles.reset} onPress={handleReset}>
          Reset
        </Text>
        <Text style={styles.btn} onPress={handleMinus}>
          -
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#019595ff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  topItemContainer: {
    height: "40%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#93fbfb",
  },
  bottomItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "30%",
    width: "80%",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#93fbfb",
  },
  heading: {
    fontSize: 18,
    marginTop: 20,
    color: "#ffffff",
  },
  textStyle: {
    fontSize: 100,
    color: "#ffffff",
    fontWeight: "bold",
  },
  reset: {
    color: "#ffffff",
    fontSize: 30,
    borderWidth: 3,
    borderColor: "#ffffff",
    padding: 14,
    fontWeight: "bold",
    borderRadius: 10,
  },
  btn: {
    color: "#ffffff",
    fontSize: 100,
  },
});
