import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    iconEdit: {
        position: "absolute",
        right: 16,
    },
    container: {
        backgroundColor: "#F5F5F5",
        height: "auto",
        padding: 12,
    },
    title: {
        fontSize: 24,
        color: "#FCA5A5",
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        color: "#FCA5A5",
        fontWeight: 'bold',
    },
    headerDetail: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 12,
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 100,
        zIndex: -1
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    info: {
        fontSize: 16,
        color: "#FCA5A5",
        fontWeight: 'bold',
    },
    timeImage: {
        width: 24,
        height: 24,
    },
    badge: {
        borderWidth: 2,
        borderColor: "#FCA5A5",
        padding: 2,
        paddingHorizontal: 5,
        borderRadius: 16,
    },
    flexInfo: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 12,
    },
    description: {
        padding: 4,
        paddingBottom: 100,
    },
    profile: {
        flex: 1,
        // alignItems: 'center',
        paddingBottom: 32,
    },
    favorites: {
        marginTop: 16,
        fontSize: 24,
        color: "#FCA5A5",
        fontWeight: "bold",
        textAlign: 'center',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: "100%",
        height: 180,
        zIndex: 1,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    noFavorites: { 
        fontWeight: "bold", 
        color: "#FCA5A5", 
        fontSize: 16, 
        textAlign: "center",
        marginTop: 32 
    }
});

export default styles;