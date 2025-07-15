import { useRouter } from 'expo-router';
import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';

import InputComponent from "../InputComponent";

export default function LoginForm(){

    const router = useRouter();
    
    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <InputComponent 
                label={"Nome de usuário"}
                placeholder={"Digite seu usuário..."} 
            />
            <InputComponent 
                label={"Senha"}
                placeholder={"Digite sua senha..."} 
            />
            <Pressable onPress={() => router.push('/(tabs)')}>
                <Text style={styles.button}>ENTRAR</Text>
            </Pressable>
            <View style={styles.align}>
                <Text style={styles.signup}>Não tem uma conta? | </Text>
                <Pressable onPress={() => alert("criando conta")}>
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
});