import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const DrawerButton = ({ navigation }) => (
  <TouchableOpacity style={{padding: 10}}>
    <Icon
      name="ios-menu-outline"
      size={30}
      color="white"
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  </TouchableOpacity>
)

DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default DrawerButton
