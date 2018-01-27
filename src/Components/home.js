import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, StatusBar, Dimensions } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import Image from 'react-native-remote-svg';
import { connect } from "react-redux";
import Styles from "./../../App.scss";
const Uuid = require('uuid/v1');
import Item from "./item";

var renderData = JSON.parse(`{
    "entries": [
      {
        "label": "Rollen (Statisches JSON)",
        "description" : "Eine Liste aller Rollen",
        "route": "roles",
        "param": ""
      },
      {
        "label": "Rollen (Cloud)",
        "description" : "Eine Liste aller Rollen",
        "route": "roles2",
        "param": ""
      },
      {
        "label": "Einstellungen",
        "description" : "Einstellungen von Circlead",
        "route": "settings",
        "param": "Settings parameter"
      }
    ]
}`);

class HomeView extends Component {

  static navigationOptions = {
    title: "Circlead",
    headerTintColor: Styles.ci_Header.color,
    headerStyle: {
      height: Styles.ci_Header.height,
      backgroundColor: Styles.ci_Header.backgroundColor
    },
    headerLeft: <Image source={require('./../../assets/logo.svg')} />
  };

  renderItem(item, navigation) {
    return (
      <Item key={Uuid()} label={item.label} description={item.description} onPress={ () => {
        const param = item.param;
        const route = item.route;
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
          { renderData.entries.map(item => this.renderItem(item, this.props.navigation)) }
        </ScrollView>
          <StatusBar barStyle="light-content" />
        </View>
    );
  }
}

export default HomeView;
