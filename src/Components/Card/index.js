
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';

let buttonWidth = ((Dimensions.get('window').width - 20) / 2) - 20

class Card extends Component {
    render() {
        let cardData = this.props.cardData
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.productImage}
                        source={{ uri: cardData.image }}
                    />
                </View>
                <View style={styles.Description}>
                    <Text style={styles.titleText}>{cardData.Description}</Text>
                    <Text style={styles.priceText}>${cardData.Price}</Text>
                    {this.props.from !== 'cart' ? (
                        <TouchableOpacity onPress={() => this.props.addToCart(cardData)} style={styles.button}>
                            <Text style={styles.cartText}>Add to cart</Text>
                        </TouchableOpacity>
                    ) : <View style={styles.countButton}>
                            <View style={styles.buttonAlign}>

                                <View style={styles.plusButton}>
                                    <Text style={styles.plusButtonText}>Quantity:{cardData.count}</Text>
                                </View>

                            </View>
                        </View>}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    productImage: {
        width: '100 %',
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    titleText: {
        fontSize: 20,
        textAlign: 'center'
    },
    cartText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginTop: 6
    },
    priceText: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    },
    imageContainer: {
        flex: 0.5,
        backgroundColor: 'yellow',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    Description: {
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor: 'pink',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    button: {
        width: 120,
        height: 40,
        marginTop: 30,
        alignSelf: 'center',
        backgroundColor: 'green',
        borderRadius: 10
    },
    countButton: {
        width: buttonWidth,
        height: 60,
        marginTop: 30,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10
    },
    buttonAlign: {
        flex: 1,
        flexDirection: 'row'
    },
    plusButton: {
        width: buttonWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusButtonText: {
        fontSize: 20,
        color: 'black'
    }
});

export default Card;
