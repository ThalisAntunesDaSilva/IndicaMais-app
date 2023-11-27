import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from "../../services/api";
import styles from "./styles";
import { useContextProvider } from "../../context/AuthContext";

const IndicationsList = ({ navigation }) => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [indications, setIndications] = useState([]);
  const { isAdmin ,token} = useContextProvider()

  // async function handleDelete(id){

  //   try{
  //   const response = await api.delete(`users/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   console.log(response.data);
   
  // } catch (error) {
  //   console.error("Error delete indications:", error);
  // }
  // }

  async function fetchIndications() {
    try {
      const response = await api.get('indications',{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)

      setIndications(response.data);
      console.log('Indications:', response.data);
    } catch (error) {
      console.error('Error fetching indications:', error);
    }
  }


  useEffect(() => {
    fetchIndications();
  }, [indications]);


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
        <Text style={styles.title}> Indicações</Text>
      </View>

      <View style={styles.content}>
       
        {/* <View style={styles.searchBar}>
          {!isSearchFocused && (
            <Feather name="search" size={16} color="gray" style={styles.searchIcon} />
          )}
          <TextInput
            style={styles.searchInput}
            onFocus={onFocusSearch}
          />
        </View> */}

        <View style={styles.sectionContainer}>

          <FlatList
            data={indications}
            keyExtractor={(item, index) => String(item.id)} 
            renderItem={({ item, index }) => (
              <View style={styles.item}> 
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.date}>Email: {item.email}</Text>
                <Text style={styles.status}>Status: {item.indicationStatus}</Text>
              
                {/* {isAdmin && (
        <TouchableOpacity>
          <Feather
            name="trash"
            size={30}
            color="#000000"
            onPress={() => handleDelete(item.id)}
          />
        </TouchableOpacity>
      )} */}
              </View>
            )}
          /> 
        </View>
      </View>
    </View>
  );
};

export default IndicationsList;
