import { useAuth } from '@/contexts/AuthContext';
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

import styles from '@/styles/recipes/profile';

interface User {
  id: number;
  username: string;
}

export default function ProfileDetail(){

    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const { user: authUser } = useAuth();

    useEffect(() => {
        if (!authUser) {
            router.replace("../index");
        return;
        }
    }, [authUser]);

    useEffect(() => {
        if (!id) return;
        fetch(`http://192.168.2.7:3000/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Erro ao buscar perfil:", err);
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
        <View style={[styles.container, { height: "100%", justifyContent: 'center', alignItems: 'center' }]}>
            <Text>Usuário não encontrada.</Text>
        </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                source={require('../../../assets/images/robert.jpg')}
                style={[styles.image, styles.shadowProp]}
                />
            </View>

            <View style={styles.profile}>
                <Text style={styles.favorites}>{user.username}</Text>
            </View>
        </ScrollView>
    );
};
