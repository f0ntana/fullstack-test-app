import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

const InfoComponent = ({ item }) => {
    const html = item.article.substring(0, 60) + '...';
    const title = item.title.replace(/(<([^>]+)>)/ig,"")
        .replace(/(\r\n|\n|\r)/gm,"");

    return (
        <View style={styles.content}>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.title}>{title}</Text>
            <HTML html={html} imagesMaxWidth={Dimensions.get('window').width} />
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 8
    },
    author: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        color: '#f4a354'
    },
    description: {
        fontSize: 12
    }
});
export default InfoComponent;
