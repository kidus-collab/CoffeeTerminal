import React from "react";

import { Box, Text, Image, Icon } from "@chakra-ui/react";
import { FaMailBulk } from "react-icons/fa";
import { Font } from "../utils/constants";

const Footer = () => {
  return (
    <Box display="flex" flexWrap="wrap">
      <Box>
        <Text fontFamily={Font.heading} color="white">
          Contact Us
        </Text>
        <Box>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </Box>
      </Box>
      <Box>
        <Text fontFamily={Font.heading} color="white">
          Location
        </Text>
      </Box>
      <Box>
        <Text fontFamily={Font.heading} color="white">
          Our Socials
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
