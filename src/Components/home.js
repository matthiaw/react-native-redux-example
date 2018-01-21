import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import Image from 'react-native-remote-svg';
import { connect } from "react-redux";
import Styles from "./../../App.scss";

class Button extends Component {

  render() {
    return (
      <TouchableOpacity
       style={Styles.circleadMainMenuItem}
       onPress={this.props.onPress}
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
      backgroundColor: Styles.circleadHeader.backgroundColor
    },
    headerLeft: <Image source={require('./../../assets/logo.svg')} />
  };

  navigateRoles = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "roles",
      params: { name: "Parameter Roles" }
    });
    this.props.navigation.dispatch(navigateAction);
  };

  navigateSettings = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "settings",
      params: { name: "Parameter Settings" }
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
           <Button label="Rollen" description="Liste aller Rollen" onPress={this.navigateRoles} />
           <Button label="Einstellungen" description="Einstellungen für Circlead" onPress={this.navigateSettings} />
      </ScrollView>
      <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

export default HomeView;
