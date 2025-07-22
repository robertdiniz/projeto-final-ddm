import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface LogoProps {
    header: boolean;
}

export default function Logo({ header }: LogoProps) {

    const containerStyle = header ? styles.containerSmall : styles.container;
    const logoStyle = header ? styles.logoSmall : styles.logo;
    const textStyle = header ? styles.textSmall : styles.text;

    return (
        <View style={containerStyle}>
            <Image 
                source={require('../../assets/images/background-logo.png')} 
                style={logoStyle} 
            />
            <Text style={textStyle}>ÔFOME</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 108,
        width: 128,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSmall: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoSmall: {
        width: 48,
        height: 48,
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        position: 'absolute',
        top: 50,
    },
    textSmall: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        position: 'absolute',
        top: 20,
    },
});
