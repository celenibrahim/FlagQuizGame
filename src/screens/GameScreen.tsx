import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Box, Text, Button, VStack, Center } from "native-base";
import flagData from "./../flags_data.json";

const GameScreen = ({ navigation }) => {
  const [timer, setTimer] = useState(10);
  const [currentFlag, setCurrentFlag] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const randomFlag = Math.floor(Math.random() * flagData.length);
    setCurrentFlag(randomFlag);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      handleNextQuestion();
    }
  }, [timer]);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    setTimeout(() => {
      handleNextQuestion();
    }, 350);
  };

  const handleNextQuestion = () => {
    setTimer(10);
    setSelectedAnswer(null);
    const randomFlag = Math.floor(Math.random() * flagData.length);
    setCurrentFlag(randomFlag);
  };

  const handleFinish = () => {
    navigation.navigate("Home");
  };

  return (
    <Center flex={1} p={4}>
      <Box mb={4}>
        <Text bold italic fontSize="4xl">{`Time left: ${timer}s`}</Text>
      </Box>

      <Box mb={4}>
        <Text fontSize="8xl">{flagData[currentFlag].flag}</Text>
      </Box>

      <VStack space={3} w="100%">
        {flagData[currentFlag].options.map((option, index) => (
          <Button
            style={styles.button_ans}
            key={index}
            colorScheme={
              selectedAnswer === option
                ? option === flagData[currentFlag].correct
                  ? "green"
                  : "red"
                : "primary"
            }
            onPress={() => handleAnswer(option)}
            _text={{
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            {option}
          </Button>
        ))}
      </VStack>

      <Button mt={10} colorScheme="teal" onPress={handleFinish}>
        Pass
      </Button>
    </Center>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  button_ans: {
    height: Dimensions.get("screen").height / 12,
    borderRadius: 20,
  },
});
