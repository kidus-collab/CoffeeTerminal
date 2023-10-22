import React from "react";

import { Box, Flex, Text, Button, HStack, Image, Icon } from "@chakra-ui/react";

import { BiSolidCoffeeBean, BiSolidCoffeeTogo } from "react-icons/bi";

import { Font, colors } from "../../utils/constants";
import packedCoffee from "../../utils/images/landing/coffeebag.png";
import coffeeCup from "../../utils/images/landing/coffeecup.png";
//component
import Nav from "./Nav";

const Landing = () => {
  return (
    <section style={{ width: "100%" }} id="Landing">
      <Box bgColor={colors[0]} mb={10} w="100%">
        <Nav />
        <HStack
          display="flex"
          w={{ base: "100%", lg: "none" }}
          justifyContent="space-between"
          mt={{ base: 6, lg: 4 }}
          ml={{ base: 2, sm: 5, md: 8 }}
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
              fontSize={{ base: "25px", sm: "32px", md: "43px", lg: "55px" }}
              fontFamily={Font.heading}
              sx={{ lineHeight: "1.1em" }}
              mb={{ base: 3, lg: 4 }}
            >
              Cup of Coffee
              <br /> saves your
              <br /> day
            </Text>
            <a href="#Services">
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
                  fontSize={{
                    base: "10px",
                    sm: "12px",
                    md: "14px",
                    lg: "16px",
                  }}
                  ml={2}
                  fontWeight="bold"
                >
                  services
                </Text>
              </Button>
            </a>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            w={{ base: "40%", lg: "32%" }}
            overflowX="hidden"
          >
            <Image
              src={coffeeCup}
              w={{ base: "180px", sm: "158px", md: "280px", lg: "340px" }}
              h={{ base: "220px", sm: " 209px ", md: "350px", lg: "432px" }}
              alignSelf="self-end"
              mx="auto"
            />
          </Box>

          <Box
            display={{ base: "none", lg: "block" }}
            w="25%"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={packedCoffee} />
            <Text fontFamily={Font.heading} fontWeight="bold" fontSize="20px">
              Ethiopian coffee shop with vision & mission
            </Text>
            <Box mx="10px">
              <Flex my={2}>
                <Icon
                  as={BiSolidCoffeeBean}
                  mr={3}
                  fontSize="11px"
                  fontWeight="bold"
                />
                <Text
                  fontFamily={Font.paragraph}
                  fontWeight="regular"
                  fontSize="11px"
                >
                  {" "}
                  coffee is more than just a beverage
                  <br />
                  It brings people together
                </Text>
              </Flex>
              <Flex my={2}>
                <Icon
                  as={BiSolidCoffeeBean}
                  mr={3}
                  mt={1}
                  fontSize="11px"
                  fontWeight="bold"
                />
                <Text
                  fontFamily={Font.paragraph}
                  fontWeight="regular"
                  fontSize="11px"
                >
                  {" "}
                  premier gateway for the finest
                  <br /> coffee in Ethiopia
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
