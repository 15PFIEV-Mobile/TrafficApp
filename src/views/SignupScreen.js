import React, { Component } from "react";

import styles from "./styles/login.style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Button, TouchableOpacity} from 'react-native';

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email:'',
      password: '',
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Traffic App</Text>
          <TextInput 
              placeholder="Email" 
              placeholderColor="#c4c3cb" 
              style={styles.loginFormTextInput} 
              onChangeText={value => this.setState({email: value.trim()})}              
            />
            <TextInput 
              placeholder="Username" 
              placeholderColor="#c4c3cb" 
              style={styles.loginFormTextInput} 
              onChangeText={value => this.setState({username: value.trim()})}              
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={value => this.setState({password: value.trim()})}
            />
            <View style={styles.loginButton}>
              <Button               
                onPress={() => this.onSignupPress()}
                title="Sign Up"
              />
            </View>       
          </View>         
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  onSignupPress() {
    const {email, username, password} = this.state;
    fetch("http://210.211.116.133:9000/registration/user", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({      
        username: username,
        password: password,
        email: email,
      }),
    })
    .then((response) => response.json())
    .then((responseData) => {
      alert(responseData.message);
    })
    .done();
  }
}
