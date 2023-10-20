import React from "react";

import { Image, Avatar, Flex, Box, Text } from "@chakra-ui/react";
import { Font } from "../utils/constants";

import EyobA from "../utils/images/About/EyobA.png";
import Shop from "../utils/images/About/Aboutus.jpg";

const About = () => {
  return (
    <section id="About">
      <Box flexDirection={{ base: "column-reverse", md: "row" }} display="flex">
        <Box
          my={{ base: 2, md: 6 }}
          w={{ base: "100%", md: "50%" }}
          alignItems="left"
          justifyContent="left"
        >
          <Text
            fontFamily={Font.heading}
            fontWeight="extrabold"
            fontSize={{ base: "40px", md: "50px" }}
            ml={{ base: 2, md: 5 }}
          >
            About Us
          </Text>
          <Text
            ml={{ base: 2, md: 5 }}
            fontFamily={Font.heading}
            fontSize={{ base: "15px", md: "18px" }}
            fontWeight="bold"
          >
            Quailty coffee with great taste .
          </Text>
          <Text
            ml={{ base: 2, md: 5 }}
            fontSize={{ base: "9px", lg: "16px" }}
            my={1}
            fontWeight="light"
            fontFamily={Font.paragraph}
          >
            Coffee Terminal launched its first coffee shop in Addis Ababa,
            Ethiopia on September 11, 2022. We currently operate three locations
            in the city: Laphto Gate 1, Lebu Mebrathile Gate 2, and Kera Gate 3.
            We plan to expand to 12 locations by the end of 2024.
          </Text>
          <Flex ml={5}>
            <Avatar
              src={EyobA}
              w={{ base: "45px", md: "60px" }}
              h={{ base: "45px", md: "60px" }}
              mr={2}
            />
            <Box>
              <Text
                fontFamily={Font.paragraph}
                fontSize={{ base: "14px", md: "20px" }}
                fontWeight="bold"
              >
                Eyob Abera
              </Text>
              <Text
                fontFamily={Font.heading}
                fontSize={{ base: "11px", md: "15px" }}
                fontWeight="normal"
              >
                Founder
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box py={{ base: 0, md: 3 }} w={{ base: "100%", md: "50%" }}>
          <Image src={Shop} w="100%" h="100%" />
        </Box>
      </Box>
    </section>
  );
};

export default About;
