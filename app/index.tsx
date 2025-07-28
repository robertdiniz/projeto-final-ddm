import LoginForm from '@/components/LoginForm';
import Logo from '@/components/Logo';
import styles from '@/styles/auth/login';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Logo header={false}/>
            <Text style={styles.title}>
                Mate a fome sem enrolação.
                Explore, escolha e saboreie.
            </Text>
        </View>
        <LoginForm/>
    </View>
  );
}
