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
        width: '100%',
        height: 180,
        borderRadius: 8,
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
    }
});

export default styles;