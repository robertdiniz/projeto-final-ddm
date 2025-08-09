import { StyleSheet } from "react-native";

export const stylesForm = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '50%',
        padding: 20,
        gap: 20,
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        position: "absolute",
        bottom: 0
    },
    title: {
        marginBottom: 4,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        color: '#F87171',
    },
    button: {
        backgroundColor: '#F87171',
        padding: 10,
        borderRadius: 5,
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signup: {
        fontWeight: 'light',
    },
    align: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    createAccount: {
        alignSelf: 'center', 
        fontWeight: 'bold',
        color: "#F87171",
        fontSize: 16,
    },
    errorMessage: {
        color: "#F87171",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    successMessage: {
        color: "#F87171",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});