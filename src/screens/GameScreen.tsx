import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box, Text, Button, VStack, Center } from "native-base";

const flags = [
  {
    country: "France",
    flag: "🇫🇷",
    options: ["France", "Italy", "Spain", "Germany"],
    correct: "France",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correct: "Japan",
  },
  {
    country: "Brazil",
    flag: "🇧🇷",
    options: ["Argentina", "Brazil", "Colombia", "Peru"],
    correct: "Brazil",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    options: ["UK", "Canada", "USA", "Australia"],
    correct: "USA",
  },
];

const GameScreen = ({ navigation }) => {
  const [timer, setTimer] = useState(10);
  const [currentFlag, setCurrentFlag] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    // Timer geriye doğru sayımı
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      // Süre dolarsa sonraki soruya geçiş
      handleNextQuestion();
    }
  }, [timer]);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    // Cevap kontrolü ve zamanlayıcı sıfırlama
    setTimeout(() => {
      handleNextQuestion();
    }, 500);
  };

  const handleNextQuestion = () => {
    setTimer(10);
    setSelectedAnswer(null);
    setCurrentFlag((prev) => (prev + 1) % flags.length);
  };

  const handleFinish = () => {
    navigation.navigate("Home");
  };

  return (
    <Center flex={1} p={4}>
      <Box mb={4}>
        <Text fontSize="2xl">{`Time left: ${timer}s`}</Text>
      </Box>

      <Box mb={4}>
        <Text fontSize="6xl">{flags[currentFlag].flag}</Text>
      </Box>

      <VStack space={3} w="100%">
        {flags[currentFlag].options.map((option, index) => (
          <Button
            key={index}
            colorScheme={
              selectedAnswer === option
                ? option === flags[currentFlag].correct
                  ? "green"
                  : "red"
                : "blue"
            }
            onPress={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </VStack>

      <Button mt={10} colorScheme="teal" onPress={handleFinish}>
        Finish
      </Button>
    </Center>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
