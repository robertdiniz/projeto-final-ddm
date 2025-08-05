import { Recipe } from '@/app/recipes/type';
import RecipeCard from '@/components/RecipeCard';
import Constants from 'expo-constants';
import { FlatList, View } from 'react-native';
import styles from '../../../styles/recipes/styles';

import { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';

const API_URL = Constants.expoConfig?.extra?.apiUrl;

export default function RecipeList() {

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(`${API_URL}/recipes`)
        .then(res => res.json())
        .then(data => {
          setRecipes(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Erro ao buscar receitas:", err);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color="#FCA5A5" />
          <Text>Carregando receitas...</Text>
        </View>
      );
    }

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}
