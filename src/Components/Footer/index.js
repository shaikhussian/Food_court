
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Footer extends Component {
    render() {
        let cartData = this.props.cartData
        let Total = 0
        if (this.props.from === 'cart') {
            cartData.map((product) => {
                Total = Total + product.Price
            })
        }
        return (
            <View>
                {this.props.from !== 'cart' ? (
                    <TouchableOpacity onPress={this.props.handlingCart} style={styles.Footer}>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Cart</Text>
                        </View>
                    </TouchableOpacity>
                ) : (<View style={styles.Footer}>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Total:{Total}</Text>
                    </View>
                </View>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Footer: {
        height: 64,
        width: Dimensions.get('window').width,
        backgroundColor: 'red'
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default Footer;
