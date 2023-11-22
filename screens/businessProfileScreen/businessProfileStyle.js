import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    content: {
        padding: 15,
    },
    backButton: {
        padding: 10,
        position: 'absolute',
        zIndex: 10,
        backgroundColor: "lightblue",
        borderRadius: 25
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 15,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    sectionContent: {
        fontSize: 16,
        color: '#333',
    },
    favoriteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    favoriteText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
