import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';
import * as yup from 'yup';

import { useAuth } from '@/contexts/AuthContext';
import InputComponent from "../InputComponent";
import { stylesForm } from './style';

type LoginProps = {
    username: string;
    password: string;
};

const schema = yup.object({
  username: yup.string().required('Usuário é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
}).required();

export default function LoginForm(){
    const { login } = useAuth();
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
            const res = await fetch(`http://192.168.2.7:3000/users?username=${data.username}&password=${data.password}`);
            const users = await res.json();

        if (users.length > 0) {
            const user = users[0];
            login({ id: user.id, username: user.username });
            setLoginSuccess('Login realizado com sucesso!');
            router.push('/recipes');
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
        
        <View style={stylesForm.container}>
            <Text style={stylesForm.title}>Login</Text>
            {loginError && <Text style={stylesForm.errorMessage}>{loginError}</Text>}
            {loginSuccess && <Text style={stylesForm.successMessage}>{loginSuccess}</Text>}
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
                <Text style={stylesForm.button}>ENTRAR</Text>
            </Pressable>
            <View style={stylesForm.align}>
                <Text style={stylesForm.signup}>Não tem uma conta? | </Text>
                <Pressable onPress={() => router.push('/signup')}>
                    <Text style={stylesForm.createAccount}>Criar Conta</Text>
                </Pressable> 
            </View>
        </View>
    );
}
