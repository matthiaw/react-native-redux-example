import React, { Component } from "react";
import { Text, View, TouchableOpacity, StatusBar } from "react-native";
import Styles from "./../../App.scss";

export default class Roles extends Component {
  static navigationOptions = {
    title: "Rollen",
    headerTintColor: Styles.circleadHeader.color,
    headerStyle: {
      backgroundColor: Styles.circleadHeader.backgroundColor
    }
  };
  render() {
    return (

      <View style={{ flex: 1, backgroundColor: "pink" }}>
        <Text>{this.props.navigation.state.params.name}</Text>

      </View>
    );
  }
}
