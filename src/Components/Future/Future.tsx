import React from "react";

import { Box, Text, Flex } from "@chakra-ui/react";
import { Font } from "../../utils/constants";
import FutureImg from "./FutureImg";
// images
import Future1 from "../../utils/images/Future/Future1.jpg";
import Future2 from "../../utils/images/Future/Future2.jpg";
import Future3 from "../../utils/images/Future/Future3.jpg";
import Future4 from "../../utils/images/Future/Future4.jpg";
import Future5 from "../../utils/images/Future/Future5.jpg";
import Future6 from "../../utils/images/Future/Future6.jpg";

const Future = () => {
  return (
    <div id="Future">
      <Box mt={2} mb={5}>
        <Text
          fontSize={{ base: "32px", md: "40px" }}
          fontWeight="black"
          fontFamily={Font.heading}
          textAlign="center"
        >
          Future of Coffee Terminal
        </Text>
        <Text
          mt={1}
          mb={5}
          fontSize={{ base: "12px", md: "17px" }}
          fontWeight="light"
          fontFamily={Font.paragraph}
          textAlign="center"
        >
          We hope to expand our coffee shop with different designs
        </Text>
        <Box display={{ base: "flex", lg: "block" }}>
          <Flex gap={3} flexDirection={{ base: "column", lg: "row" }}>
            <FutureImg img={Future1} />
            <FutureImg img={Future2} />
            <FutureImg img={Future3} />
          </Flex>
          <Flex gap={3} flexDirection={{ base: "column", lg: "row" }}>
            <FutureImg img={Future4} />
            <FutureImg img={Future5} />
            <FutureImg img={Future6} />
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Future;
