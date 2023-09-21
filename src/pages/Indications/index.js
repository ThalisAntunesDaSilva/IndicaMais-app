import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png"
import styles from "./styles";

export default function Indication() {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Indique uma pessoa</Text>
      </View>
      {/* Logos */}
      <View style={styles.logosContainer}>
        <TouchableOpacity style={styles.indiqueButton}>
          <Text style={styles.indiqueButtonText}>Indique um contato do Facebook</Text>
          <Image source={facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.indiqueButton}>
          <Text style={styles.indiqueButtonText}>Indique um contato do Gmail</Text>
          <Image source={gmail} />
        </TouchableOpacity>
        <Text style={styles.titleFormulario}>Ou preencha o formulário</Text>
      </View>

      {/* Form */}
      <IndiquePessoaForm />
    </View>
  );
}

function indications() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  //alteracaodetesteMayor ^^

  import React, { useState, useEffect } from 'react';
  import { View, Text, TouchableOpacity, TextInput, StatusBar, FlatList, } from 'react-native';
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
