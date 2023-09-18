import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import rewardStyles from './styles';

export default function AddReward({ navigation }) {
  const [itemName, setItemName] = useState('');
  const [itemScore, setItemScore] = useState('');

  const handleAddItem = () => {
    // Lógica para adicionar o item
    console.log('Nome do Item:', itemName);
    console.log('Pontuação:', itemScore);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Rewards')}
        >
          <Feather name="arrow-left" size={16} color="black" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Adicione uma recompensa</Text>
        </View>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Nome do Item</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite o nome do item"
            style={styles.input}
            value={itemName}
            onChangeText={(text) => setItemName(text)}
          />
        </View>
        <Text style={styles.label}>Pontuação</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite a pontuação"
            style={styles.input}
            value={itemScore}
            onChangeText={(text) => setItemScore(text)}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={styles.addImageButton}
          onPress={handleAddItem}
        >
          <Text style={styles.addImageButton}>Adicionar uma imagem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
