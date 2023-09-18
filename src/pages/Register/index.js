import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles.js";
import api from "../../services/api.js"

const DATA = [{ id: "1", text: "Item 1" }];

export default function App({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cpf, setCpf] = useState("");

  const onChangeNameHandler = (name) => {
    setName(name);
    console.log(name)
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
    console.log(email)
  };

  const onChangePasswordHandler = (password) => {
    setPassword(password);
    console.log(password)
  };

  const onChangeBirthdayHandler = (birthday) => {
    setBirthday(birthday);
    console.log(birthday)
  };

  const onChangeCpfHandler = (cpf) => {
    setCpf(cpf);
    console.log(cpf)
  };

 const postUsers = async (event) => {
  await api.post(`users`, {
   name: name,
   email: email,
   password: password,
   birthday: birthday,
   cpf: cpf
  }).then((response) => {
    console.log(response.data)
  }).catch(err => console.error(err))
 }


  return (
    <View style={styles.container}>
      <Text style={styles.titleRegisterLabel}>Cadastro</Text>
      <FlatList
        data={DATA}
        style={styles.listFormRegister}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text style={styles.inputRegister}> Nome </Text>
            
            <TextInput style={styles.input} placeholder=""  onChangeText={onChangeNameHandler}/>

            <Text style={styles.inputRegister}> E-mail </Text>
            <TextInput style={styles.input} placeholder=""  onChangeText={onChangeEmailHandler}/>

            <Text style={styles.inputRegister}> Senha </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
              onChangeText={onChangePasswordHandler}
            />

            <Text style={styles.inputRegister}> Confirmar senha </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
            />

            <Text style={styles.inputRegister}> Aniversário </Text>
            <TextInput style={styles.input} placeholder=""  onChangeText={onChangeBirthdayHandler}/>

            <Text style={styles.inputRegister}> CPF </Text>
            <TextInput style={styles.input} placeholder="" onChangeText={onChangeCpfHandler}/>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={() =>  postUsers()}
      >
        <Text style={styles.buttonRegisterText}>Cadastre-se</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupRegisterText}>Já tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.signupLinkRegisterText}>Faça o login</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
