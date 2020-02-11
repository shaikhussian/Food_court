
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Header extends Component {
    state = {
        selected: 'Default'
    }
    async selectCustomer(customer) {
        this.setState({
            selected: customer
        })
        await this.props.handleCustomer(customer)
    }
    render() {
        return (
            <View>
                <View style={styles.Header}>
                    <View style={styles.Row}>
                        <View style={styles.RowAlign}>
                            <TouchableOpacity style={styles.option} onPress={() => this.selectCustomer('Default')}>
                                <View style={styles.optionRow}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={this.state.selected === 'Default' ? require('../../images/checked.png')
                                            : require('../../images/unchecked.png')}
                                    />
                                    <Text style={{ fontSize: 20, marginLeft: 5, color: 'black' }}>Default</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => this.selectCustomer('Infosys')}>
                                <View style={styles.optionRow}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={this.state.selected === 'Infosys' ? require('../../images/checked.png')
                                            : require('../../images/unchecked.png')}
                                    />
                                    <Text style={{ fontSize: 20, marginLeft: 5, color: 'black' }}>Infosys</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Row}>
                        <View style={styles.RowAlign}>
                            <TouchableOpacity style={styles.option} onPress={() => this.selectCustomer('Amazon')}>
                                <View style={styles.optionRow}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={this.state.selected === 'Amazon' ? require('../../images/checked.png')
                                            : require('../../images/unchecked.png')}
                                    />
                                    <Text style={{ fontSize: 20, marginLeft: 5, color: 'black' }}>Amazon</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => this.selectCustomer('Facebook')}>
                                <View style={styles.optionRow}>
                                    <Image
                                        style={{ width: 30, height: 30 }}
                                        source={this.state.selected === 'Facebook' ? require('../../images/checked.png')
                                            : require('../../images/unchecked.png')}
                                    />
                                    <Text style={{ fontSize: 20, marginLeft: 5, color: 'black' }}>Facebook</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        height: 80,
        width: Dimensions.get('window').width,
        backgroundColor: 'red'
    },
    Row: {
        height: 40
    },
    RowAlign: {
        flex: 1,
        flexDirection: 'row'
    },
    option: {
        width: Dimensions.get('window').width / 2,
        height: 40
    },
    optionRow: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 10
    }
});

export default Header;
