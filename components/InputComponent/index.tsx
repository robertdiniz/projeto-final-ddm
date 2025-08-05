import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

type InputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
}

export default function InputComponent({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    error,
}: InputProps) {
    return (
        <View>
            { label && <Text style={[styles.label]}>{label}</Text> }
            <TextInput
                style={[styles.input, error ? styles.inputError : null]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,

  },
  label: {
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#F87171',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    marginTop: 4,
    color: 'red',
    fontSize: 13,
  },
});