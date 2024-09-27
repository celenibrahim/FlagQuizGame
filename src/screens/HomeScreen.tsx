import React, { useEffect, useRef } from "react";
import { Box, Button, Image, Heading } from "native-base";
import { Animated, Easing, StyleSheet } from "react-native";
const HomeScreen = ({ navigation }) => {
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
      <Box flex={1}>
        <Box style={styles.box}>
          <Heading
            size={"4xl"}
            marginTop={20}
            color={"white"}
            fontWeight={"hairline"}
            alignSelf={"center"}
          >
            Flag Quiz
          </Heading>
        </Box>
        <Box style={styles.box}>
          <Image
            source={require("../../assets/world.png")}
            alt="World"
            size={300}
            borderRadius={150}
            alignSelf={"center"}
            style={{
              resizeMode: "contain",
            }}
          />
        </Box>
        <Box style={styles.box}>
          <Button
            alignSelf={"center"}
            variant="outline"
            size={"lg"}
            colorScheme={"pink"}
            width={200}
            rounded={30}
            _text={{
              color: "white",
              fontWeight: "extrabold",
              fontSize: "3xl",
            }}
            onPress={() => navigation.navigate("Game")}
          >
            Start
          </Button>
        </Box>
      </Box>
    </Animated.View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
  },
});
