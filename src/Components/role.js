import React, { Component } from "react";
import { Text, View, TouchableOpacity, TouchableHighlight, ScrollView, StatusBar, StyleSheet } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import Styles from "./../../App.scss";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var t = require('tcomb-form-native');
var Form = t.form.Form;

var RoleForm = t.struct({
  label: t.String,              // a required string
  description: t.maybe(t.String)  // an optional string
});

var formOptions = {}; // optional rendering options (see documentation)

class RoleView extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {

    const navigation = this.props.navigation;
    const params = navigation.state.params;

    if (params.mode === 'edit') {
      //console.log("Submit called");
      // call getValue() to get the values of the form
      var formValues = this.refs.form.getValue();
      if (formValues) { // if validation fails, value will be null
        console.log(formValues); // value here is an instance of Person
      }

      navigation.setParams(formValues);

    }

    navigation.setParams({ mode: params.mode === 'edit' ? '' : 'edit' })
  }

  render() {
      const navigation = this.props.navigation;
      const params = navigation.state.params;
  
      let viewMode = null;

      if (params.mode === 'edit') {
        viewMode = <View>
          <Text>{params.id}</Text>
          <Form
            ref="form"
            type={RoleForm}
            options={formOptions}
            value={params}
          />

        </View>
      } else {
        viewMode =
          <View>
            <Text>{params.id}</Text>
            <Text>{params.label}</Text>
            <Text>{params.description}</Text>
          </View>
      }

      return (
        <View>
         {viewMode}
       </View>
      )
    }

    componentDidMount () {
      this.props.navigation.setParams({ handleEdit: this.submitForm })
    }

    static navigationOptions = props => {
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
              onPress={() => params.handleEdit()
              }
            />
        ),
      };
    };
}


export default RoleView;
