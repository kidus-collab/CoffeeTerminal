import React from "react";

import { Box, Flex, Text, Button, HStack, Image, Icon } from "@chakra-ui/react";

import { BiSolidCoffeeBean, BiSolidCoffeeTogo } from "react-icons/bi";

import { Font, colors } from "../../utils/constants";
import packedCoffee from "../../utils/images/landing/coffeebag.png";
import coffeeCup from "../../utils/images/landing/coffeecup 1.png";
//component
import Nav from "./Nav";

const Landing = () => {
  return (
    <section id="Landing">
      <Box bgColor={colors[0]} mb="80px" w="100%">
        <Nav />
        <HStack
          display="flex"
          justifyContent="space-between"
          mt={{ base: 4, sm: 5, lg: 4 }}
          ml={{ base: 2, md: 8 }}
          mr={{ base: 0, lg: 8 }}
        >
          <Box alignItems="left">
            <Text
              fontWeight="bold"
              fontSize={{ base: "11px", md: "14px", lg: "20px" }}
              fontFamily={Font.paragraph}
              mt="-20px"
            >
              take a break its coffee time
            </Text>
            <Text
              fontWeight="black"
              fontSize={{ base: "23px", sm: "30px", md: "38px", lg: "55px" }}
              fontFamily={Font.heading}
              sx={{ lineHeight: "1.1em" }}
              mb={3}
            >
              Cup of Coffee
              <br /> saves your
              <br /> day
            </Text>
            <Button
              role="group"
              rounded="xl"
              px={{ base: 5, lg: 8 }}
              py={{ base: 3, lg: 6 }}
              bgColor={colors[1]}
            >
              <Icon color="white" as={BiSolidCoffeeTogo} />
              <Text
                color="white"
                fontFamily={Font.heading}
                fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px" }}
                ml={2}
                fontWeight="bold"
              >
                services
              </Text>
            </Button>
          </Box>
          <Box
            alignItems={{ base: "right", lg: "center" }}
            justifyContent={{ base: "right", lg: "center" }}
            w={{ base: "50%", lg: "32%" }}
          >
            <Image
              src={packedCoffee}
              w={{ md: "400px", lg: "480px" }}
              h={{ base: "150px", md: "300px", lg: "360px" }}
            />
          </Box>

          <Box
            display={{ base: "none", lg: "block" }}
            w="25%"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={coffeeCup} />
            <Text fontFamily={Font.heading} fontWeight="bold" fontSize="20px">
              Ethiopian coffee shop with vision & mission
            </Text>
            <Box mx="10px">
              <Flex my={2}>
                <Icon
                  as={BiSolidCoffeeBean}
                  mr={3}
                  fontSize="15px"
                  fontWeight="bold"
                />
                <Text
                  fontFamily={Font.paragraph}
                  fontWeight="normal"
                  fontSize="15px"
                >
                  {" "}
                  Ethiopian coffee shop with
                  <br />
                  vision & mission
                </Text>
              </Flex>
              <Flex my={2}>
                <Icon
                  as={BiSolidCoffeeBean}
                  mr={3}
                  fontSize="15px"
                  fontWeight="bold"
                />
                <Text
                  fontFamily={Font.paragraph}
                  fontWeight="normal"
                  fontSize="15px"
                >
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
    </section>
  );
};

export default Landing;
