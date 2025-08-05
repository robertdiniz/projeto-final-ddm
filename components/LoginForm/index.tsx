import { yupResolver } from '@hookform/resolvers/yup';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as yup from 'yup';

import InputComponent from "../InputComponent";

const API_URL = Constants.expoConfig?.extra?.apiUrl;

type LoginProps = {
    username: string;
    password: string;
};

const schema = yup.object({
  username: yup.string().required('Usuário é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
}).required();

export default function LoginForm(){

    const [loginError, setLoginError] = useState<string | null>(null);
    const [loginSuccess, setLoginSuccess] = useState<string | null>(null);
    const router = useRouter();
    
    const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        register('username');
        register('password');
    }, [register]);

      const onSubmit = async (data: LoginProps) => {
        setLoginError(null);
        setLoginSuccess(null);

        try {
            const res = await fetch(`${API_URL}/users?username=${data.username}&password=${data.password}`);
            const users = await res.json();

        if (users.length > 0) {
            setLoginSuccess('Login realizado com sucesso!');
            router.push('/(tabs)');
        } else {
            setLoginError('Usuário ou senha incorretos');
        }
        } catch (error) {
            setLoginError('Falha na conexão');
        }
    };

    const username = watch('username', '');
    const password = watch('password', '');

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            {loginError && <Text style={styles.errorMessage}>{loginError}</Text>}
            {loginSuccess && <Text style={styles.successMessage}>{loginSuccess}</Text>}
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
            <Pressable onPress={handleSubmit(onSubmit)}>
                <Text style={styles.button}>ENTRAR</Text>
            </Pressable>
            <View style={styles.align}>
                <Text style={styles.signup}>Não tem uma conta? | </Text>
                <Pressable onPress={() => router.push('/signup')}>
                    <Text style={styles.createAccount}>Criar Conta</Text>
                </Pressable> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '50%',
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
    signup: {
        fontWeight: 'light',
    },
    align: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    createAccount: {
        alignSelf: 'center', 
        fontWeight: 'bold',
        color: "#F87171",
        fontSize: 16,
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