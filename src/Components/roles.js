import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import Styles from "./../../App.scss";
import { connect } from "react-redux";
const Uuid = require('uuid/v1');

var renderData = JSON.parse(`{
    "roles": [
      {
        "id": "3ce12460-007d-11e8-beca-e9d3165058c2",
        "label": "Rolle B",
        "description" : "bbbb bbbb b bbbb b b b "
      },
      {
        "id": "31ece1c0-007d-11e8-beca-e9d3165058c2",
        "label": "Rolle A",
        "description" : "a aaaaa a a a a a a"
      },
      {
        "id": "34e4ec10-007d-11e8-beca-e9d3165058c2",
        "label": "Rolle C",
        "description" : "c c c cccccc cc c "
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

export default class Roles extends Component {

  static navigationOptions = {
    title: "Rollen",
    headerTintColor: Styles.circleadHeader.color,
    headerStyle: {
      height: Styles.circleadHeader.height,
      backgroundColor: Styles.circleadHeader.backgroundColor
    }
  };

    renderButton(button, navigation) {
      return (
        <Button key={Uuid()} label={button.label} description={button.description} onPress={ () => {
          const id = button.id;
          const navigateAction = NavigationActions.navigate({
            routeName: 'role',
            params: {
              label: `${button.label}`,
              id: `${button.id}`
            }
          });
          navigation.dispatch(navigateAction);
        }} />
      )
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: "pink" }}>
          <ScrollView style={{ flex: 1 }}>
            <Text>{this.props.navigation.state.params.name}</Text>
            { renderData.roles.map(button => this.renderButton(button, this.props.navigation)) }
          </ScrollView>
          <StatusBar barStyle="light-content" />
        </View>
      );
    }


}
