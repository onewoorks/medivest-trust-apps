import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';

export default class ButtonAtHome extends Component {

    press_button = () => {
        this.props.navigation.navigate(this.props.screen)
    }

    render(){
        return(
            <View style={styles.box_button}>
                <TouchableOpacity 
                onPress={() => this.press_button()}>
                    <Text 
                        style={styles.box_text_center}
                        >
                        {this.props.title}
                        </Text>
                </TouchableOpacity>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box_button : {
        paddingTop: 25,
        paddingBottom: 25,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 4,
        borderColor: '#dedede',
        borderWidth: 1
    },
    box_text_center : {
        textAlign: 'center',
        textTransform: 'uppercase'
    }   
})