
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import Card from "./../../Components/Card";

class FoodItem extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Card cardData={this.props.item} addToCart={this.props.addToCart} from={this.props.from} increaseCount={this.props.increaseCount} decreaseCount={this.props.decreaseCount} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height / 3,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10
    }
});

export default FoodItem;
