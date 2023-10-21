import React from "react";

import { Image, Text, useBoolean, Box } from "@chakra-ui/react";

import logo from "../../utils/images/Nav/logo.png";

import { Font, colors } from "../../utils/constants";

import Menu from "./Menu";

const Nav = () => {
  const [Red, setRed] = useBoolean(false);

  return (
    <Box display="flex" mb={5} justifyContent="space-between">
      <Box ml={{ base: 2, md: 8 }} mt="5px">
        <Image
          src={logo}
          mt={2}
          w={{ base: "60px", lg: "80px" }}
          h={{ base: "40px", lg: "50px" }}
        />
      </Box>
      <Menu />
      <Box display={{ base: "none", lg: "flex" }} mt={5} mr={3} gap={3}>
        <Box
          borderBottom={Red ? "2px" : "none"}
          borderColor={Red ? colors[2] : "transparent"}
          borderBottomRadius="md"
          mx={5}
        >
          <a href="#Landing">
            <Text
              fontFamily={Font.heading}
              fontWeight="bold"
              fontSize="16px"
              onClick={setRed.toggle}
            >
              Home
            </Text>
          </a>
        </Box>
        <Box
          borderBottom={Red ? "2px" : "none"}
          borderColor={Red ? colors[2] : "transparent"}
          borderBottomRadius="md"
          mx={5}
        >
          <a href="#About">
            <Text
              fontFamily={Font.heading}
              fontWeight="bold"
              fontSize="16px"
              onClick={setRed.toggle}
            >
              About
            </Text>
          </a>
        </Box>
        <Box
          borderBottom={Red ? "2px" : "none"}
          borderColor={Red ? colors[2] : "transparent"}
          borderBottomRadius="md"
        >
          <a href="#Branches">
            <Text
              fontFamily={Font.heading}
              fontWeight="bold"
              fontSize="16px"
              onClick={setRed.toggle}
              mx={5}
            >
              Branches
            </Text>
          </a>
        </Box>
        <Box
          borderBottom={Red ? "2px" : "none"}
          borderColor={Red ? colors[2] : "transparent"}
          borderBottomRadius="md"
          mx={5}
        >
          <a href="#Mission">
            <Text
              fontFamily={Font.heading}
              fontWeight="bold"
              fontSize="16px"
              onClick={setRed.toggle}
            >
              Mission
            </Text>
          </a>
        </Box>
        <Box
          borderBottom={Red ? "2px" : "none"}
          borderColor={Red ? colors[2] : "transparent"}
          borderBottomRadius="md"
          mx={5}
        >
          <a href="#Future">
            <Text
              fontFamily={Font.heading}
              fontWeight="bold"
              fontSize="16px"
              onClick={setRed.toggle}
            >
              Future
            </Text>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
