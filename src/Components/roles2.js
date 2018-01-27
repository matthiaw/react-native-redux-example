import React, { Component } from "react";
import { Text, View, TouchableOpacity, ListView, StatusBar, ScrollView } from "react-native";
import Styles from "./../../App.scss";
import Firebase from "./../Util/database";
import Item from "./item";
const Uuid = require('uuid/v1');
import { NavigationActions, SafeAreaView } from "react-navigation";
import { connect } from "react-redux";

var db = Firebase.firestore();
Firebase.firestore().enablePersistence();

const list = ['Loading...']

export default class Empty extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: this.ds.cloneWithRows(list)
    };

    this.roles = db.collection("roles").get();
    this.renderItem = this.renderItem.bind(this)
  }

  setItemsFromFirestore(roles) {
    roles.then((querySnapshot) => {
      // get children as an array
      var items = [];
      querySnapshot.forEach((child) => {
        items.push({
          label: `${child.data().label}`,
          description: `${child.data().description}`,
          id: `${child.id}`
        });
      });

      this.setState({
        dataSource: this.ds.cloneWithRows(items)
      });
    });
  }

  componentDidMount() {
    this.setItemsFromFirestore(this.roles);
  }

  renderItem(item, navigation) {
    return (
      <Item key={Uuid()} label={item.label} description={item.description} onPress={ () => {
        const param = item.param;
        const route = item.route;
        const navigateAction = NavigationActions.navigate({
          routeName: 'role',
          params: {
            label: `${item.label}`,
            id: `${item.id}`
          }
        });
        navigation.dispatch(navigateAction);
      }} />
    )
  }

  static navigationOptions = {
    title: "Rollen (Cloud)",
    headerTintColor: Styles.ci_Header.color,
    headerStyle: {
      height: Styles.ci_Header.height,
      backgroundColor: Styles.ci_Header.backgroundColor
    }
  };

  // https://console.firebase.google.com/u/0/project/circlead-f1cab/database/firestore/data~2Froles~2FNOa1SiMVzXgzpYL0upvg
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "blue" }}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={item => this.renderItem(item, this.props.navigation)} />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}
