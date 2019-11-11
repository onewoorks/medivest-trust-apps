import React from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/Home'
import AssetScannerScreen from '../screens/AssetScanner'
import LocationScannerScreen from '../screens/LocationScanner'
import ActivityHistoryScreen from '../screens/ActivityHistory'

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Detail"
  }
  render() {
    return (
      <View>
        <Text>Detail Screen</Text>
        <Button
          title="Go To Details..... again"
          onPress={()=> this.props.navigation.navigate('Details')}
         />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  AssetScanner: AssetScannerScreen,
  LocationScanner: LocationScannerScreen,
  ActivityHistory: ActivityHistoryScreen
},{
  initialScreen: 'Home'
})

export default createAppContainer(AppNavigator)