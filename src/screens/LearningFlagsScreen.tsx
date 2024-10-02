import React from "react";
import FlagCard from "../components/FlagCard";
import { View, FlatList } from "native-base";
import flags_data from "./../flags_data.json";
const LearningFlagsScreen = () => {
  return (
    <View flex={1}>
      <FlatList
        data={flags_data}
        renderItem={({ item }) => <FlagCard data={item} />}
        keyExtractor={(item) => item.country}
        initialNumToRender={100}
      />
    </View>
  );
};

export default LearningFlagsScreen;
