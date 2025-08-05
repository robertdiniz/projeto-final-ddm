import RecipeForm from '@/components/RecipeForm';
import styles from '@/styles/recipes/detail';
import Constants from 'expo-constants';
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, Text, View } from "react-native";
import { Recipe, RecipeFormData } from '../recipes/type';

const API_URL = Constants.expoConfig?.extra?.apiUrl;

export default function RecipeUpdate(){

    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!id) return;
        fetch(`${API_URL}/recipes/${id}`)
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

    const handleSubmit = (data: RecipeFormData) => {
        if (!recipe) return;

        const updatedRecipe = { ...recipe, ...data };
        setSubmitting(true);

        fetch(`${API_URL}/recipes/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedRecipe),
        })
        .then((res) => {
            if (!res.ok) throw new Error("Erro ao salvar");
            return res.json();
        })
        .then(() => {
            Alert.alert("Sucesso", "Receita atualizada com sucesso!");
            router.push(`/recipes/${id}`);
        })
        .catch((err) => {
            console.error(err);
            Alert.alert("Erro", "Não foi possível atualizar.");
        }).finally(() => setSubmitting(false));
    };

    if (loading) {
        return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
            <ActivityIndicator size="large" color="#FCA5A5" />
            <Text>Carregando receita...</Text>
        </View>
        );
    }

    if (!recipe) {
        return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>Receita não encontrada.</Text>
        </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <RecipeForm initialValues={recipe} onSubmit={handleSubmit} submitText="Atualizar Receita" />
        </ScrollView>
    );
};
