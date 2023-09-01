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
import styles from "./styles.js"

const DATA = [
  { id: '1', text: 'Item 1' },
];

export default function App({navigation}) {
  return (


    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <FlatList
        data={(DATA)}
        style={styles.listFormRegister}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
          
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

      <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
          </View>
        )}
      />


    

      <StatusBar style="auto" />
    </View>
  );
}


