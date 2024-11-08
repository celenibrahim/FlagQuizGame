import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Image,
  Heading,
  Modal,
  Text,
  VStack,
  Spinner,
  HStack,
} from "native-base";
import { Animated, Easing, StyleSheet } from "react-native";
const HomeScreen = ({ navigation }) => {
  const colorAnimation = useRef(new Animated.Value(0)).current;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleLearningPress = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Learn");
      setShowModal(false);
    }, 2000);
  };
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
            italic
            bold
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
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content
              maxWidth="400px"
              borderRadius="20px"
              backgroundColor="#dcecf3"
            >
              <Modal.Header style={styles.modal_header}>
                <Text fontSize="xl">Select Game Mode</Text>
              </Modal.Header>
              <Modal.Body>
                <VStack space={4} alignItems="center">
                  <Button
                    borderColor="white"
                    variant={"outline"}
                    colorScheme="blue"
                    width="100%"
                    onPress={handleLearningPress}
                    isDisabled={loading}
                  >
                    {loading ? (
                      <HStack alignItems="center">
                        <Spinner size="sm" color="blue.500" />
                        <Text ml={2}>Loading...</Text>
                      </HStack>
                    ) : (
                      "Learning Page"
                    )}
                  </Button>
                  <Button
                    borderColor="white"
                    variant={"outline"}
                    colorScheme="green"
                    width="100%"
                    onPress={() => {
                      navigation.navigate("Game", { mode: 180 });
                      setShowModal(false);
                    }}
                  >
                    In 3 Minutes
                  </Button>
                  <Button
                    borderColor="white"
                    variant={"outline"}
                    colorScheme="orange"
                    width="100%"
                    onPress={() => {
                      navigation.navigate("Game", { mode: 5 });
                      setShowModal(false);
                    }}
                  >
                    5 Seconds Mode
                  </Button>
                </VStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>
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
            onPress={() => setShowModal(true)}
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
  modal_header: {
    alignItems: "center",
  },
});
