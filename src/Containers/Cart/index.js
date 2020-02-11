
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Footer from '../../Components/Footer';
import FoodItems from '../FoodItems';
import { connect } from 'react-redux';

class App extends Component {
    handleCart = () => {
        this.props.navigation.navigate('Cart')
    }
    increaseCount = (item) => {
        alert("item_123", JSON.stringify(item))
    }
    decreaseCount = (item) => {
        alert("item_1234", JSON.stringify(item))
    }
    render() {
        return (
            <View style={styles.mainApp}>
                <View style={styles.container}>
                    <FoodItems from={'cart'} increaseCount={this.increaseCount} decreaseCount={this.decreaseCount} />
                </View>
                <Footer handlingCart={this.handleCart} from={'cart'} cartData={this.props.cart} />
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (item) => {
            dispatch(addItemToCart(item));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

