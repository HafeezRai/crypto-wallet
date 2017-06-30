import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native'
import TextInput from './../../components/textInput'

export default class AmountEntry extends Component {
  static navigationOptions = {
    title: 'Buy',
  }

  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      note: '',
    }
  }

  next = () => {
    if (this.state.amount <= 0) {
      Alert.alert(
        'Invalid',
        'Enter valid amount',
        [[{ text: 'OK' }]]
      )
    }
    else {
      this.props.navigation.navigate("CreditCard", { amount: this.state.amount, note: this.state.note, reference: '' })
    }
  }


  amountChanged = (text) => {
    let amount = parseFloat(text)
    if (isNaN(amount)) {
      this.setState({ amount: 0 })
    }
    else {
      this.setState({ amount })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={70}>
        <View style={{ flex: 1 }}>
          <TextInput
            title="ZAR"
            placeholder="Amount in rands"
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={this.amountChanged}
          />
          <TextInput
            title="BTC"
            placeholder="Amount in bitcoin"
            autoCapitalize="none"
            onChangeText={(note) => this.setState({ note })}
          />
        </View>
        <TouchableHighlight
          style={styles.submit}
          onPress={this.next}>
          <Text style={{ color: 'white', fontSize: 20 }}>
            Next
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  submit: {
    padding: 10,
    height: 65,
    backgroundColor: '#3C8DBC',
    width: "100%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    width: "100%",
    padding: 10,
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
})
