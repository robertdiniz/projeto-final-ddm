import RecipeCard from '@/components/RecipeCard';
import { useAuth } from '@/contexts/AuthContext';
import { useFavorites } from '@/contexts/FavoriteContext';
import { useRouter } from "expo-router";
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import styles from '@/styles/recipes/profile';

interface User {
  id: number;
  username: string;
}

export default function Profile(){
    const router = useRouter();
    const { user: authUser } = useAuth();
    const { favorites } = useFavorites();

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!authUser) {
            router.replace("../index");
            return;
        }
        fetch(`http://192.168.2.7:3000/users/${authUser.id}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Erro ao buscar perfil:", err);
            setLoading(false);
        });
    }, [authUser]);

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
            <Text>Usuário não encontrado(a).</Text>
        </View>
        );
    }

    const renderHeader = () => (
        <View>
            <View style={styles.imageContainer}>
                <Image
                source={require('../../../assets/images/ana.jpg')}
                style={[styles.image, styles.shadowProp]}
                />
            </View>
            <View style={styles.profile}>
                <Text style={styles.favorites}>{user.username}</Text>
                <Text style={[styles.favorites, { marginTop: 12 }]}>Favoritos</Text>
                {favorites.length === 0 && (
                    <Text style={styles.noFavorites}>Você ainda não favoritou nenhuma receita.</Text>
                )}
            </View>
        </View>
    );

    return (
        <FlatList
            style={styles.container}
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() =>
                    router.push({
                    pathname: `/recipes/[id]`,
                    params: { id: String(item.id) },
                    })
                }
                >
                <RecipeCard recipe={item} />
                </TouchableOpacity>
            )}
            ListHeaderComponent={renderHeader}
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
    );
};
