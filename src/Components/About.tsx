import React from "react";

import { Image, Avatar, Flex, Box, Text } from "@chakra-ui/react";
import { Font } from "../utils/constants";

import EyobA from "../utils/images/About/EyobA.png";
import Shop from "../utils/images/About/Aboutus.jpg";

const About = () => {
  return (
    <section id="About">
      <Box
        mx={{ base: 0, md: 5 }}
        flexDirection={{ base: "column-reverse", md: "row" }}
        display="flex"
      >
        <Box
          my={{ base: 2, md: 6 }}
          w={{ base: "90%", md: "50%" }}
          alignItems="left"
          ml={{ base: 3, md: 0 }}
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
            mt={1}
            mb={4}
            fontWeight="light"
            fontFamily={Font.paragraph}
          >
            Coffee Terminal launched its first coffee shop in Addis Ababa,
            Ethiopia on September 11, 2022. We currently operate three locations
            in the city:
            <span style={{ fontWeight: "bold" }}> Laphto Gate 1 </span>,
            <span style={{ fontWeight: "bold" }}>Lebu Mebrathile Gate 2</span>,
            and <span style={{ fontWeight: "bold" }}>Kera Gate 3 </span> . We
            plan to expand to 12 locations by the end of 2024.
          </Text>
          <Flex ml={2}>
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
          <Image src={Shop} w="100%" h="88%" />
        </Box>
      </Box>
    </section>
  );
};

export default About;
