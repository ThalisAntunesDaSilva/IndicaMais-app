import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from "./styles";

function IndiquePessoaForm() {
    const [nome, , setName] = useState('');
    const [email, , setEmail] = useState('');
    const [telefone, , setTelefone] = useState('');

    const handleIndiquePessoa = () => {
        console.log('Nome:', nome);
        console.log('Email:', email);
    };

    return (
        <View style={styles.form}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>E-mail</Text>
                <TextInput
                    style={[styles.input, styles.inputBackground]}
                    placeholder="Digite seu e-mail"
                    onChangeText={(text) => setEmail(text)}
                    value={email} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Nome</Text>
                <View style={[styles.nameInputWrapper, styles.inputBackground]}>

                    <TouchableWithoutFeedback onPress={() => useState(!setName)}>
                        <Feather name={Visible ? 'eye-off' : 'eye'} size={24} color="gray" />
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.indiqueButtonContainer}>
                <TouchableOpacity
                    style={styles.indiqueButton}
                    onPress={handindique}
                >
                    <Text style={styles.indiqueButtonText}>Indique já</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
