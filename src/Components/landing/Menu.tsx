import React from "react";

import { Box, Icon, Text, Button, useBoolean } from "@chakra-ui/react";
import { FaAlignJustify } from "react-icons/fa";
import { Font, colors } from "../../utils/constants";

const Menu = () => {
  const [toggle, setToggle] = useBoolean(false);

  const hamMenu = () => {
    if (toggle) {
      return (
        <Box
          zIndex={10}
          bgColor={colors[0]}
          pos="absolute"
          w="40%"
          top={0}
          right={0}
          bottom={0}
          transitionDelay="3000ms"
          transitionProperty="ease-in-out"
          boxShadow="lg"
        >
          <Button
            zIndex={20}
            pos="absolute"
            top={5}
            right={5}
            onClick={setToggle.toggle}
            bgColor={colors[0]}
          >
            <Icon as={FaAlignJustify} color={colors[2]} />
          </Button>
          <Box ml={12} my={24}>
            <Box my={8}>
              <a href="#Landing">
                <Text
                  fontFamily={Font.heading}
                  fontWeight="bold"
                  fontSize="16px"
                  color={colors[2]}
                >
                  Home
                </Text>
              </a>
            </Box>
            <a href="#About">
              <Box my={8}>
                <Text
                  fontFamily={Font.heading}
                  fontWeight="bold"
                  fontSize="16px"
                  color={colors[2]}
                >
                  About
                </Text>
              </Box>
            </a>
            <Box my={8}>
              <a href="#Branches">
                <Text
                  fontFamily={Font.heading}
                  fontWeight="bold"
                  fontSize="16px"
                  color={colors[2]}
                >
                  Branches
                </Text>
              </a>
            </Box>
            <Box my={8}>
              <a href="#Mission">
                <Text
                  fontFamily={Font.heading}
                  fontWeight="bold"
                  fontSize="16px"
                  color={colors[2]}
                >
                  Mission
                </Text>
              </a>
            </Box>
            <Box my={8}>
              <a href="#Future">
                <Text
                  fontFamily={Font.heading}
                  fontWeight="bold"
                  fontSize="16px"
                  color={colors[2]}
                >
                  Future
                </Text>
              </a>
            </Box>
          </Box>
        </Box>
      );
    }
  };
  return (
    <Box display={{ base: "block", md: "none" }} boxShadow="md" rounded="lg">
      <Button
        pos="absolute"
        top={5}
        right={5}
        boxShadow="md"
        onClick={setToggle.toggle}
        bgColor={colors[0]}
      >
        <Icon as={FaAlignJustify} color={colors[2]} />
      </Button>
      {hamMenu()}
    </Box>
  );
};

export default Menu;
