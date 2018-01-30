import React, { Component } from "react";
import { Text, View, TouchableHighlight, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import Styles from "./../../App.scss";
import { connect } from "react-redux";
const Uuid = require('uuid/v1');
import Item from "./item";

var renderData = JSON.parse(`{
    "roles": [
      {
        "id": "3ce12460-007d-11e8-beca-e9d3165058c2",
        "label": "Rolle B",
        "description" : "Description of role B."
      },
      {
        "id": "31ece1c0-007d-11e8-beca-e9d3165058c2",
        "label": "Rolle A",
        "description" : "Description of role A."
      },
      {
        "id": "34e4ec10-007d-11e8-beca-e9d3165058c2",
        "label": "Rolle C",
        "description" : "Description of role C."
      }
    ]
}`);

export default class Roles extends Component {

  static navigationOptions = {
    title: "Rollen (Statisches JSON)",
    headerTintColor: Styles.ci_Header.color,
    headerStyle: {
      height: Styles.ci_Header.height,
      backgroundColor: Styles.ci_Header.backgroundColor
    }
  };

    renderItem(item, navigation) {
      return (
        <Item key={Uuid()} label={item.label} description={item.description} onPress={ () => {
          const param = item.param;
          const route = item.route;
          const navigateAction = NavigationActions.navigate({
            routeName: 'role',
            params: {
              label: `${item.label}`,
              description: `${item.description}`,
              id: `${item.id}`
            }
          });
          navigation.dispatch(navigateAction);
        }} />
      )
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: "red" }}>
          <ScrollView style={{ flex: 1 }}>
            { renderData.roles.map(item => this.renderItem(item, this.props.navigation)) }
          </ScrollView>
          <StatusBar barStyle="light-content" />
        </View>
      );
    }

}
