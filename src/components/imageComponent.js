import React from 'react';
import { View, Image } from 'react-native';

const ImageComponent = ({ url }) => {
    return <Image style={{ width: 160, height: 160 }} source={{ uri: url }} />;
};
export default ImageComponent;
