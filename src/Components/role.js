import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, StatusBar, StyleSheet } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import Styles from "./../../App.scss";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RoleScreen = ({ navigation, banner }) => (
  <View style={{ flex: 1, backgroundColor: "magenta" }}>
    <ScrollView style={{ flex: 1 }}>
      <Text>{banner}</Text>
    </ScrollView>
  </View>
);

const RoleView = ({ navigation }) => (
  <RoleScreen
    banner={`${navigation.state.params.mode === 'edit'
      ? 'Editiere '
      : ''} ID: (${navigation.state.params.id})`}
    navigation={navigation}
  />
);

RoleView.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `${params.label}`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerTintColor: Styles.circleadHeader.color,
    headerStyle: {
      height: Styles.circleadHeader.height,
      backgroundColor: Styles.circleadHeader.backgroundColor
    },
    headerRight: (
        <FontAwesome
          name= {params.mode === 'edit' ? 'save' : 'edit'}
          size={18}
          style={{ color: Styles.circleadHeader.color, paddingHorizontal: 5}}
          onPress={() => navigation.setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
        />
    ),
  };
};

export default RoleView;
