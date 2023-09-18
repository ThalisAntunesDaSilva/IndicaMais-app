// index.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, FlatList, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IndicationsList = ({ navigation }) => {
  const [isSearchFocused, setSearchFocused] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setSearchFocused(false);
  };

  const onFocusSearch = () => {
    setSearchFocused(true);
  };

  const [indications, setIndications] = useState([
    { id: '1', name: 'Naruto Uzumaki', date: '01/09/2023', status: 'Consolidado' },
    { id: '2', name: 'Sasuke Uchiha', date: '02/09/2023', status: 'Indicado' },
    { id: '3', name: 'Kakashi Hatake', date: '03/09/2023', status: 'Indicado' },
    { id: '4', name: 'Sakura Haruno', date: '04/09/2023', status: 'Consolidado' },
    { id: '5', name: 'Clovis Antonio', date: '05/09/2023', status: 'Indicado' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.date}>Data: {item.date}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
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
          <Text style={styles.title}>Indicações</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.searchBar}>
            {!isSearchFocused && (
              <Feather name="search" size={16} color="gray" style={styles.searchIcon} />
            )}
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar"
              onFocus={onFocusSearch}
            />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Indicações</Text>
            <FlatList
              data={indications}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 30,
  },
  sectionContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 16,
    borderColor: 'lightgray',
    firstItem: {
      borderTopWidth: 0, // Remova a borda superior do primeiro item
      marginTop: 0, // Remova a margem superior do primeiro item
    },
  },
  title: {
    fontSize: 24,
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 4,
  },
  status: {
    fontSize: 16,
  },
});

export default IndicationsList;
