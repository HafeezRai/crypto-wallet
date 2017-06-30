import { StackNavigator } from 'react-navigation'
import Expo from 'expo'
import Home from './drawerNavigator'
import Login from './../screens/auth/login'
import Signup from './../screens/auth/signup'
import AuthVerifyMobile from './../screens/auth/verifyMobile'
import ForgetPassword from './../screens/auth/forgetPassword'
import BankAccounts from './../screens/withdraw/bankAccounts'
import BitcoinAddresses from './../screens/withdraw/bitcoinAddresses'
import WithdrawalAmountEntry from './../screens/withdraw/amountEntry'
import SendMoney from './../screens/transfer/amountEntry'
import SendTo from './../screens/transfer/sendTo'
import QRcodeScanner from './../screens/transfer/qrcodeScanner'
import AccountCurrencies from './../screens/accounts/accountCurrencies'
import SettingsProfileImage from './../screens/settings/profileImage/profileImage'
import UploadImage from './../screens/settings/profileImage/uploadImage'
import SettingsPersonalDetails from './../screens/settings/personalDetails'
import SettingsMobileNumbers from './../screens/settings/mobileNumbers/mobileNumbers'
import AddMobileNumber from './../screens/settings/mobileNumbers/addMobileNumber'
import VerifyMobileNumber from './../screens/settings/mobileNumbers/verifyMobile'
import SettingsEmailAddresses from './../screens/settings/emailAddresses/emailAddresses'
import AddEmailAddress from './../screens/settings/emailAddresses/addEmailAddress'
import SettingsGetVerified from './../screens/settings/getVerified/getVerified'
import Document from './../screens/settings/getVerified/document'
import DocumentUpload from './../screens/settings/getVerified/documentUpload'
import SettingsAddress from './../screens/settings/address'
import SettingsBankAccounts from './../screens/settings/bankAccounts/bankAccounts'
import SettingsBitcoinAddresses from './../screens/settings/bitcoinAddresses/bitcoinAddresses'
import AddBankAccount from './../screens/settings/bankAccounts/addBankAccount'
import EditBankAccount from './../screens/settings/bankAccounts/editBankAccount'
import AddBitcoinAddress from './../screens/settings/bitcoinAddresses/addBitcoinAddress'
import EditBitcoinAddress from './../screens/settings/bitcoinAddresses/editBitcoinAddress'
import SettingsCards from './../screens/settings/cards'
import SettingsSecurity from './../screens/settings/security/security'
import ChangePassword from './../screens/settings/security/changePassword'
import TwoFactor from './../screens/settings/security/twoFactor'
import SettingsNotifications from './../screens/settings/notifications'

import CreditCard from './../screens/payment/creditCard'
import Sell from './../screens/sell/amountEntry'
import Buy from './../screens/buy/amountEntry'

const RouteConfigs = {
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
  AuthVerifyMobile: {
    screen: AuthVerifyMobile,
  },
  ForgetPassword: {
    screen: ForgetPassword,
  },
  Home: {
    screen: Home,
  },
  BankAccounts: {
    screen: BankAccounts,
  },
  BitcoinAddresses: {
    screen: BitcoinAddresses,
  },
  WithdrawalAmountEntry: {
    screen: WithdrawalAmountEntry,
  },
  SendMoney: {
    screen: SendMoney,
  },
  SendTo: {
    screen: SendTo,
  },
  QRcodeScanner: {
    screen: QRcodeScanner,
  },
  AccountCurrencies: {
    screen: AccountCurrencies,
  },
  SettingsProfileImage: {
    screen: SettingsProfileImage,
  },
  UploadImage: {
    screen: UploadImage,
  },
  SettingsPersonalDetails: {
    screen: SettingsPersonalDetails,
  },
  SettingsMobileNumbers: {
    screen: SettingsMobileNumbers,
  },
  AddMobileNumber: {
    screen: AddMobileNumber,
  },
  VerifyMobileNumber: {
    screen: VerifyMobileNumber,
  },
  SettingsEmailAddresses: {
    screen: SettingsEmailAddresses,
  },
  AddEmailAddress: {
    screen: AddEmailAddress,
  },
  SettingsGetVerified: {
    screen: SettingsGetVerified,
  },
  Document: {
    screen: Document,
  },
  DocumentUpload: {
    screen: DocumentUpload,
  },
  SettingsAddress: {
    screen: SettingsAddress,
  },
  SettingsBankAccounts: {
    screen: SettingsBankAccounts,
  },
  SettingsBitcoinAddresses: {
    screen: SettingsBitcoinAddresses,
  },
  AddBankAccount: {
    screen: AddBankAccount,
  },
  EditBankAccount: {
    screen: EditBankAccount,
  },
  AddBitcoinAddress: {
    screen: AddBitcoinAddress,
  },
  EditBitcoinAddress: {
    screen: EditBitcoinAddress,
  },
  SettingsCards: {
    screen: SettingsCards,
  },
  SettingsSecurity: {
    screen: SettingsSecurity,
  },
  ChangePassword: {
    screen: ChangePassword,
  },
  TwoFactor: {
    screen: TwoFactor,
  },
  SettingsNotifications: {
    screen: SettingsNotifications,
  },
    CreditCard: {
    screen: CreditCard,
  },
    Sell: {
    screen: Sell,
  },
}

export default StackNavigator(RouteConfigs, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#3C8DBC',
      paddingTop: Expo.Constants.statusBarHeight,
      height: 55 + Expo.Constants.statusBarHeight,
      borderColor: '#3C8DBC',
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
    headerTintColor: 'white',
  },
})
