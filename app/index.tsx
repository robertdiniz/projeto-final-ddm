import Logo from '@/components/Logo';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>
            Mate a fome sem enrolação.
            Explore, escolha e saboreie.
        </Text>
        <Pressable onPress={() => router.push('/(tabs)')}>
            <Text style={styles.button}>ENTRAR</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCA5A5',
        gap: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#F87171',
        padding: 10,
        borderRadius: 5,
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    }
});