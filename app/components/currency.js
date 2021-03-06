import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'

export default class Account extends Component {
  constructor(props) {
    super(props);
    const color = this.props.data.active === true ? '#EBEBEB' : '#38C87F'
    this.state = {
      balance: 0,
      color,
    }
  }

  componentWillMount() {
    this.setBalance(this.props.data.balance, this.props.data.currency.divisibility)
  }

  setBalance = (balance, divisibility) => {
    for (let i = 0; i < divisibility; i++) {
      balance = balance / 10
    }

    this.setState({ balance })
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.options} >
        <View style={styles.optionsElement}>
          <View style={styles.icon}>
            <Image
              source={require('./../../assets/icons/placeholder.png')}
              style={{height:40, width:40}}
            />
          </View>
          <View style={styles.type}>
            <Text style={{ fontSize: 18 }}>
              {this.props.data.currency.code}
            </Text>
            <Text style={{ fontSize: 14 }}>
              {this.props.data.currency.symbol + ' ' + this.state.balance}
            </Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableHighlight
              style={[styles.button, { backgroundColor: this.state.color }]}
              onPress={this.props.data.active === true ? null : (code) => this.props.setActive(this.props.data.currency.code)} >
              <Text style={{ color: 'white', fontSize: 20 }}>
                Active
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  options: {
    height: 80,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  optionsElement: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  type: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonView: {
    flex: 1,
    padding:10,
    paddingLeft:0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
})
