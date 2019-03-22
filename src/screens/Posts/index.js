import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import TitleHeader from '../../components/titleHeader';
import ItemCard from '../../components/itemCard';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    static navigationOptions = {
        headerLeft: <TitleHeader title="Posts" />,
        headerRight: (
            <TouchableOpacity style={{ paddingRight: 10 }}>
                <Icon name="add-circle-outline" color="#f4a354" size={30} />
            </TouchableOpacity>
        ),
        headerStyle: {
            fontSize: 30,
            backgroundColor: '#e4e4e4'
        }
    };

    async componentDidMount() {
        const url = `https://stormy-shelf-93141.herokuapp.com/articles`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ data });
        } catch (error) {
            alert(error);
        }
    }

    _keyExtractor = (item, index) => item.id.toString();

    _itemDetail = (item) => {
        this.props.navigation.navigate('Post', item);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={this.state.data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={ () => this._itemDetail(item)}>
                            <ItemCard key={item.id} item={item} index={index} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}
