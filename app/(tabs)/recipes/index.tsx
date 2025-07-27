import RecipeCard from '@/components/RecipeCard';
import { View } from 'react-native';
import styles from '../../../styles/recipes/styles';


export default function RecipeList() {
  return (
    <View style={styles.container}>
      <RecipeCard id={1} />
      <RecipeCard id={2} />
      <RecipeCard id={3} />
      <RecipeCard id={4} />
    </View>
  );
}
