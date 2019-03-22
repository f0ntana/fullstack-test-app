import React from 'react';
import { View, StyleSheet } from 'react-native';

import ImageComponent from './imageComponent';
import InfoComponent from './infoComponent';

const ItemCard = ({ item, index }) => {
    const odd = index % 2;
    let components = [
        <ImageComponent
            index="left"
            url={item.imageUrl}
            style={styles.image}
        />,
        <InfoComponent index="right" item={item} style={styles.infos} />
    ];
    if (!odd) {
        components = components.reverse();
    }
    return (
        <View
            style={[
                styles.container,
                odd ? styles.backgroundGray : styles.backgroundWhite
            ]}
        >
            {components}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    backgroundGray: {
        backgroundColor: '#edf0f0'
    },
    backgroundWhite: {
        backgroundColor: '#ffffff'
    },
    image: {
        flex: 4
    },
    infos: {
        flex: 6
    }
});

export default ItemCard;
