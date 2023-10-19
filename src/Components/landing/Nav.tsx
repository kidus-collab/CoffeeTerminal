import React from "react";

import { Image, Text, useBoolean, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../../utils/images/Nav/logo.png";

import { Font, colors } from "../../utils/constants";

const Nav = () => {
  const [Red, setRed] = useBoolean(false);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box ml="6px" mt="5px">
        <Image src={logo} />
      </Box>
      <Box display="flex" mr={3} gap={3}>
        <Box
          borderBottom={Red ? "2px" : "none"}
          borderColor={Red ? colors[2] : "transparent"}
          borderBottomRadius="md"
          mx={5}
        >
          <Link to="/landing">
            <Text
              fontFamily={Font.heading}
              fontWeight="medium"
              fontSize="16px"
              onClick={setRed.toggle}
            >
              Home
            </Text>
          </Link>
        </Box>
        <Box
          borderBottom={Red ? "2px" : "none"}
          borderColor={Red ? colors[2] : "transparent"}
          borderBottomRadius="md"
          mx={5}
        >
          <Link to="/about">
            <Text
              fontFamily={Font.heading}
              fontWeight="medium"
              fontSize="16px"
              onClick={setRed.toggle}
            >
              About
            </Text>
          </Link>
        </Box>
        <Box
          borderBottom={Red ? "2px" : "none"}
          borderColor={Red ? colors[2] : "transparent"}
          borderBottomRadius="md"
        >
          <Link to="/branches">
            <Text
              fontFamily={Font.heading}
              fontWeight="medium"
              fontSize="16px"
              onClick={setRed.toggle}
              mx={5}
            >
              Branches
            </Text>
          </Link>
        </Box>
        <Box
          borderBottom={Red ? "2px" : "none"}
          borderColor={Red ? colors[2] : "transparent"}
          borderBottomRadius="md"
          mx={5}
        >
          <Link to="/Mission">
            <Text
              fontFamily={Font.heading}
              fontWeight="medium"
              fontSize="16px"
              onClick={setRed.toggle}
            >
              Mission
            </Text>
          </Link>
        </Box>
        <Box
          borderBottom={Red ? "2px" : "none"}
          borderColor={Red ? colors[2] : "transparent"}
          borderBottomRadius="md"
          mx={5}
        >
          <Link to="/Future">
            <Text
              fontFamily={Font.heading}
              fontWeight="medium"
              fontSize="16px"
              onClick={setRed.toggle}
            >
              Future
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
