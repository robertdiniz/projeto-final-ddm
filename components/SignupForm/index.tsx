import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as yup from 'yup';

import InputComponent from "../InputComponent";

// const API_URL = Constants.expoConfig?.extra?.apiUrl;

type SignUpProps = {
  username: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  username: yup.string().required('Usuário é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('Confirmação de senha é obrigatória'),
}).required();

export default function SignUpForm() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm<SignUpProps>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('username');
    register('password');
    register('confirmPassword');
  }, [register]);

  const onSubmit = async (data: SignUpProps) => {
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const resCheck = await fetch(`http://192.168.2.7:3000/users?username=${data.username}`);
      const existingUsers = await resCheck.json();

      if (existingUsers.length > 0) {
        setErrorMessage('Usuário já existe');
        return;
      }

      const resCreate = await fetch(`http://192.168.2.7:3000/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      if (!resCreate.ok) {
        throw new Error('Erro ao criar usuário');
      }

      setSuccessMessage('Conta criada com sucesso! Redirecionando...');
      setTimeout(() => router.push('/'), 1500);
    } catch (error) {
      setErrorMessage('Falha na conexão ou ao criar conta');
    }
  };

  const username = watch('username', '');
  const password = watch('password', '');
  const confirmPassword = watch('confirmPassword', '');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      {successMessage && <Text style={styles.successMessage}>{successMessage}</Text>}

      <InputComponent
        label="Nome de usuário"
        placeholder="Digite seu usuário..."
        value={username}
        onChangeText={text => setValue('username', text, { shouldValidate: true })}
        error={errors.username?.message}
      />

      <InputComponent
        label="Senha"
        placeholder="Digite sua senha..."
        secureTextEntry
        value={password}
        onChangeText={text => setValue('password', text, { shouldValidate: true })}
        error={errors.password?.message}
      />

      <InputComponent
        label="Confirmar senha"
        placeholder="Confirme sua senha..."
        secureTextEntry
        value={confirmPassword}
        onChangeText={text => setValue('confirmPassword', text, { shouldValidate: true })}
        error={errors.confirmPassword?.message}
      />

      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text style={styles.button}>CRIAR CONTA</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '60%',
    padding: 20,
    gap: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "absolute",
    bottom: 0
  },
  title: {
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#F87171',
  },
  button: {
    backgroundColor: '#F87171',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: "#F87171",
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  successMessage: {
    color: "#F87171",
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
