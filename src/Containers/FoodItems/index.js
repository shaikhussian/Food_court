
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';

import { connect } from 'react-redux';
import FoodItem from '../FoodItem';

class FoodItems extends Component {
    state = {
        food: this.props.food,
        cart: this.props.cart
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.from === 'cart' ? this.state.cart : this.state.food}
                    renderItem={({ item }) => <FoodItem item={item} addToCart={this.props.addToCart} from={this.props.from} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


const mapStateToProps = state => {
    return {
        food: state.food.initialState,
        cart: state.cart
    };
};


export default connect(
    mapStateToProps
)(FoodItems);

