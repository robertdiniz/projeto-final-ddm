import RecipeCard from '@/components/RecipeCard';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';



export default function HomeScreen() {



  return (
    <View style={styles.container}>

      {/* <RecipeCard id={1} />
      <RecipeCard id={2} />
      <RecipeCard id={3} />
      <RecipeCard id={4} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    padding: 16,
    gap: 16,
    backgroundColor: "#F5F5F5",
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  title:{
    color: "#fff",
  },
});
