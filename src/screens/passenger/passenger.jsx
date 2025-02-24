import { Text } from "react-native";
import MyButton from "../../components/myButton/myButton.jsx";
import MapView from "react-native-maps";
import { styles } from "./passenger.style.js";

function Passenger(props) {
  return(
    <View style={styles.container}>
      <MyButton text="TESTE"/>
    </View>
  );
}

export default Passenger;