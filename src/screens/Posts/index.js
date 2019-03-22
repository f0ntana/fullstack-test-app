import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import TitleHeader from '../../components/TitleHeader';
import ItemCard from '../../components/ItemCard';

const limit = 8;

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 1,
            loading: false,
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

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        if (this.state.loading) return;

        const { page } = this.state;

        this.setState({ loading: true });

        const url = `https://stormy-shelf-93141.herokuapp.com/articles?_page=${page}&_limit=${limit}`;

        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            data: [ ...this.state.data, ...data ],
            page: page + 1,
            loading: false,
        });
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
                    onEndReached={this.loadData}
                    onEndReachedThreshold={0.1}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={ () => this._itemDetail(item)}>
                            <ItemCard item={item} index={index} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}
