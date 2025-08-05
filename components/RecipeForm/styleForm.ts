
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 4,
    paddingBottom: 100,
  },
  label: {
    color: "#E67070",
    fontWeight: "bold",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#FFE1E1",
    borderColor: "#FECACA",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    color: "#FCA5A5",
    fontWeight: "bold",
  },
  textarea: {
    height: "auto",
    padding: 4,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    zIndex: -1
  },
  error: {
    color: "red",
  },
  picker: {
    backgroundColor: "#FFE1E1",
    borderColor: "#FECACA",
    color: "#FCA5A5",
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#FCA5A5",
    color: "#fff",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  }
});
