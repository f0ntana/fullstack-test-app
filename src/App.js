import React from 'react';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Posts from './screens/Posts';
import Detail from './screens/Detail';
import Contacts from './screens/Contacts';

const Feed = createStackNavigator({
    Posts: {
        screen: Posts
    },
    Post: {
        screen: Detail
    }
});

const Contact = createStackNavigator({
    Contact: {
        screen: Contacts
    }
});

const MainNavigator = createBottomTabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon name="web" color={tintColor} size={24} />
            ),
            tabBarOptions: {
                showLabel: false,
                activeTintColor: '#f4a354',
                inactiveTintColor: '#c5c5c5',
                style: {
                    backgroundColor: '#3a3a3a'
                }
            }
        })
    },
    Contact: {
        screen: Contact,
        navigationOptions: () => ({
            tabBarOptions: {
                showLabel: false,
                activeTintColor: '#34a5df',
                inactiveTintColor: '#c5c5c5',
                style: {
                    backgroundColor: '#3a3a3a'
                }
            },
            tabBarIcon: ({ tintColor }) => (
                <Icon name="chat" color={tintColor} size={24} />
            )
        })
    }
});

const App = createAppContainer(MainNavigator);

export default App;
