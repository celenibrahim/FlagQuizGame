import React, { useEffect, useRef } from "react";
import { Box, Button, Image, Heading } from "native-base";
import { Animated, Easing } from "react-native";

const HomeScreen = () => {
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, [colorAnimation]);

  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ["#ff0000", "#ff8000", "#00ff00", "#0080ff", "#ff0000"],
  });

  return (
    <Animated.View style={{ flex: 1, backgroundColor }}>
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Heading
          size={"4xl"}
          marginBottom={20}
          color={"white"}
          fontWeight={"hairline"}
        >
          Flag Quiz
        </Heading>
        <Image
          marginBottom={50}
          source={require("../../assets/world.png")}
          alt="World"
          size={300}
          borderRadius={150}
          style={{
            backgroundColor: "transparent",
            resizeMode: "contain",
          }}
        />
        <Button
          marginTop={20}
          variant="subtle"
          size={"lg"}
          colorScheme={"pink"}
          width={200}
          rounded={30}
          _text={{
            fontWeight: "extrabold",
            fontSize: "3xl",
          }}
        >
          Start
        </Button>
      </Box>
    </Animated.View>
  );
};

export default HomeScreen;
