import React from "react";
import FlagCard from "../components/FlagCard";
import { View } from "native-base";
import flags_data from "./../flags_data.json";
const LearningFlagsScreen = () => {
  return (
    <View flex={1}>
      <FlagCard data={flags_data} />
    </View>
  );
};

export default LearningFlagsScreen;
