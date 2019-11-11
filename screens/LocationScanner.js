import React from 'react';
import {Text, View } from 'react-native';

class LocationScanner extends React.Component {
    static navigationOptions = {
        title: "Location Scanner"
    }
    render(){
        return(
            <View>
                <Text>Location Scanner</Text>
            </View>
        )
    }
}

export default LocationScanner