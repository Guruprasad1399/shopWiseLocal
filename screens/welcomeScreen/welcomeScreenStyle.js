import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#555555',
        textAlign: 'center',
        marginBottom: 30,
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
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 15,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { height: 2, width: 0 },
        elevation: 2,
    },
    signUpButton: {
        backgroundColor: '#4CAF50',
    },
    loginButton: {
        backgroundColor: '#34495E',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        marginBottom: 10,
        fontWeight: "bold"
    }
});

export default styles;