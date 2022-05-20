import { View, Text } from "react-native";
import React from "react";
import { Filme } from "../../interfaces/interface";

export default function Filmes({ nome, foto, id, sinopse }: Filme) {
  return (
    <View>
      <Text>{nome}</Text>
      <Text>{sinopse}</Text>
    </View>
  );
}
