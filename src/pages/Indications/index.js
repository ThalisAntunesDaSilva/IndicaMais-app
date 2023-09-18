import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, FlatList,  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from "../../services/api"
import styles from "./styles"

const IndicationsList = ({ navigation }) => {
  const [isSearchFocused, setSearchFocused] = useState(false);

  const onFocusSearch = () => {
    setSearchFocused(true);
  };
  const [indications, setIndications] = useState([])

  async function loadIndications() {
    const response = await api.get('indications').then(console.log("Listando indicações")).catch((err) => console.log(err))
    setIndications(response.data)
  }


  useEffect(() => {
    loadIndications()
  }, [])

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
            keyExtractor={(item, index) => String(item.id)}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.date}>Data: {item.email}</Text>
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





