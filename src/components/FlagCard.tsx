import React from "react";
import { Box, ScrollView, Text, View, VStack } from "native-base";
const FlagCard = ({ data }) => {
  return (
    <ScrollView>
      <VStack alignItems="center">
        {data.map((item, index) => (
          <Box
            borderRadius={20}
            key={index}
            bg="primary.500"
            width="90%"
            flexDirection={"row"}
            marginY={2}
          >
            <View margin={2}>
              <Text fontSize="4xl">{item.flag}</Text>
            </View>
            <View margin={2}>
              <Text fontSize="4xl" color="white" fontWeight="bold">
                {item.country}
              </Text>
            </View>
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default FlagCard;
