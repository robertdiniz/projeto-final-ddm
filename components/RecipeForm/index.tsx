import { Recipe } from "@/app/recipes/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as yup from "yup";

import { styles } from "./styleForm";


interface RecipeFormProps {
  initialValues?: Recipe;
  onSubmit: (data: RecipeFormData) => void;
  submitText?: string;
}

type RecipeFormData = {
    nome: string;
    tempo: number;
    dificuldade: string;
    categoria: string;
    descricao: string;
}

const schema = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório"),
    tempo: yup.number().typeError("Insira um número").required("Tempo é obrigatório"),
    dificuldade: yup.string().required("Dificuldade é obrigatória"),
    categoria: yup.string().required("Categoria é obrigatória"),
    descricao: yup.string().required("Descrição é obrigatória"),
});

export default function RecipeForm({ initialValues, onSubmit, submitText = "Salvar" }: RecipeFormProps) {
  const { control, handleSubmit, watch, formState: {errors} } = useForm<RecipeFormData>({
    defaultValues: initialValues || {
      nome: "",
      tempo: 0,
      dificuldade: "",
      categoria: "",
      descricao: "",
    },
    resolver: yupResolver(schema),
  });

  const [imageUrl, setImageUrl] = useState(initialValues?.image_url || "");

  const pickImage = async () => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
        alert("Você precisa permitir o acesso à galeria!");
        return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64: true,
    });

    if (!result.canceled && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        setImageUrl(uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

        <View>
            <View 
                style={{
                    borderRadius: 8,
                    backgroundColor: !imageUrl ? 'rgba(252, 165, 165, 0.3)' : 'transparent',
                }}
            >
                <Image
                    source={
                        imageUrl && imageUrl.trim() !== ""
                        ? { uri: imageUrl }
                        : require('../../assets/images/image-not-found.png')
                    }
                    style={styles.image}
                />
            </View>
            <TouchableOpacity onPress={pickImage} style={styles.button}>
                <Text style={styles.buttonText}>Selecionar Imagem</Text>
            </TouchableOpacity>
        </View>

        <View>
            <Text style={styles.label}>Nome</Text>
            <Controller
                control={control}
                name="nome"
                render={({ field: { onChange, value } }) => (
                <TextInput style={styles.input} value={value} onChangeText={onChange} />
                )}
            />
            {errors.nome && <Text style={styles.error}>{errors.nome.message}</Text>}
        </View>

        <View>
            <Text style={styles.label}>Tempo (min)</Text>
            <Controller
                control={control}
                name="tempo"
                render={({ field: { onChange, value } }) => (
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={String(value)}
                    onChangeText={(text) => onChange(Number(text))}
                />
                )}
            />
            {errors.tempo && <Text style={styles.error}>{errors.tempo.message}</Text>}
        </View>

        <View style={{ borderRadius: 12 }}>
            <Text style={styles.label}>Dificuldade</Text>
            <Controller
                control={control}
                name="dificuldade"
                render={({ field: { onChange, value } }) => (
                    <Picker
                        selectedValue={value}
                        onValueChange={(itemValue) => onChange(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Fácil" value="Fácil" />
                        <Picker.Item label="Médio" value="Médio" />
                        <Picker.Item label="Difícil" value="Difícil" />
                    </Picker>
                )}
            />
            {errors.dificuldade && <Text style={styles.error}>{errors.dificuldade.message}</Text>}
        </View>

        <View>
            <Text style={styles.label}>Categoria</Text>
            <Controller
                control={control}
                name="categoria"
                render={({ field: { onChange, value } }) => (
                    <Picker
                        selectedValue={value}
                        onValueChange={(itemValue) => onChange(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Café da Manhã" value="Café da Manhã" />
                        <Picker.Item label="Almoço" value="Almoço" />
                        <Picker.Item label="Lanche da Tarde" value="Lanche da Tarde" />
                        <Picker.Item label="Janta" value="Janta" />
                        <Picker.Item label="Sobremesa" value="Sobremesa" />
                    </Picker>
                )}
            />
            {errors.categoria && <Text style={styles.error}>{errors.categoria.message}</Text>}
        </View>

        <View style={{ marginBottom: 8 }}>
            <Text style={styles.label}>Descrição</Text>
            <Controller
                control={control}
                name="descricao"
                render={({ field: { onChange, value } }) => (
                <TextInput
                    style={[styles.input, { height: 'auto' }]}
                    multiline
                    value={value}
                    onChangeText={onChange}
                />
                )}
            />
            {errors.descricao && <Text style={styles.error}>{errors.descricao.message}</Text>}
        </View>

        <TouchableOpacity 
            onPress={handleSubmit(onSubmit)} 
            style={{
                backgroundColor: '#F87171',
                padding: 12,
                borderRadius: 8,
                alignItems: 'center',
                marginTop: 12,
            }}
            >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                { initialValues ? submitText : "Criar Receita"}
            </Text>
        </TouchableOpacity>

    </ScrollView>
  );
}

