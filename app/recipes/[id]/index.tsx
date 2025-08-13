import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import styles from '@/styles/recipes/detail';
import { Recipe } from '../type';

export default function RecipeDetail(){

    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        fetch(`http://192.168.2.7:3000/recipes/${id}`)
        .then(res => res.json())
        .then(data => {
            setRecipe(data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Erro ao buscar receita:", err);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return (
        <View style={[styles.container, { height: "100%", justifyContent: 'center', alignItems: 'center' }]}>
            <ActivityIndicator size="large" color="#FCA5A5" />
            <Text>Carregando receita...</Text>
        </View>
        );
    }

    if (!recipe) {
        return (
        <View style={[styles.container, { height: "100%", justifyContent: 'center', alignItems: 'center' }]}>
            <Text>Receita não encontrada.</Text>
        </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {recipe.userId && (
                <TouchableOpacity
                    onPress={() => router.push(`/profile/${recipe.userId}`)}
                    style={{
                    marginTop: 20,
                    padding: 12,
                    backgroundColor: '#FCA5A5',
                    borderRadius: 8,
                    alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Ver Perfil do Criador
                    </Text>
                </TouchableOpacity>
                )}            
            <View style={styles.headerDetail}>
                <Text style={styles.title}>{recipe.nome}</Text>
                <TouchableOpacity onPress={() => router.push(`/recipes/${id}/edit`)} style={[styles.flex, styles.iconEdit]}>
                    <Feather name="edit" size={24} color="#FCA5A5" style={styles.iconEdit} />
                </TouchableOpacity>
            </View>
            <View>
                <Image
                    source={
                        recipe.image_url && recipe.image_url.trim() !== ""
                        ? { uri: recipe.image_url }
                        : require('../../../assets/images/image-not-found.png')
                    }
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
