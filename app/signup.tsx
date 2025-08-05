import Logo from '@/components/Logo';
import SignUpForm from '@/components/SignupForm';
import styles from '@/styles/auth/login'; // pode usar os mesmos estilos
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

export default function SignUp() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <View style={[styles.container, { flex: 1 }]}>
        <View style={styles.containerHeader}>
          <Logo header={false} />
        </View>
        <SignUpForm />
      </View>
    </KeyboardAvoidingView>
  );
}
