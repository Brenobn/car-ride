import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./ride.style.js";
import { json_rides } from "../../constants/data.js";
import icons from "../../constants/icons.js";
import { useEffect, useState } from "react";

function Ride(props) {

  const userId = 2; 
  const [rides, setRides] = useState([]);

  function ClickRide(id) {
    props.navigation.navigate("ride-detail", {
      rideId: id,
      userId: userId
    });
  }

  async function RequestRides(params) {
    // Acessar a API em busca das corridas...
    
    setRides(json_rides);
  }

  useEffect(() => {
    RequestRides();
  }, []);

  return(
    <View style={styles.container}>
      <FlatList 
        data={rides} 
        keyExtractor={(ride) => ride.ride_id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return(
            <TouchableOpacity style={styles.RideContainer} onPress={() => ClickRide(item.ride_id)}>
              <View style={styles.nameContainer}>
                <Image source={icons.car} style={styles.car}/>
                <Text style={styles.name}>{item.passenger_name}</Text>
              </View>
              <Text style={styles.address}>Origem: {item.pickup_address}</Text>
              <Text style={styles.address}>Destino: {item.dropoff_address}</Text>
            </TouchableOpacity>
          ); 
        }}
      />
    </View>
  );
}

export default Ride;