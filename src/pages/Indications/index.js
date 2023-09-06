import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

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
    { name: 'Naruto Uzumaki', date: '01/09/2023', status: 'Consolidado' },
    { name: 'Sasuke Uchiha', date: '02/09/2023', status: 'Indicado' },
    { name: 'Kakashi Hatake', date: '03/09/2023', status: 'Indicado' },
    { name: 'Sakura Haruno', date: '04/09/2023', status: 'Consolidado' },
    { name: 'Clovis Antonio', date: '05/09/2023', status: 'Indicado' },
  ]);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
            <Feather name='arrow-left' size={16} color='black' />
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.searchBar}>
            {!isSearchFocused && (
              <Feather name='search' size={16} color='gray' style={styles.searchIcon} />
            )}
            <TextInput
              style={styles.searchInput}
              placeholder='Pesquisar'
              onFocus={onFocusSearch}
            />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Indicações</Text>
            <FlatList
              data={indications}
              renderItem={({ item }) => (
                <View style={styles.indicationItem}>
                  <Text style={styles.indicationName}>{item.name}</Text>
                  <Text style={styles.indicationDate}>{item.date}</Text>
                  <Text style={styles.indicationStatus}>{item.status}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default IndicationsList;
