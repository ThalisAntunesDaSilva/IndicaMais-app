import { StatusBar } from "expo-status-bar";
import {
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
      <Text style={styles.titleRegister}>Cadastro</Text>
      <FlatList
        data={DATA}
        style={styles.listFormRegister}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text style={styles.inputLabelRegister}> Nome </Text>
            <TextInput style={styles.input} placeholder="" />

            <Text style={styles.inputLabelRegister}> E-mail </Text>
            <TextInput style={styles.input} placeholder="" />

            <Text style={styles.inputLabelRegister}> Senha </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
            />

            <Text style={styles.inputLabelRegister}> Confirmar senha </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
            />

            <Text style={styles.inputLabelRegister}> Aniversário </Text>
            <TextInput style={styles.input} placeholder="" />

            <Text style={styles.inputLabelRegister}> CPF </Text>
            <TextInput style={styles.input} placeholder="" />
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.buttonTextRegister}>Cadastre-se</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupTextRegister}>Já tem cadastro?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLinkTextRegister}>Faça o login</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
