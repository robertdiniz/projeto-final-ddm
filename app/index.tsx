import LoginForm from '@/components/LoginForm';
import Logo from '@/components/Logo';
import { StyleSheet, Text, View} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Logo />
            <Text style={styles.title}>
                Mate a fome sem enrolação.
                Explore, escolha e saboreie.
            </Text>
        </View>
        <LoginForm/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCA5A5',
    },
    containerHeader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 300,
        gap: 8
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});