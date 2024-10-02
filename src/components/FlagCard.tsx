import React from "react";
import { Box, Text, View, VStack } from "native-base";
const FlagCard = ({ data }) => {
  return (
    <VStack alignItems="center">
      <Box
        borderRadius={20}
        bg="primary.500"
        width="90%"
        flexDirection={"row"}
        marginY={2}
      >
        <View margin={2}>
          <Text fontSize="4xl">{data.flag}</Text>
        </View>
        <View margin={2}>
          <Text fontSize="4xl" color="white" fontWeight="bold">
            {data.country}
          </Text>
        </View>
      </Box>
    </VStack>
  );
};

export default FlagCard;
