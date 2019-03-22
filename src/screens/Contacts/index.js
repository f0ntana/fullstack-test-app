import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TitleHeader from '../../components/TitleHeader';

import styles from './styles';

export default class Contacts extends Component {
    static navigationOptions = {
        headerLeft: <TitleHeader title="Contact" />,
    };

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    _onPress = () => {
        console.log(123)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Fill your name"
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                    />
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Fill a valid e-mail"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Fill your phone"
                        onChangeText={(phone) => this.setState({phone})}
                        value={this.state.phone}
                    />
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>Message</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        placeholder="Hello..."
                        onChangeText={(message) => this.setState({message})}
                        value={this.state.message}
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this._onPress()}>
                    <Text style={styles.buttonText}>
                        <Icon name="send" color="#fff" size={20} />{' '}Submit
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}
