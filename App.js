import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BASE_URL = "https://my-json-server.typicode.com/ozcanzaferayan/pokedex";
const BASE_IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/pokemons`)
      .then((res) => res.json())
      .then((data) => setPokemons(data));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <Image
              style={{ width: 64, height: 64 }}
              source={{ uri: `${BASE_IMAGE_URL}/${item.pokemonId}.png` }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
