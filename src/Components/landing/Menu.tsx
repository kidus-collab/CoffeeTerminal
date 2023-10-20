import React from "react";

import { Box, Icon, Text, Button, useBoolean } from "@chakra-ui/react";
import { FaAlignJustify } from "react-icons/fa";

const Menu = () => {
  const [toggle, setToggle] = useBoolean(false);
  return (
    <Box display={{ md: "none" }}>
      <Button onClick={setToggle.toggle}>
        <Icon
          pos="absolute"
          top={3}
          right={3}
          as={FaAlignJustify}
          color={toggle ? "white" : "black"}
        />
      </Button>
    </Box>
  );
};

export default Menu;
