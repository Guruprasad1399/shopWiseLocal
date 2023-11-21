import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        padding: 20,
    },
    input: {
        width: '90%',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 15,
        backgroundColor: '#E8E8E8',
        fontSize: 16,
    },
    button: {
        width: '90%',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { height: 2, width: 0 },
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;
