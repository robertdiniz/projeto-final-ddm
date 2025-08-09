import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import Logo from '@/components/Logo';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';


export default function TabLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // Lembrar de adaptar para light/dark.
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        // tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
            backgroundColor: "#FAFAF9",
            color: "#FECACA",
          },
        }),
        tabBarActiveTintColor: '#F87171',
        tabBarInactiveTintColor: '#FECACA',
      }}>
      <Tabs.Screen
        name="recipes/index"
        options={{
          title: "Receitas",
          headerShown: true,
          tabBarIcon: ({ color }) => <MaterialIcons name="menu-book" size={24} color={color} />,
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
      <Tabs.Screen
        name="recipes/create"
        options={{
          title: 'Criar Receita',
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
          tabBarIcon: ({ color }) => <MaterialIcons
              name="add-circle"
              size={24}
              color={color}
            />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />,
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
    </Tabs>
  );
}

