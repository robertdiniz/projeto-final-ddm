import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native";

import styles from '@/styles/recipes/profile';

interface User {
  id: number;
  username: string;
}

export default function RecipeDetail(){

    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        fetch(`http://192.168.2.7:3000/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
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
            <Text>Carregando perfil do usuário...</Text>
        </View>
        );
    }

    if (!user) {
        return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text>Receita não encontrada.</Text>
        </View>
        );
    }

    return (
        <ScrollView style={styles.container}>            
            <View>
                <Text style={styles.title}></Text>
                <TouchableOpacity onPress={() => router.push(`/recipes/${id}/edit`)}>
                    <Feather name="edit" size={24} color="#FCA5A5" />
                </TouchableOpacity>
            </View>
            <View>
                
            </View>
            <View style={styles.flexInfo}>
                <View style={styles.flex}>
                    <Ionicons name="time-outline" size={24} color="#FCA5A5" />
                    <Text style={styles.info}></Text>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.info}></Text>
                </View>
                <View style={[styles.flex, styles.badge]}>
                    <Text style={styles.info}></Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.info}></Text>
            </View>
        </ScrollView>
    );
};
