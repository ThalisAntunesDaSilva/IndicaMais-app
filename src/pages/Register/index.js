import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles.js"


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


