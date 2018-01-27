import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Styles from "./../../App.scss";

export default class Settings extends Component {
  static navigationOptions = {
    title: "Einstellungen",
    headerTintColor: Styles.ci_Header.color,
    headerStyle: {
      height: Styles.ci_Header.height,
      backgroundColor: Styles.ci_Header.backgroundColor
    }
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "orange" }}>
        <Text>{this.props.navigation.state.params.name}</Text>
      </View>
    );
  }
}
