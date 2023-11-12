import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from "../../services/api";
import styles from "./styles";

const IndicationsList = ({ navigation }) => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [indications, setIndications] = useState([]);

  useEffect(() => {
    async function fetchIndications() {
      try {
        const response = await api.get('indications');
        setIndications(response.data);
        console.log('Indications:', response.data);
      } catch (error) {
        console.error('Error fetching indications:', error);
      }
    }

    fetchIndications();
  }, []);

  const onFocusSearch = () => {
    setSearchFocused(true);
  };

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
        <Text style={styles.title}> Indicações (Teste)</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchBar}>
          {!isSearchFocused && (
            <Feather name="search" size={16} color="gray" style={styles.searchIcon} />
          )}
          <TextInput
            style={styles.searchInput}
            onFocus={onFocusSearch}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Indicações</Text>

          <FlatList
            data={indications}
            keyExtractor={(item, index) => index.toString()} 
            renderItem={({ item }) => (
              <View style={styles.item} key={item.email}> {/* Use a unique key */}
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.date}>Email: {item.email}</Text>
                <Text style={styles.status}>Status: {item.indicationStatus}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default IndicationsList;
