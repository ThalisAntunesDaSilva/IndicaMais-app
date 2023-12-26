import React, { useState } from "react";
import { 
  StatusBar 
} from "expo-status-bar";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Pressable
} from "react-native";
import styles from "./styles.js";
import api from "../../services/api.js"
import BouncyCheckbox from "react-native-bouncy-checkbox";

const DATA = [{ id: "1", text: "Item 1" }];

export default function App({ navigation }) {
const [modalVisible, setModalVisible] = useState(false);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [birthday, setBirthday] = useState("");  
const [cpf, setCpf] = useState("");
const [nameError, setNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [birthdayError, setBirthdayError] = useState("");
const [cpfError, setCpfError] = useState("");
const [isAdmin, setIsAdmin] = useState(false);

const toggleAdminCheckbox = () => {
  setIsAdmin(!isAdmin); 
  console.log(isAdmin)
};

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


  const onChangeBirthdayHandler = (text) => {
    const numericText = text.replace(/\D/g, '');
  
    if (numericText.length <= 2) {
      setBirthday(numericText);
    } else if (numericText.length <= 4) {
      setBirthday(`${numericText.slice(0, 2)}/${numericText.slice(2)}`);
    } else if (numericText.length > 4) {
      setBirthday(`${numericText.slice(0, 2)}/${numericText.slice(2, 4)}/${numericText.slice(4, 8)}`);

    }
  };
  

  const onChangeCpfHandler = (cpf) => {
    setCpf(cpf);
    console.log(cpf)
  };

  const postUsers = async (event) => {
    if (validateFields()) {
      const payload = {
        name: name,
        email: email,
        password: password,
        birthday: birthday,
        cpf: cpf,
        isAdmin: isAdmin,
      };
  
      console.log(payload);
      try {
        const response = await api.post("users", payload);
        console.log(response.data);
        setModalVisible(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  function toggleModalSucess(){
    if(isAdmin) {
      //navigation.navigate('QrCode');
      navigation.navigate('LoginScreen')
    }else{
      navigation.navigate('LoginScreen');
    }
    setModalVisible(!modalVisible);
   
  }


 const validateFields = () => {
  let valid = true;

  if (name.trim() === "") {
    setNameError("Campo obrigatório");
    valid = false;
  } else {
    setNameError("");
  }

  if (email.trim() === "") {
    setEmailError("Campo obrigatório");
    valid = false;
  } else {
    setEmailError("");
  }

  if (password.trim() === "") {
    setPasswordError("Campo obrigatório");
    valid = false;
  } else {
    setPasswordError("");
  }

  if (birthday.trim() === "") {
    setBirthdayError("Campo obrigatório");
    valid = false;
  } else {
    setBirthdayError("");
  }

  if (cpf.trim() === "") {
    setCpfError("Campo obrigatório");
    valid = false;
  } else {
    setCpfError("");
  }

  return valid;
};


  return (
    <View style={styles.container}>
      <Text style={styles.titleRegisterLabel}>Cadastro</Text>
      <FlatList
        data={DATA}
        style={styles.listFormRegister}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text style={styles.inputRegister}> É proprietário? </Text>
          
           
  <BouncyCheckbox fillColor="red"
 
  text="Sim"
 
  onPress={() => toggleAdminCheckbox()} />

          

            <Text style={styles.inputRegister}> Nome </Text>
            
            <TextInput style={styles.input} placeholder=""  onChangeText={onChangeNameHandler}/>
            { nameError && <Text style={styles.errorMessage}>{nameError}</Text> }

            <Text style={styles.inputRegister}> E-mail </Text>
            <TextInput style={styles.input} placeholder=""  onChangeText={onChangeEmailHandler}/>
            { emailError && <Text style={styles.errorMessage}>{emailError}</Text> }

            <Text style={styles.inputRegister}> Senha </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
              onChangeText={onChangePasswordHandler}
            />
            {passwordError && <Text style={styles.errorMessage}>{passwordError}</Text>}


            <Text style={styles.inputRegister}> Confirmar senha </Text>
            <TextInput
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
            />
          
            <Text style={styles.inputRegister}> Aniversário </Text>
            <TextInput style={styles.input}  placeholder="formato DD/MM/YYYY, apenas números"  onChangeText={onChangeBirthdayHandler}/>
            {birthdayError && <Text style={styles.errorMessage}>{birthdayError}</Text>}
            <Text style={styles.inputRegister}> CPF </Text>
            <TextInput style={styles.input} placeholder="" onChangeText={onChangeCpfHandler}/>
            {cpfError && <Text style={styles.errorMessage}>{cpfError}</Text>}
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={() => postUsers()}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Cadastro realizado com sucesso</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => toggleModalSucess()}>
              <Text style={styles.textStyle}>Continuar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
    </View>
  );
}
