import { Text, View } from "react-native";
import MyButton from "../../components/myButton/myButton.jsx";
import MapView, { Marker ,PROVIDER_DEFAULT } from "react-native-maps";
import { styles } from "./passenger.style.js";
import { useState } from "react";

function Passenger(props) {
  
  const [myLocation, setMyLocation] = useState({
    latitude: 20,
    longitude: 20
  });

  return(
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: -22.911266,
          longitude: -43.282739,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004
        }}
      >
      <Marker coordinate={{
        latitude: -22.911266,
        longitude: -43.282739
      }}
        title="Breninn"
        description="Rua Heráclito Graça 145"
      />
      </MapView>
      <MyButton text="TESTE"/>
    </View>
  );
}

export default Passenger;