import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

import ButtonAtHome from '../components/button_at_home'

export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: "Home",
        header: null
    }
    render(){
        return(
            <View >
                <View style={styles.hero_header}>
                    <Text style={styles.user_name}>
                        IRWAN IBRAHIM
                    </Text>
                    <Text style={styles.user_position}>
                    Application Developer
                    </Text>
                </View> 

                <View style={styles.overlay_header}>
                    <ButtonAtHome 
                        title="Asset Scanner" 
                        navigation={this.props.navigation}
                        screen="AssetScanner" />
                    <ButtonAtHome title="Location Scanner"
                        navigation={this.props.navigation}
                        screen="LocationScanner"/>
                    <ButtonAtHome 
                        title="Activity History"
                        navigation={this.props.navigate}
                        screen="ActivityHistory" />
                    <ButtonAtHome 
                        title="Upload Activity"
                        navigation={this.props.navigate}
                        screen="ActivityHistory" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hero_header: {
        height: 260,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
    },
    overlay_header: {
        borderRadius: 5,
        marginTop: -30,
        marginLeft: 13,
        marginRight: 13,
        padding: 10,
        backgroundColor: 'white'
    },
    user_name: {
        color: 'white',
        fontSize:22
    },
    user_position: {
        fontSize:16,
        color: 'white'
    }
})