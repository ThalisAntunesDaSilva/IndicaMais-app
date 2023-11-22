import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import styles from "./styles";
import { useContextProvider } from "../../context/AuthContext";

export default function AddReward({ navigation }) {
  const [name, setName] = useState("");
  const [pontos, setPontos] = useState(0);

  const { token } = useContextProvider();

  const onChangeNameHandler = (name) => {
    setName(name);
    console.log(name);
  };

  const onChangePontosHandler = (pontos) => {
    setPontos(pontos);
    console.log(pontos);
  };

  async function postRewards() {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const payload = {
      name: name,
      pontos: pontos,
    };

    try {
      console.log(payload);
      const response = await api.post(
        "recompensa",
        payload,

        {
          headers: headers,
        }
      );

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Rewards")}
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
          <TextInput style={styles.input} onChangeText={onChangeNameHandler} />
        </View>
        <Text style={styles.label}>Pontuação</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangePontosHandler}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.addImage}>
          <TouchableOpacity
            style={styles.addImageButton}
            onPress={() => postRewards()}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
