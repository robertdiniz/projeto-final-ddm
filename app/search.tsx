import { useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface Recipe {
  id: string;
  nome: string;
  image_url: string;
  tempo: number;
  dificuldade: string;
  categoria: string;
  descricao: string;
}

export default function Search() {

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TextInput
          style={styles.input}
          placeholder="Buscar receitas..."
          placeholderTextColor="#F87171"
          value={search}
          onChangeText={setSearch}
        />
      ),
      headerStyle: { backgroundColor: "#F87171" },
    });
  }, [navigation, search]);

  useEffect(() => {
    if (!search.trim()) {
      setRecipes([]);
      return;
    }

    fetch(`http://192.168.2.7:3000/recipes?nome=${search}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch(console.error);
  }, [search]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => router.push(`/recipes/${item.id}`)}
            >
              <View           
                style={[
                  styles.card,
                  { backgroundColor: index % 2 === 0 ? "#dfdedeff" : "#FFFFFF" } // alterna cor
                ]} 
              >
                <Text style={styles.cardTitle}>{item.nome}</Text>
              </View>
            </TouchableOpacity>
          )}

        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255,255,255,0.3)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    color: "#fff",
    fontWeight: "bold",
    width: "100%",
  },
  card: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F87171",
  },
});