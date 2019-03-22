import React from 'react';
import { Text, View, Dimensions, Image, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';

import styles from './styles'

const Detail = (props) => {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    const item = props.navigation.state.params
    const title = item.title
        .replace(/(<([^>]+)>)/ig,"")
        .replace(/(\r\n|\n|\r)/gm,"");

    const image = item.imageUrl;

    return (
        <ScrollView style={styles.container}>
            <View>
                <Image style={{ height: imageHeight, width: imageWidth }} source={{ uri: image }} />
            </View>
            <View style={styles.infos}>
                <Text style={styles.title}>{title}</Text>
                <Text>Posted by: <Text style={styles.author}>{item.author}</Text></Text>
                <HTML html={item.article} imagesMaxWidth={Dimensions.get('window').width} />
            </View>
        </ScrollView>
    )
};

export default Detail;

