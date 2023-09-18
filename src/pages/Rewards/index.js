import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function Rewards({ navigation }) {
  const [data, setData] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    // Adicione mais itens conforme necessário
  ]);

  const handleEditPress = (itemId) => {
    // Implemente a lógica para editar o item com o ID especificado
    console.log(`Editar o item com ID ${itemId}`);
  };

  const handleDeletePress = (itemId) => {
    // Implemente a lógica para apagar o item com o ID especificado
    console.log(`Apagar o item com ID ${itemId}`);
    // Atualize o estado para refletir a remoção do item da lista
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.text}</Text>
      <TouchableOpacity onPress={() => handleEditPress(item.id)}>
        <View style={styles.editButton}>
          <FeatherIcon name="edit" size={16} color="#fff" />
          <Text style={styles.buttonText}>Editar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeletePress(item.id)}>
        <View style={styles.deleteButton}>
          <Text style={styles.buttonText}>Apagar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Feather name="arrow-left" size={16} color="black" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Recompensas</Text>
          <Text style={styles.titleScore}>Pontuação: </Text>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              navigation.navigate("AddReward");
            }}
          >
            <Ionicons name="add" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}