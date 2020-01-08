import React from "react"
import { Text, View, StyleSheet, Button, Dimensions } from "react-native"
import * as Permissions from "expo-permissions"
import { BarCodeScanner } from "expo-barcode-scanner"
import AssetInformation from '../components/asset_information'

// import styles from '../themes/styles.js';

const activity = [
    {
        qr_code: "AA0100000001",
        activity: [
            {
                name: "Battery Check",
                qr_code: "AA0100000001_01000003"
            }
        ],
        asset_no: "NSN001/000047"
    },
    {
        qr_code: "AA0100000002",
        activity: [
            {
                name: "Power Supply (PSU) - Cleaning",
                qr_code: "AA0100000002_01000001"
            },
            {
                name: "Battery Check",
                qr_code: "AA0100000002_01000003"
            }
        ],
        asset_no: "NSN001/000109"
    }
]

const { width } = Dimensions.get("window")
const qrSize = width * 0.7
class AssetScannerScreen extends React.Component {
    static navigationOptions = {
        title: "Asset Scanner"
    }

    state = {
        hasCameraPermission: null,
        scanned: false,
        scanned_item : activity[1]
    }

    async componentDidMount() {
        this.getPermissionsAsync()
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermission: status === "granted"
        })
    }

    show_result = result => {
        let find = activity.find(o => o.qr_code == result)
        console.log(find)
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true })
        this.show_result(data)

        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }
    renderX() {
        const { hasCameraPermission, scanned } = this.state
        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>
        }

        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>
        }

        return (
            <View>
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned ? undefined : this.handleBarCodeScanned
                    }
                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                    style={StyleSheet.absoluteFillObject}
                    style={[StyleSheet.absoluteFill, styles.container]}
                >
                    <Text style={styles.description}>Scan your QR code</Text>

                    <Text
                        onPress={() => this.props.navigation.pop()}
                        style={styles.cancel}
                    >
                        Cancel
                    </Text>
                </BarCodeScanner>

                {scanned && (
                    <Button
                        title={"Tap to Scan Again"}
                        onPress={() => this.setState({ scanned: false })}
                    />
                )}
                <View style={styles.box_asset}>
                    <AssetInformation asset={this.state.scanned_item} />
                </View>
            </View>
        ) 
    }

    render(){
        return (
            <AssetInformation asset={this.state.scanned_item} />
        )
    }
}

let wwidth = width * 0.05

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    qr: {
        marginTop: "20%",
        marginBottom: "20%",
        width: qrSize,
        height: qrSize
    },
    description: {
        fontSize: wwidth,
        marginTop: "10%",
        textAlign: "center",
        width: "70%",
        color: "white"
    },
    cancel: {
        fontSize: wwidth,
        textAlign: "center",
        width: "70%",
        color: "white"
    },
    box_asset: {
        height: 260,
  alignItems: 'center',
  alignContent: 'flex-start',
    }
})

export default AssetScannerScreen
