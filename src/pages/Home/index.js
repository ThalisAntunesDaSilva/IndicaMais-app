import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Aniversário"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="black"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Alata",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    alignSelf: "flex-start",
    color: "black",
  },
  input: {
    width: "100%",
    height: 90,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 18,
    color: "black",
    fontFamily: "Alata",
  },
  button: {
    backgroundColor: "#ec4760",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    fontFamily: "Alata",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 15,
  },
});
