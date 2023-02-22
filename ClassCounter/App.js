import { Text, View, StyleSheet } from "react-native";
import React, { Component, useState } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Counter App Using Functional Component
        </Text>
        <View style={styles.topItemContainer}>
          <Text style={styles.textStyle}>{this.state.num}</Text>
        </View>
        <View style={styles.bottomItemContainer}>
          <Text
            style={styles.btn}
            onPress={() => {
              this.setState({
                num: this.state.num + 1,
              });
              console.log("Plus Clicked");
            }}
          >
            +
          </Text>
          <Text
            style={styles.reset}
            onPress={() => {
              this.setState({
                num: 0,
              });
              console.log("Reset!!");
            }}
          >
            Reset
          </Text>
          <Text
            style={styles.btn}
            onPress={() => {
              this.setState({
                num: this.state.num - 1,
              });
              console.log("Minus Clicked");
            }}
          >
            -
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
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
    borderColor: "#ffffff",
  },
  bottomItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "30%",
    width: "80%",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#ffffff",
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
