import RecipeForm from '@/components/RecipeForm';
import styles from '@/styles/recipes/detail';
import { useRouter } from "expo-router";
import { useState } from 'react';
import { Alert, ScrollView } from "react-native";
import { RecipeFormData } from '../../recipes/type';

export default function RecipeUpdate(){

    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (data: RecipeFormData) => {
    setSubmitting(true);

    fetch(`http://192.168.2.7:3000/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Erro ao criar receita");
        const createdRecipe = await res.json();
        Alert.alert("Sucesso", "Receita criada com sucesso!");
        router.push(`/recipes/${createdRecipe.id}`);
      })
      .catch((err) => {
        console.error(err);
        Alert.alert("Erro", "Não foi possível criar a receita.");
      })
      .finally(() => setSubmitting(false));
  };

    return (
        <ScrollView style={styles.container}>
            <RecipeForm onSubmit={handleSubmit} submitText="Atualizar Receita" />
        </ScrollView>
    );
};
