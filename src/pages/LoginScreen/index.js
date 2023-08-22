import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <LoginForm />
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLinkText}>Faça agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          style={[styles.input, styles.inputBackground]}
          placeholder="Digite seu e-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Senha</Text>
        <View style={[styles.passwordInputWrapper, styles.inputBackground]}>
          <TextInput
            style={[styles.passwordInput, styles.inputBackground]}
            placeholder="Digite sua senha"
            secureTextEntry={!passwordVisible}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableWithoutFeedback onPress={() => setPasswordVisible(!passwordVisible)}>
            <Feather name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.loginButtonContainer}>
      <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signupContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 16,
  },
  signupLinkText: {
    color: '#EC4760',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: 'gray',  
    paddingHorizontal: 20,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingVertical: 5,
    paddingRight: 5,
  },
  inputContainer: {
    marginBottom: 10,
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  passwordIcon: {
    marginRight: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left', 
    color: '#A7A6A5',
  },
  loginButtonContainer: {
    marginTop: 270,
    alignItems: 'center',
  },
  loginButton: {
    width: '60%', 
    paddingVertical: 15,
    paddingHorizontal: 30, 
    backgroundColor: '#EC4760',
    borderRadius: 20, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBackground: {
    backgroundColor: '#EFF2F1', 
    borderWidth: 0,
    borderRadius: 8, 
  },
  loginButtonText: {
    fontWeight: 'bold',
    color: 'white',
  }
});