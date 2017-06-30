import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import Home from './../screens/home/home'
import Deposit from './../screens/deposit/deposit'
import Settings from './../screens/settings/settings'
import Withdraw from './../screens/withdraw/withdraw'
import About from './../screens/about/about'
import Accounts from './../screens/accounts/accounts'
import Receive from './../screens/receive/receive'
import Logout from './../screens/auth/logout'
import DrawerButton from './../components/drawerButton'
import DrawerHeader from './../components/drawerHeader'
import Sell from './../screens/sell/amountEntry'
import Buy from './../screens/buy/amountEntry'

const RouteConfigs = {
  Home: {
    screen: Home,
  },
  Buy: {
    screen: Buy,
  },
  Sell: {
    screen: Sell,
  },
  Logout: {
    screen: Logout,
  },
}

const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <DrawerHeader />
    <ScrollView>
      <DrawerItems
        {...props}
        activeTintColor="white"
        activeBackgroundColor="#2070A0"
        inactiveTintColor="white"
        inactiveBackgroundColor="transparent"
        labelStyle={{ margin: 15, alignItems: 'center', fontSize: 18, fontWeight: 'normal' }}
      />
    </ScrollView>
  </View>
)

export default DrawerNavigator(RouteConfigs, {
  drawerWidth: 300,
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
    headerLeft: <DrawerButton navigation={navigation} />,
    headerTintColor: 'white',
  }),
  contentComponent: CustomDrawerContentComponent,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C8DBC',
  },
})
