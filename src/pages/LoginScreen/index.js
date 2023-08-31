import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from "./styles";

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