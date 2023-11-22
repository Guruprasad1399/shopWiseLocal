import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 20,
        textAlign: 'center',
    },
    backButton: {
        padding: 10,
        position: 'absolute',
        zIndex: 10,
        borderRadius: 25
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#444444',
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        paddingBottom: 5,
    },
    info: {
        fontSize: 16,
        color: '#555555',
        marginTop: 5,
        marginLeft: 10,
    },
    review: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    reviewText: {
        fontSize: 15,
        color: '#666666',
        lineHeight: 20,
    }
});

export default styles;