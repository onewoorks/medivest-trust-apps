import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default class AssetInformation extends Component {
    state = {
        asset: this.props.asset,
        activity_list: []
    }

    componentWillMount() {
        this.activity_to_perform()
    }

    activity_to_perform = () => {
        let activities = this.state.asset.activity
        activities.map((obj, index)=>{
            this.state.activity_list.push(
                <View 
                    key={index} 
                    style={styles.activity_box}
                >
                    <View style={styles.activity_box_card}>
                    <View>
                        <Text>{obj.name}</Text>
                        <Text style={styles.activity_box_text_time_captured}>10.20am, 2 December 2019</Text>
                    </View>
                    <View><Text>o</Text></View>
                    </View>
                    
                    
                </View>
            )
        })
    }
    
    render(){
        // this.activity_to_perform()
        return(
            <View style={styles.container}>
                <Text
                    style={styles.asset_name} 
                    >
                    {this.state.asset.qr_code}
                </Text>
                <Text style={styles.asset_no}>
                    {this.state.asset.asset_no}
                </Text>

                <View style={styles.activity_list_box}>
                    { this.state.activity_list }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    asset_name: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    asset_no: {
        textAlign: 'center',
        fontSize: 13
    },
    activity_box: {
        width: Dimensions.get('window').width - 20,
        borderWidth: 1,
        borderTopColor: '#dedede',
        borderBottomColor: '#dedede',
        borderRightColor: '#dedede',
        borderLeftColor: 'purple',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        borderLeftWidth: 6,
        borderRadius: 6
        
    },
    activity_list_box: {
        marginTop: 20
    },
    activity_box_card: {
        flexDirection: 'row',
        justifyContent : 'space-between'
    },
    activity_box_title: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
    },
    activity_box_completion: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto'
    },
    activity_box_text_time_captured: {
        fontSize:12
    }

})