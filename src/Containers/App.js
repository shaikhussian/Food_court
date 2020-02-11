
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { addItemToCart } from '../actions/cart';
import { handleCustomer } from '../actions/food';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import FoodItems from '../Containers/FoodItems';
import { connect } from 'react-redux';

class App extends Component {
    handleCart = () => {
        this.props.navigation.navigate('Cart')
    }
    addToCart = async (item) => {
        let cartState = this.props.cart
        let selectedCustomer = this.props.selected
        let cartItem = item
        await this.props.addItemToCart(cartItem, cartState, selectedCustomer);
    }

    handleCustomer = async (customer) => {
        await this.props.handleCustomer(customer)
    }
    render() {
        return (
            <View style={styles.mainApp}>
                <Header handleCustomer={this.handleCustomer} />
                <View style={styles.container}>
                    <FoodItems addToCart={this.addToCart} />
                </View>
                <Footer handlingCart={this.handleCart} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainApp: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    headerText: {
        fontSize: 20,
        color: 'black'
    }
});



const mapStateToProps = state => {
    return {
        cart: state.cart,
        selected: state.food.selectedCustomer
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (item, cartState, selectedCustomer) => {
            dispatch(addItemToCart(item, cartState, selectedCustomer));
        },
        handleCustomer: (customer) => {
            dispatch(handleCustomer(customer));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

