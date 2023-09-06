import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles.js";

const DATA = [{ id: "1", text: "Item 1" }];

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <FlatList
        data={DATA}
        style={styles.listFormRegister}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text style={styles.inputLabel}> Nome </Text>
            <TextInput style={styles.input} placeholder="" />

            <Text style={styles.inputLabel}> E-mail </Text>
            <TextInput style={styles.input} placeholder="" />

            <Text style={styles.inputLabel}> Senha </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
            />

            <Text style={styles.inputLabel}> Confirmar senha </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
            />

            <Text style={styles.inputLabel}> Aniversário </Text>
            <TextInput style={styles.input} placeholder="" />

            <Text style={styles.inputLabel}> CPF </Text>
            <TextInput style={styles.input} placeholder="" />
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Já tem cadastro?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLinkText}>Faça o login</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
