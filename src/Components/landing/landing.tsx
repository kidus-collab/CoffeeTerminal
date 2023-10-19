import React from "react";

import { Box, Flex, Text, HStack, Image, Icon } from "@chakra-ui/react";

import { FaCoffee } from "react-icons/fa";

import { Font, colors } from "../../utils/constants";
import packedCoffee from "../../utils/images/landing/coffeebag.png";
import coffeeCup from "../../utils/images/landing/coffeecup 1.png";
//component
import Nav from "./Nav";

const Landing = () => {
  return (
    <Box bgColor={colors[0]} w="100%">
      <Nav />
      <HStack
        display="flex"
        gap={2}
        justifyContent={{ base: "space-between", md: "none" }}
      >
        <Box alignItems="left">
          <Text
            fontWeight="semibold"
            fontSize={{ base: "12px", sm: "14px", md: "18px", lg: "25px" }}
            fontFamily={Font.heading}
          >
            take a break its coffee time
          </Text>
          <Text
            fontWeight="black"
            fontSize={{ base: "25px", sm: "30px", md: "38px", lg: "60px" }}
            fontFamily={Font.heading}
          >
            Cup of Coffee
            <br /> saves your
            <br /> day
          </Text>
        </Box>
        <Box bg={packedCoffee} />

        <Box>
          <Image src={coffeeCup} />
          <Text>
            Ethiopian coffee shop with
            <br />
            vision & mission
          </Text>
          <Box>
            <Flex>
              <Icon as={FaCoffee} />
              <Text>
                {" "}
                Ethiopian coffee shop with
                <br />
                vision & mission
              </Text>
            </Flex>
            <Flex>
              <Icon as={FaCoffee} />
              <Text>
                {" "}
                Ethiopian coffee shop with
                <br />
                vision & mission
              </Text>
            </Flex>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Landing;
