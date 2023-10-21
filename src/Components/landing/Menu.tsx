import React from "react";

import { Box, Icon, Text, Button, useBoolean } from "@chakra-ui/react";
import { FaAlignJustify } from "react-icons/fa";

const Menu = () => {
  const [toggle, setToggle] = useBoolean(false);
  return (
    <Box display={{ base: "block", md: "none" }} boxShadow="md" rounded="lg">
      <Button pos="absolute" top={5} right={5} onClick={setToggle.toggle}>
        <Icon as={FaAlignJustify} color={toggle ? "white" : "black"} />
      </Button>
    </Box>
  );
};

export default Menu;
