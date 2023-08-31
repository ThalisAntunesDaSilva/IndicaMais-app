import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

const IndicationsList = () => {
  const [isSearchFocused, setSearchFocused] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setSearchFocused(false);
  };

  const onFocusSearch = () => {
    setSearchFocused(true);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Feather name='arrow-left' size={16} color='black' />
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Indicações</Text>
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
            <Text style={styles.sectionTitle}>Todos</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default IndicationsList;
