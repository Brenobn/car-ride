import { Alert, Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./home.style";

function Home(props) {

  function OpenPassenger() {
    props.navigation.navigate("passenger");
  }

  function OpenRide() {
    props.navigation.navigate("ride");
  }
  return (
    <ImageBackground 
      source={icons.bg} 
      resizeMode="cover" 
      style={styles.bg}
    >

    <Image 
      source={icons.logo}
      style={styles.logo} 
    />

    <TouchableOpacity style={styles.btn} onPress={OpenPassenger}>
      <Image 
        source={icons.passenger} 
        style={styles.img}
      />
      <Text style={styles.title}>Passageiro</Text>
      <Text style={styles.text}>Econtre motoristas parceiros</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={OpenRide}>
      <Image 
        source={icons.driver} 
        style={styles.img}
      />
      <Text style={styles.title}>Motorista</Text>
      <Text style={styles.text}>Aceite corridas</Text>
    </TouchableOpacity>

    </ImageBackground>
  );
}

export default Home;