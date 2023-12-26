import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Image } from 'react-native';
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png"
import styles from "./styles";
import api from "../../services/api.js"

export default function Indication() {
const [indicationStatus, setIndicationStatus] = useState(null);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [modalVisible, setModalVisible] = useState(false);

const toggleModalSucess = () => {
  if (indicationStatus === 'success' || indicationStatus === 'failed') {
    setModalVisible(!modalVisible);
    setIndicationStatus(null);
  }
};



const onChangeNameHandler = (name) => {
  setName(name);
  console.log(name)
};

const onChangeEmailHandler = (email) => {
  setEmail(email);  
  console.log(email);
}

const onChangePhoneHandler = (phone) => {
  setPhone(phone);  
  console.log(phone);
};

const postIndication = async (event) => {
await api.post('indications',{
  name: "Thalis",
  email:email,
  phone: ""
}).then((response) =>{
  console.log(response.status)
  if (response.status === 200 || response.status === 201) {

    setIndicationStatus("success");
    console.log(indicationStatus)
  } else {
    setIndicationStatus("failed");
  }
}).catch(err => console.error(err))
}

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Indique uma pessoa</Text>
      </View>
      {/* Logos */}
      {/* <View style={styles.logosContainer}>
        <TouchableOpacity style={styles.indiqueButton}>
          <Text style={styles.indiqueButtonText}>Indique um contato do Facebook</Text>
          <Image source={facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.indiqueButton}>
          <Text style={styles.indiqueButtonText}>Indique um contato do Gmail</Text>
          <Image source={gmail} />
        </TouchableOpacity>
        <Text style={styles.titleFormulario}>Ou preencha o formulário</Text>
      </View> */}

      {/* Form */}
      <View style={styles.form}>
      {/* <View style={styles.infoCard}>
        <Text style={styles.infoCardLabel}>Nome</Text>
        <TextInput
          style={styles.inputBackground}
          placeholder="Digite seu nome"
          onChangeText={onChangeNameHandler}
          
        />
      </View> */}
      <View style={styles.infoCard}>
        <Text style={styles.infoCardLabel}>E-mail</Text>
        <TextInput
          style={styles.inputBackground}
          placeholder="Digite seu e-mail"
          onChangeText={onChangeEmailHandler}
    
        />
      </View>
      {/* <View style={styles.infoCard}>
        <Text style={styles.infoCardLabel}>Telefone</Text>
        <TextInput
          style={styles.inputBackground}
          placeholder="Digite seu telefone"
          onChangeText={onChangePhoneHandler}
        />
      </View> */}
      <View style={styles.indiqueButtonContainer}>
        <TouchableOpacity
          style={styles.indiqueButton}
          onPress={() => postIndication()}
        >
          <Text style={styles.indiqueButtonText}>Indique já</Text>
        </TouchableOpacity>
      </View>
    </View>

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {indicationStatus === "success" ? (
              <Text>Indicação realizado com sucesso!</Text>
            ) : (
              <Text>Indicação falhou. Tente novamente.</Text>
            )}
               <TouchableOpacity style={styles.buttonCloseModalLogin} onPress={toggleModalSucess}>
              <Text style={styles.buttonTextCloseModalLogin}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}


