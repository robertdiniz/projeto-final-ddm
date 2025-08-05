import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import Logo from '@/components/Logo';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen 
          name="(tabs)" 
          options={{
            title: 'Minha Tela Personalizada',
            headerTitle: () => <Logo header={true}/>,
            headerStyle: { backgroundColor: '#F87171', },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="recipes" 
          options={{
            headerShown: true,
            headerTitle: () => <Logo header={true}/>,
            // Exemplo de botão de retornar
            // headerLeft: () => {
            //   const router = useRouter();
            //   return (
            //     <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
            //       <Text style={{ color: '#fff' }}>Voltar</Text>
            //     </TouchableOpacity>
            //   );
            // },
            headerStyle: { backgroundColor: '#F87171', },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
