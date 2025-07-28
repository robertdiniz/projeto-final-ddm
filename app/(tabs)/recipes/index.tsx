import RecipeCard from '@/components/RecipeCard';
import { FlatList, View } from 'react-native';
import styles from '../../../styles/recipes/styles';

const recipes = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export default function RecipeList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RecipeCard id={item.id} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
