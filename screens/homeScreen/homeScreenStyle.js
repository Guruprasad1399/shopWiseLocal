import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    searchBar: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        margin: 10,
    },
    businessItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    businessImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    searchAndFilterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    businessInfo: {
        flex: 1,
        justifyContent: 'space-around',
    },
    businessName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    businessCategory: {
        fontStyle: 'italic',
    },
    businessDescription: {
        color: 'grey',
    },
    businessLocation: {
        color: '#007AFF',
    },
    businessPromotion: {
        color: 'green',
    },
    businessRating: {
        color: 'orange',
    },
    picker: {
        width: '100%',
        height: 100,
    },
    pickerItem: {
        color: '#333',
        height: 50
    },
    modalView: {
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '90%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#333",
        marginBottom: 30,
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkBoxLabel: {
        marginLeft: 10,
    },
    button: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
        elevation: 2,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    checkBox: {
        width: '90%',
        borderWidth: 0,
        backgroundColor: 'transparent',
    },
});

export default styles;
