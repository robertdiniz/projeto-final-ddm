import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View >
        <Text style={styles.title}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
