import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: "Home",
        header: null
    }
    render(){
        return(
            <View >
                <View style={styles.hero_header}>
                </View> 

                <View style={styles.overlay_header}>
                    <Text>Overlay Header</Text>
                </View>

                <Button
                title="Go To Details"
                onPress={()=> this.props.navigation.navigate('Details')}
                />

                <Button 
                    title="Asset Activity"
                    onPress={()=> this.props.navigation.navigate('AssetScanner')}
                />

                <Button 
                    title="Location Activity"
                    onPress={()=> this.props.navigation.navigate('LocationScanner')}
                />

                <Button 
                    title="Activity History"
                    onPress={()=> this.props.navigation.navigate('ActivityHistory')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hero_header: {
        height: 220,
        backgroundColor: 'maroon',
    },
    overlay_header: {
        borderRadius: 5,
        marginTop: -30,
        marginLeft: 20,
        marginRight: 20,
        padding: 20,
        backgroundColor: 'white'
    }
})