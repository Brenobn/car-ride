import { ActivityIndicator, Text, TextInput, View } from "react-native";
import MyButton from "../../components/myButton/myButton.jsx";
import MapView, { Marker ,PROVIDER_DEFAULT } from "react-native-maps";
import { styles } from "./passenger.style.js";
import { useEffect, useState } from "react";
import icons from "../../constants/icons.js";
import { getCurrentPositionAsync, requestForegroundPermissionsAsync, reverseGeocodeAsync } from "expo-location";

function Passenger(props) {
  
  const [myLocation, setMyLocation] = useState({});
  const [title, setTitle] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");

  async function RequestRideFromUser() {
    // Acessa dados na API...

    const response = {};

    return response;
  }

  async function RequestPermissionAndGetLocation() {

    const {granted} = await requestForegroundPermissionsAsync();

    if(granted) {
      const currentPosition = await getCurrentPositionAsync();

      if (currentPosition.coords) {
        return currentPosition.coords;
      } else {
        return {};
      }
    } else {
      return {};
    }

  }

  async function RequestAddressName(lat, long) {
    const response = await reverseGeocodeAsync({
      latitude: lat,
      longitude: long
    });

    if(response[0].street && response[0].streetNumber && response[0].district) {
      setPickupAddress(response[0].street + ", " + response[0].streetNumber + " - " + response[0].district);
    }
  }

  async function LoadScreen() {
    // buscar dados de corrida aberta na API para o usuário...
    const response = await RequestRideFromUser();

    if(!response.ride_id) {

      // const location = {latitude: -22.903622, longitude: -43.279308};
      const location = await RequestPermissionAndGetLocation();
      
      if(location.latitude) {
        setTitle("Encontrar motoristas...");
        setMyLocation(location);
        RequestAddressName(location.latitude, location.longitude);
      } else {
        Alert.alert("Não foi possível obter sua localização!");
      }

    } else {

    }
  }

  useEffect(() => {
    LoadScreen();
  }, []); 

  return(
    <View style={styles.container}>

      {myLocation.latitude 
        ? 
        <>
          <MapView 
            style={styles.map} 
            provider={PROVIDER_DEFAULT}
            initialRegion=
            {{
              latitude: myLocation.latitude,
              longitude: myLocation.longitude,
              latitudeDelta: 0.004,
              longitudeDelta: 0.004
            }}
          >
          <Marker coordinate=
            {{
              latitude: myLocation.latitude,
              longitude: myLocation.longitude
            }}
            title="Breninn"
            description="Rua Heráclito Graça 145"
            image={icons.location}
            style={styles.marker}
          />
          </MapView>
            <View style={styles.footer}>
            <View style={styles.footerText}>
              <Text>{title}</Text>
            </View>

            <View style={styles.footerFields}>
              <Text>Origem</Text>
              <TextInput style={styles.input} value={pickupAddress}/>
            </View>
        
            <View style={styles.footerFields}>
              <Text>Destino</Text>
              <TextInput style={styles.input} value={dropoffAddress}/>
            </View>

          </View>
          <MyButton text="CONFIRMAR" theme="default"/>
        </> 
        : 
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      }

      
    </View>
  );
}

export default Passenger;