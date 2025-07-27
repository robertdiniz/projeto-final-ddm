import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RecipeCardProps {
    id: number;
}

export default function RecipeCard({ id  }: RecipeCardProps){

    const router = useRouter();

    const handlePress = () => {
        router.push({
            pathname:`/recipes/[id]`,
            params: { id: String(id) },
        })
    };

    return(
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <View>
                <View style={styles.imageContainer}></View>
                <Image
                    source={require('../../assets/images/bolo.jpg')}
                    style={styles.image}
                ></Image>
            </View>
            <View style={styles.description}>
                <Text style={styles.text}>Bolo de Chocolate</Text>
                <View style={styles.timerContainer}>
                    <Ionicons name="time-outline" size={24} color="#FCA5A5" />
                    <Text style={styles.textTimer}>45 min</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#fff",
        borderWidth: 1,
        width: "100%",
        height: 250,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    imageContainer: {
        backgroundColor: "#FCA5A5",
        width: '100%',
        height: 180,
        position: "absolute",
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        zIndex: 1,
        opacity: 0.4,   
    },
    image: {
        width: '100%',
        height: 180,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        zIndex: -1
    },
    text: {
        fontSize: 16,
        color: "#FCA5A5",
        fontWeight: 'bold',
    },
    textTimer: {
        fontSize: 14,
        color: "#FCA5A5",
        fontWeight: 'semibold',
    },
    description: {
        backgroundColor: "#fafaf9",
        padding: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        zIndex: 2,
        height: 70,
        justifyContent: 'center'
    },
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    },
});