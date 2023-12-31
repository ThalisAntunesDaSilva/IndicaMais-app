import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import api from "../../services/api";
import { useContextProvider } from "../../context/AuthContext";

export default function Rewards({ navigation }) {
  const { isAdmin, token } = useContextProvider();

  const [rewards, setRewards] = useState([]);

  async function handleDelete(id){
    try{
    const response = await api.delete(`recompensa/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
   
  } catch (error) {
    console.error("Error delete rewards:", error);
  }
  }

  async function fetchRewards() {
    try {
      const response = await api.get("recompensas", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);

      setRewards(response.data);
      console.log("rewards:", response.data);
    } catch (error) {
      console.error("Error fetching indications:", error);
    }
  }


  useEffect(() => {
   
    fetchRewards();
  }, [rewards]);


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="arrow-left" size={16} color="black" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Recompensas</Text>
          {/* <Text style={styles.titleScore}>Pontuação: </Text> */}
        </View>
        <View style={styles.secondContainer}>
          {isAdmin && (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                navigation.navigate("RewardAdd");
              }}
            >
              <Ionicons name="add" size={28} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <FlatList
        data={rewards}
        keyExtractor={(item, index) => String(item.id)}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
           <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.date}>Pontos: {item.pontos}</Text>
            </View>
            {isAdmin && (
        <TouchableOpacity>
          <Feather
            name="trash"
            size={30}
            color="#000000"
            onPress={() => handleDelete(item.id)}
          />
        </TouchableOpacity>
      )}
  


          </View>
        )}
      />
    </View>
  );
}
