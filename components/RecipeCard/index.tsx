import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Recipe {
  id: number;
  nome: string;
  image_url: string;
  tempo: number;
  dificuldade: string;
  categoria: string;
  descricao: string;
}

interface RecipeCardProps {
    recipe: Recipe;
}

export default function RecipeCard({ recipe  }: RecipeCardProps){

    const router = useRouter();

    const handlePress = () => {
        router.push({
            pathname:`/recipes/[id]`,
            params: { id: String(recipe.id) },
        })
    };

    return(
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <View>
                <View style={styles.imageContainer}></View>
                <Image
                    source={
                        recipe.image_url && recipe.image_url.trim() !== ""
                        ? { uri: recipe.image_url }
                        : require('../../assets/images/image-not-found.png')
                    }
                    style={styles.image}
                />
            </View>
            <View style={styles.description}>
                <Text style={styles.text}>{recipe.nome}</Text>
                <View style={styles.timerContainer}>
                    <Ionicons name="time-outline" size={24} color="#FCA5A5" />
                    <Text style={styles.textTimer}>{recipe.tempo} min</Text>
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
        fontWeight: 'bold',
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