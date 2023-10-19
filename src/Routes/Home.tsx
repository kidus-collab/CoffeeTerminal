import { VStack } from "@chakra-ui/react";
import React from "react";

// components
import Landing from "../Components/landing/landing";

const Home = () => {
  return (
    <VStack w="100%" h="100vh">
      <Landing />
    </VStack>
  );
};

export default Home;
