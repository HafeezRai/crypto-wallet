import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, TouchableHighlight, AsyncStorage, Text, Alert } from 'react-native'
import TransectionService from './../../services/transectionService'
import ResetNavigation from './../../util/resetNavigation'
import TextInput from './../../components/textInput'

export default class AmountEntry extends Component {
  static navigationOptions = {
    title: 'Withdraw',
  }

  constructor(props) {
    super(props);
    const params = this.props.navigation.state.params
    this.state = {
      amount: 0,
      reference: params.reference,
    }
  }

  withdraw = async () => {
    if (this.state.amount <= 0) {
      Alert.alert(
        'Invalid',
        'Enter valid amount',
        [[{ text: 'OK' }]]
      )
    }
    else {
      const data = await AsyncStorage.getItem('currency')
      const currency = JSON.parse(data)
      Alert.alert(
        'Are you sure?',
        ' you want to withdraw ' + currency.symbol + this.state.amount,
        [
          { text: 'Yes', onPress: this.withdrawConfirmed },
          { text: 'No', onPress: () => ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home"), style: 'cancel' },
        ]
      )
    }
  }

  changeAmount = (text) => {
    let amount = parseFloat(text)
    if (isNaN(amount)) {
      this.setState({ amount: 0 })
    }
    else {
      this.setState({ amount })
    }
  }

  withdrawConfirmed = async () => {
    const data = await AsyncStorage.getItem('currency')
    const currency = JSON.parse(data)
    let amount = this.state.amount
    for (let i = 0; i < currency.divisibility; i++) {
      amount = amount * 10
    }

    let responseJson = await TransectionService.withdraw(amount, this.state.reference)
    if (responseJson.status === "success") {
      Alert.alert('Success',
        "Transaction successful",
        [{ text: 'OK', onPress: () => ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home") }])
    }
    else {
      Alert.alert('Error',
        responseJson.message,
        [{ text: 'OK' }])
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={70}>
        <View style={{ flex: 1 }}>
          <TextInput
            title="Amount"
            placeholder="Enter amount here"
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={this.changeAmount}
          />
        </View>
        <TouchableHighlight
          style={styles.submit}
          onPress={this.withdraw}>
          <Text style={{ color: 'white', fontSize: 18 }}>
            Withdraw
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
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
})
