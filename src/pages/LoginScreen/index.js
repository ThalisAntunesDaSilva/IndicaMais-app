import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from "./styles";

export default function LoginScreen({navigation}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
   
    return (

        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
           
                <Text style={styles.inputLabel}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"             
                />
             <Text style={styles.inputLabel}>Senha</Text>
              
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                     >
                          <TouchableWithoutFeedback onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Feather name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
                    </TouchableWithoutFeedback>
                     </TextInput>
                
               
                  
          
     
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>

   
        <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Não tem uma conta?</Text>
            <TouchableOpacity>
                <Text style={styles.signupLinkText}>Faça agora</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    }