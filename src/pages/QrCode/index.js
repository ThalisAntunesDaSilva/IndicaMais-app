import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from "./styles";

export default function QrCode({navigation}) {


  return (
    <View style={styles.container}>
        <Text style={styles.titleQrCode}>Valide seu WhatsApp</Text>
      
      <Text style={styles.descriptionQrCode}>Va no seu Whasapp 
Clique em scanear qr code
Aponte a camera para o qr-cde 
enviado por email com o título
“Falta um passo para você
expandir seu negócio por meio
dos seus cliente”
Retorne ao app e prossiga : )</Text>
    </View>
  );
}
