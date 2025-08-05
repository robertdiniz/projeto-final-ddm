import LoginForm from '@/components/LoginForm';
import Logo from '@/components/Logo';
import styles from '@/styles/auth/login';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';

export default function Home() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
    <View style={[styles.container, { flex: 1 }]}>
        <View style={styles.containerHeader}>
            <Logo header={false}/>
            <Text style={styles.title}>
                Mate a fome sem enrolação.
                Explore, escolha e saboreie.
            </Text>
        </View>
        <LoginForm/>
    </View>
    </KeyboardAvoidingView>
  );
}
