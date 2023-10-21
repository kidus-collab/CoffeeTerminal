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
          backdropBlur="lg"
          bgColor={colors[0]}
          pos="absolute"
          w="40%"
          top={0}
          right={0}
          bottom={0}
          transitionDelay="3000ms"
          transitionProperty="ease-in-out"
        >
          <Button
            zIndex={10}
            pos="absolute"
            top={5}
            right={5}
            onClick={setToggle.toggle}
            boxShadow="lg"
          >
            <Icon as={FaAlignJustify} color="black" />
          </Button>
          <Box ml={12} my={24}>
            <Box my={8}>
              <Text fontFamily={Font.heading} fontWeight="bold" fontSize="16px">
                Home
              </Text>
            </Box>
            <Box my={8}>
              <Text fontFamily={Font.heading} fontWeight="bold" fontSize="16px">
                About
              </Text>
            </Box>
            <Box my={8}>
              <Text fontFamily={Font.heading} fontWeight="bold" fontSize="16px">
                Branches
              </Text>
            </Box>
            <Box my={8}>
              <Text fontFamily={Font.heading} fontWeight="bold" fontSize="16px">
                Mission
              </Text>
            </Box>
            <Box my={8}>
              <Text fontFamily={Font.heading} fontWeight="bold" fontSize="16px">
                Future
              </Text>
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
      >
        <Icon as={FaAlignJustify} color="black" />
      </Button>
      {hamMenu()}
    </Box>
  );
};

export default Menu;
