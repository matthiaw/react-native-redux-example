import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, StatusBar, Dimensions } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import Image from 'react-native-remote-svg';
import { connect } from "react-redux";
import Styles from "./../../App.scss";
const Uuid = require('uuid/v1');

var renderData = JSON.parse(`{
    "buttons": [
      {
        "label": "Rollen",
        "description" : "Eine Liste aller Rollen",
        "route": "roles",
        "param": "Roles Param"
      },
      {
        "label": "Einstellungen",
        "description" : "Einstellungen von Circlead",
        "route": "settings",
        "param": "Settings Param"
      },
      {
        "label": "Leer",
        "description" : "Eine leere Seite",
        "route": "empty",
        "param": "Empty Param"
      }
    ]
}`);

class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={Styles.circleadMainMenuItem}
        onPress={ this.props.onPress }
      >
      <Text style={Styles.circleadMenuTitle}>
        {this.props.label}
      </Text>
      <Text style={Styles.circleadMenuDescription}>
        {this.props.description}
      </Text>
     </TouchableOpacity>
    )
  }
}

class HomeView extends Component {

  static navigationOptions = {
    title: "Circlead",
    headerTintColor: Styles.circleadHeader.color,
    headerStyle: {
      height: Styles.circleadHeader.height,
      backgroundColor: Styles.circleadHeader.backgroundColor
    },
    headerLeft: <Image source={require('./../../assets/logo.svg')} />
  };

  renderButton(button, navigation) {
    return (
      <Button key={Uuid()} label={button.label} description={button.description} onPress={ () => {
        const param = button.param;
        const route = button.route;
        const navigateAction = NavigationActions.navigate({
          routeName: route,
          params: { name: param }
        });
        navigation.dispatch(navigateAction);
      }} />
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          { renderData.buttons.map(button => this.renderButton(button, this.props.navigation)) }
        </ScrollView>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

export default HomeView;
