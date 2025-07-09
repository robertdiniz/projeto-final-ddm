import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/background-logo.png')} style={styles.logo} />
        <Text style={styles.text}>ÔFOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderColor: '#fff',
        borderWidth: 1,
        height: 108,
        width: 128,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
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
});
