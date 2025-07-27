import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RecipeDetail(){

    const { id } = useLocalSearchParams();
    const router = useRouter();

    return (
        <View>
            <Text style={styles.text}>Teste {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#FCA5A5",
        fontWeight: 'bold',
    },
});