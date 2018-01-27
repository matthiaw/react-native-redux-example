import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, StatusBar, Dimensions } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import Image from 'react-native-remote-svg';
import { connect } from "react-redux";
import Styles from "./../../App.scss";
const Uuid = require('uuid/v1');


class Item extends Component {
  render() {
    return (
      <TouchableOpacity
        style={Styles.ci_itemBox}
        onPress={ this.props.onPress }
      >
      <Text style={Styles.ci_itemTitle}>
        {this.props.label}
      </Text>
      <Text style={Styles.ci_itemDescription}>
        {this.props.description}
      </Text>
     </TouchableOpacity>
    )
  }
}

export default Item;
