import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png"
import styles from "./styles"; // Importe os estilos

export default function Indication() {
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
      <IndiquePessoaForm />
    </View>
  );
}

function IndiquePessoaForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleIndiquePessoa = () => {
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone);
  };

  return (
    <View style={styles.form}>
      <View style={styles.infoCard}>
        <Text style={styles.infoCardLabel}>Nome</Text>
        <TextInput
          style={styles.inputBackground}
          placeholder="Digite seu nome"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoCardLabel}>E-mail</Text>
        <TextInput
          style={styles.inputBackground}
          placeholder="Digite seu e-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoCardLabel}>Telefone</Text>
        <TextInput
          style={styles.inputBackground}
          placeholder="Digite seu telefone"
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
      </View>
      <View style={styles.indiqueButtonContainer}>
        <TouchableOpacity
          style={styles.indiqueButton}
          onPress={handleIndiquePessoa}
        >
          <Text style={styles.indiqueButtonText}>Indique já</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
