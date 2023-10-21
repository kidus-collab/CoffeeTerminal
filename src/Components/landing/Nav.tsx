import React, { useState } from "react";

import { Image, Text, Box } from "@chakra-ui/react";

import logo from "../../utils/images/Nav/logo.png";

import { Font, colors } from "../../utils/constants";

import Menu from "./Menu";

interface useStateType {
  isactive: boolean;
  name: string;
}
const Nav = () => {
  const [Red, setRed] = useState<useStateType>({ isactive: false, name: "" });

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
      <Box
        display={{ base: "none", md: "flex" }}
        mt={5}
        mr={{ md: 4, lg: 10 }}
        gap={{ md: 6, lg: 12 }}
      >
        <Box
          border="3px"
          borderBottom={Red.isactive && Red.name === "Home" ? "3px" : "none"}
          borderColor={
            Red.isactive && Red.name === "Home" ? colors[2] : "transparent"
          }
          _hover={{ borderBottom: "3px", borderColor: colors[2] }}
          alignItems="center"
          justifyContent="center"
        >
          <a href="#Landing">
            <Text
              fontFamily={Font.heading}
              fontWeight="bold"
              fontSize="16px"
              onClick={() => setRed({ isactive: true, name: "Home" })}
            >
              Home
            </Text>
          </a>
        </Box>
        <Box
          borderBottom={Red.isactive && Red.name === "Home" ? "3px" : "none"}
          borderColor={
            Red.isactive && Red.name === "Home" ? colors[2] : "transparent"
          }
          _hover={{ borderBottom: "3px", borderColor: colors[2] }}
        >
          <a href="#About">
            <Text
              fontFamily={Font.heading}
              fontWeight="bold"
              fontSize="16px"
              onClick={() => setRed({ isactive: true, name: "Home" })}
            >
              About
            </Text>
          </a>
        </Box>
        <Box
          borderBottom={Red.isactive && Red.name === "Home" ? "3px" : "none"}
          borderColor={
            Red.isactive && Red.name === "Home" ? colors[2] : "transparent"
          }
          _hover={{ borderBottom: "3px", borderColor: colors[2] }}
        >
          <a href="#Branches">
            <Text
              fontFamily={Font.heading}
              fontWeight="bold"
              fontSize="16px"
              onClick={() => setRed({ isactive: true, name: "Home" })}
            >
              Branches
            </Text>
          </a>
        </Box>
        <Box
          borderBottom={Red.isactive && Red.name === "Home" ? "3px" : "none"}
          borderColor={
            Red.isactive && Red.name === "Home" ? colors[2] : "transparent"
          }
          _hover={{ borderBottom: "3px", borderColor: colors[2] }}
        >
          <a href="#Mission">
            <Text
              fontFamily={Font.heading}
              fontWeight="bold"
              fontSize="16px"
              onClick={() => setRed({ isactive: true, name: "Home" })}
            >
              Mission
            </Text>
          </a>
        </Box>
        <Box
          borderBottom={Red.isactive && Red.name === "Home" ? "3px" : "none"}
          borderColor={
            Red.isactive && Red.name === "Home" ? colors[2] : "transparent"
          }
        >
          <a href="#Future">
            <Text
              fontFamily={Font.heading}
              fontWeight="bold"
              fontSize="16px"
              _hover={{ borderBottom: "3px", borderColor: colors[2] }}
              onClick={() => setRed({ isactive: true, name: "Home" })}
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
