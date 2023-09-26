import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png"
import styles from "./styles";
import api from "../../services/api.js"

export default function Indication() {

const [name, setName] =useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");


const onChangeNameHandler = (name) => {
  setName(name);
  console.log(name)
};

const onChangeEmailHandler = (email) => {
  setEmail(email);  
  console.log(email);
}

const onChangePhoneHandler = (phone) => {
  setPhone(phone);  
  console.log(phone);
};

const postIndication = async (event) => {
await api.post('indicates',{
  name:name,
  email:email,
  phone:phone
}).then((response) =>{
  console.log(response.data)
}).catch(err => console.error(err))
}

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Indique uma pessoa</Text>
      </View>
      {/* Logos */}
      <View style={styles.logosContainer}>
        <TouchableOpacity style={styles.indiqueButton}>
          <Text style={styles.indiqueButtonText}>Indique um contato do Facebook</Text>
          <Image source={facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.indiqueButton}>
          <Text style={styles.indiqueButtonText}>Indique um contato do Gmail</Text>
          <Image source={gmail} />
        </TouchableOpacity>
        <Text style={styles.titleFormulario}>Ou preencha o formulário</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
      <View style={styles.infoCard}>
        <Text style={styles.infoCardLabel}>Nome</Text>
        <TextInput
          style={styles.inputBackground}
          placeholder="Digite seu nome"
          onChangeText={onChangeNameHandler}
          
        />
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoCardLabel}>E-mail</Text>
        <TextInput
          style={styles.inputBackground}
          placeholder="Digite seu e-mail"
          onChangeText={onChangeEmailHandler}
    
        />
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoCardLabel}>Telefone</Text>
        <TextInput
          style={styles.inputBackground}
          placeholder="Digite seu telefone"
          onChangeText={onChangePhoneHandler}
        />
      </View>
      <View style={styles.indiqueButtonContainer}>
        <TouchableOpacity
          style={styles.indiqueButton}
          onPress={() => postIndication()}
        >
          <Text style={styles.indiqueButtonText}>Indique já</Text>
        </TouchableOpacity>
      </View>
    </View>

    </View>
  );
}


