import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from "./styles";

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null); // Status da requisição

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleModalSucess = () => {
    setModalVisible(!modalVisible);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('sua_url_de_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'seu_email',
          senha: password,
        }),
      });

      const status = response.status;

      if (status === 200 || status === 201) {
        // Login com sucesso
        setLoginStatus('success');
      } else {
        // Login falhou
        setLoginStatus('failed');
      }
    } catch (error) {
      // Ocorreu um erro na requisição
      console.error('Erro na requisição:', error);
      setLoginStatus('failed');
    } finally {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" />

        <Text style={styles.inputLabel}>Senha</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Digite sua senha"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordIconContainer}>
            <Feather name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLinkText}>Faça agora</Text>
        </TouchableOpacity>
      </View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {loginStatus === 'success' ? (
              <Text>Login realizado com sucesso!</Text>
            ) : (
              <Text>Login falhou. Tente novamente.</Text>
            )}
            <TouchableOpacity onPress={toggleModalSucess}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}