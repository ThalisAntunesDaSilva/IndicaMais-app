import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import friends from "../../assets/friends.png";
import people from "../../assets/people.png";
import gains from "../../assets/gains.png";
import { Feather } from "@expo/vector-icons";
import { useContextProvider } from "../../context/AuthContext";

export default function App({ navigation }) {
  const { name, isAdmin } = useContextProvider();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.viewInformation}>
          <Text style={styles.nameText}>Bem vindo(a) {name}</Text>
          {/* <Text>200 pts</Text> */}
        </View>

        {/* <TouchableOpacity>
          <Feather
            name="bell"
            size={30}
            color="#000000"
            onPress={() => navigation.navigate("Animals")}
          />
        </TouchableOpacity> */}
      </View>

      <View style={styles.containerButtons}>
        {isAdmin && (
          <TouchableOpacity
            style={styles.buttonHome}
            onPress={() => navigation.navigate("Indications")}
          >
            <View>
              <Text style={styles.buttonHomeTextTitle}>Indicações</Text>

              <Text style={styles.buttonHomeTextSubtitle}>
                + 20 Indicações consolidadas{" "}
              </Text>
            </View>

            <Image style={styles.imageDecoration} source={friends}></Image>
          </TouchableOpacity>
        )}
        {!isAdmin && (
          <TouchableOpacity
            style={styles.buttonHome}
            onPress={() => navigation.navigate("Indication")}
          >
            <View>
              <Text style={styles.buttonHomeTextTitle}>Indique uma pessoa</Text>

              <Text style={styles.buttonHomeTextSubtitle}>
                E receba recompensas
              </Text>
            </View>

            <Image style={styles.imageDecoration} source={people}></Image>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.buttonHome}
          onPress={() => navigation.navigate("Rewards")}
        >
          <View>
            <Text style={styles.buttonHomeTextTitle}>Recompensas</Text>

            <Text style={styles.buttonHomeTextSubtitle}>
              Confira o que está disponível
            </Text>
          </View>

          <Image style={styles.imageDecoration} source={gains}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
