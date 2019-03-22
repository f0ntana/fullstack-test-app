import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    form: {
        padding: 5,
    },
    label: {
        fontWeight: '700',
        marginBottom: 5,
    },
    input:{
        borderColor: 'orange',
        borderWidth: 2,
        padding: 10
    },
    inputTextArea:{
        height: 150,
        borderColor: 'orange',
        borderWidth: 2,
        padding: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#f4a354',
        marginHorizontal: 60,
        flexDirection: 'column',
        padding: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
});

export default styles;
