import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import Logo from '@/components/Logo';
import { AuthProvider } from '@/contexts/AuthContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';


export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen 
            name="(tabs)" 
            options={{
              headerShown: false,
              title: 'Minha Tela Personalizada',
              headerTitle: () => <Logo header={true}/>,
              headerStyle: { backgroundColor: '#F87171', },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerRight: () => (
                <Feather 
                  name="search" 
                  size={24} 
                  color="#fff" 
                  style={{ marginRight: 16 }}
                  onPress={() => {
                    router.push('/search');
                  }}
                />
              ),
            }}
          />
          <Stack.Screen 
            name="recipes" 
            options={{
              headerShown: true,
              headerTitle: () => <Logo header={true}/>,
              headerStyle: { backgroundColor: '#F87171', },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          <Stack.Screen name="search" options={{ 
            headerShown: true,
            headerStyle: { backgroundColor: '#F87171', },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
