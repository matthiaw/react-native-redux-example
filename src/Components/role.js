import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, StatusBar, StyleSheet } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import Styles from "./../../App.scss";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RoleContent = ({ navigation, banner }) => (
  <View style={{ flex: 1, backgroundColor: "magenta" }}>
    <ScrollView style={{ flex: 1 }}>
      <Text>{banner}</Text>
    </ScrollView>
  </View>
);

const RoleView = ({ navigation }) => (
  <RoleContent
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
    headerTintColor: Styles.ci_Header.color,
    headerStyle: {
      height: Styles.ci_Header.height,
      backgroundColor: Styles.ci_Header.backgroundColor
    },
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerRight: (
        <FontAwesome
          name= {params.mode === 'edit' ? 'save' : 'edit'}
          size={18}
          style={{ color: Styles.ci_Header.color, paddingHorizontal: 5}}
          onPress={() => navigation.setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
        />
    ),
  };
};

export default RoleView;
