import React, { Component } from "react";
import { Text, View, TouchableOpacity, TouchableHighlight, ScrollView, StatusBar, StyleSheet } from "react-native";
import { NavigationActions, SafeAreaView } from "react-navigation";
import Styles from "./../../App.scss";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Firebase from "./../Util/database";
var t = require('tcomb-form-native');
var db = Firebase.firestore();
var Form = t.form.Form;
var lodash = require('lodash');

const stylesheet = lodash.cloneDeep(Form.stylesheet);

// See https://github.com/gcanti/tcomb-form-native/blob/master/lib/templates/bootstrap/textbox.js
stylesheet.controlLabel.normal = Styles.ci_formLabel;

const options = {
  stylesheet: stylesheet
};

var RoleForm = t.struct({
  // Id is hidden, because it should not be editable
  label: t.String,                // a required string
  description: t.maybe(t.String)  // an optional string
});

class RoleView extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    const navigation = this.props.navigation;
    const params = navigation.state.params;

    if (params.mode === 'edit') {
      var formValues = this.refs.form.getValue(); // get values from form
      if (formValues) { // if validation fails, value will be null
        // get correct dataset from cloud
        var docRef = db.collection("roles").doc(`${params.id}`);

        // set data from form
        var data = {
          label: `${formValues.label}`,
          description: `${formValues.description}`,
          id: `${params.id}`
        };

        // Update cloud-document
        docRef.update(data);

      }

      // set navigation-params to actual values
      navigation.setParams(formValues);

    }

    // switch the edit-mode
    navigation.setParams({ mode: params.mode === 'edit' ? '' : 'edit' })
  }

  render() {
      const navigation = this.props.navigation;
      const params = navigation.state.params;

      let viewMode = null;

      if (params.mode === 'edit') {
        // View to Edit the role
        viewMode = <View style={Styles.ci_formContainer}>
          <Form
            ref="form"
            type={RoleForm}
            options={options}
            value={params}
          />
        </View>
      } else {
        // View to show the role
        viewMode =
          <View style={Styles.ci_formContainer}>
            <Text style={Styles.ci_formLabel}>ID</Text>
            <Text>{params.id}</Text>
            <Text style={Styles.ci_formLabel}>Label</Text>
            <Text>{params.label}</Text>
            <Text style={Styles.ci_formLabel}>Description</Text>
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
              onPress={() => params.handleEdit()}
            />
        ),
      };
    };
}

export default RoleView;
