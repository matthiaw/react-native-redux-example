import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Styles from "./../../App.scss";

export default class Settings extends Component {
  static navigationOptions = {
    title: "Leer",
    headerTintColor: Styles.circleadHeader.color,
    headerStyle: {
      backgroundColor: Styles.circleadHeader.backgroundColor
    }
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "blue" }}>
        <Text>{this.props.navigation.state.params.name}</Text>
      </View>
    );
  }
}
