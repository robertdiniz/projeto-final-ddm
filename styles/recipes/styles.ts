import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
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
  title: {
    color: '#fff',
  },
  list: {
    width: "100%", 
    gap: 16, 
    padding: 12,
    paddingTop: 30,
    paddingBottom: 30
  }
});

export default styles;
