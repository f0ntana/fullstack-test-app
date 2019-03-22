import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class Contacts extends Component {
    static navigationOptions = {
        title: 'Contact'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text> Contacts </Text>
            </View>
        );
    }
}
