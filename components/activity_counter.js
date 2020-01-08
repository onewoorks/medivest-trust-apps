import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

export default class ActivityCounter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.counter_item}>
                    <Text style={styles.counter_item_text}>Item Scanned</Text>
                    <Text style={styles.counter_item_number}>0</Text>
                </View>
                <View style={styles.counter_border}></View>
                <View style={styles.counter_item }>
                    <Text style={styles.counter_item_text}>Activity Scanned</Text>
                    <Text style={styles.counter_item_number}>0</Text>
                </View>
                <View style={styles.counter_border}></View>
                <View style={styles.counter_item}>
                    <Text style={styles.counter_item_text}>100%</Text>
                    <Text style={styles.counter_item_number}>0</Text>
                </View>
                <View style={styles.counter_border}></View>
                <View style={styles.counter_item}>
                    <Text style={styles.counter_item_text}>Not 100%</Text>
                    <Text style={styles.counter_item_number}>0</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        marginBottom: 10
    },
    counter_border: {
        borderLeftWidth: 1,
        borderColor: '#dedede',
        height:80
    },
    counter_item: {
        flex: 1,
        padding: 10,
    },
    counter_item_text: {
        textAlign: 'center',
        fontSize: 12,
        color: 'grey',
        height:40
    },
    counter_item_number: {
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'bold',
    }
})
