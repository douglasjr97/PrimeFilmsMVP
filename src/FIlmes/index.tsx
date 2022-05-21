import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Filme } from "../../interfaces/interface";

export default function Filmes({ nome, foto, id, sinopse }: Filme) {
  return (
    <View style={{}}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{nome}</Text>

        <Image source={{ uri: foto }} style={styles.capa} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    margin: 15,
    elevation: 2,
    marginTop: 50,
  },

  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
    // fontWeight: "bold",
  },
});
