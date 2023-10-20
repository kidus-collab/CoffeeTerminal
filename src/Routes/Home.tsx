import { VStack } from "@chakra-ui/react";
import React from "react";

// components
import Landing from "../Components/landing/landing";
import { Services, About, Mission, Future, Branches } from "./export";

const Home = () => {
  return (
    <VStack w="100%" h="100vh">
      <Landing />
      <About />
      <Services />
      <Mission />
      <Future />
      <Branches />
    </VStack>
  );
};

export default Home;
