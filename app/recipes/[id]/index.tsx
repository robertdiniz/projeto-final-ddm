import styles from '@/styles/recipes/detail';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const recipe = {
    nome: "Bolo de Chocolate",
    image_url: "",
    tempo: 3,
    dificuldade: "Médio",
    categoria: "Sobremesa",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit autem laudantium laborum unde fuga ullam nesciunt ea temporibus aliquid ut natus fugiat, consequatur suscipit eveniet est qui harum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit autem laudantium laborum unde fuga ullam nesciunt ea temporibus aliquid ut natus fugiat, consequatur suscipit eveniet est qui harum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit autem laudantium laborum unde fuga ullam nesciunt ea temporibus aliquid ut natus fugiat, consequatur suscipit eveniet est qui harum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit autem laudantium laborum unde fuga ullam nesciunt ea temporibus aliquid ut natus fugiat, consequatur suscipit eveniet est qui harum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit autem laudantium laborum unde fuga ullam nesciunt ea temporibus aliquid ut natus fugiat, consequatur suscipit eveniet est qui harum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit autem laudantium laborum unde fuga ullam nesciunt ea temporibus aliquid ut natus fugiat, consequatur suscipit eveniet est qui harum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit autem laudantium laborum unde fuga ullam nesciunt ea temporibus aliquid ut natus fugiat, consequatur suscipit eveniet est qui harum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit autem laudantium laborum unde fuga ullam nesciunt ea temporibus aliquid ut natus fugiat, consequatur suscipit eveniet est qui harum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit autem laudantium laborum unde fuga ullam nesciunt ea temporibus aliquid ut natus fugiat, consequatur suscipit eveniet est qui harum necessitatibus. cuzin?",
}


export default function RecipeDetail(){

    const { id } = useLocalSearchParams();
    const router = useRouter();



    return (
        <ScrollView style={styles.container}>            
            <View style={styles.headerDetail}>
                <Text style={styles.title}>{recipe.nome}</Text>
                <TouchableOpacity onPress={() => router.push(`/recipes/${id}/edit`)} style={[styles.flex, styles.iconEdit]}>
                    <Feather name="edit" size={24} color="#FCA5A5" style={styles.iconEdit} />
                </TouchableOpacity>
            </View>
            <View>
                <Image
                    source={require('../../../assets/images/bolo.jpg')}
                    style={styles.image}
                ></Image>
            </View>
            <View style={styles.flexInfo}>
                <View style={styles.flex}>
                    <Ionicons name="time-outline" size={24} color="#FCA5A5" />
                    <Text style={styles.info}>{recipe.tempo}</Text>
                </View>
                <View style={styles.flex}>
                    <Image
                        source={require('../../../assets/images/chef.png')}
                        style={styles.timeImage}
                    ></Image>
                    <Text style={styles.info}>{recipe.dificuldade}</Text>
                </View>
                <View style={[styles.flex, styles.badge]}>
                    <Text style={styles.info}>{recipe.categoria}</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.info}>{recipe.descricao}</Text>
            </View>
        </ScrollView>
    );
};

{/* <TouchableOpacity onPress={() => router.back()} style={{ padding: 12, backgroundColor: '#FCA5A5', marginTop: 20 }}>
    <Text style={{ color: 'white', fontWeight: 'bold' }}>Voltar</Text>
    </TouchableOpacity> */}
{/* </View> */}