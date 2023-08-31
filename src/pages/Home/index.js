import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from "./styles";
import friends from "../../assets/friends.png"
import people from "../../assets/people.png"
import gains from "../../assets/gains.png"
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
   

<View style={styles.containerHeader}>
  <View style={styles.viewInformation}>
<Text style={styles.nameText}>Jaílson Mendes</Text>
<Text>200 pts</Text>
</View>

<TouchableOpacity>
<Feather
          name="bell"
          size={30}
          color="#000000"
          onPress={() => navigation.navigate("Animals")}
        />
</TouchableOpacity>

</View>

      <View style={styles.containerButtons}>
     <TouchableOpacity style={styles.buttonHome}>
      <View>
      <Text style={styles.buttonHomeTextTitle}>Indicações</Text>

      <Text style={styles.buttonHomeTextSubtitle}>+ 20 Indicações consolidadas </Text>
      </View>

      <Image style={styles.imageDecoration} source={friends}></Image>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.buttonHome}>
      <View>
      <Text style={styles.buttonHomeTextTitle}>Indique uma pessoa</Text>

      <Text style={styles.buttonHomeTextSubtitle}>E receba recompensas</Text>
      </View>

      <Image style={styles.imageDecoration} source={people}></Image>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.buttonHome}>
      <View>
      <Text style={styles.buttonHomeTextTitle}>Recompensas</Text>

      <Text style={styles.buttonHomeTextSubtitle}>Confira o que está disponível</Text>
      </View>

      <Image style={styles.imageDecoration} source={gains}></Image>
      </TouchableOpacity> 
      </View>

    </View>
  );
}