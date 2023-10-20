import React, { FC } from "react";

import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Font } from "../../utils/constants";

interface MissonCardProps {
  img: any;
  h1: string;
  h2: string;
  location: string;
}

const MissionCard: FC<MissonCardProps> = ({ img, h1, h2, location }) => {
  return (
    <Box width={{ base: "100%", md: "50%" }}>
      <Image src={img} w="100%" h="300px" />
      <Box mx={5} alignItems="left" justifyContent="left">
        <Box mx={2} mb={2} mt={3} display="flex" justifyContent="space-between">
          <Text
            fontFamily={Font.heading}
            fontSize={{ base: "20px", md: "24px", lg: "30px" }}
            fontWeight="extrabold"
          >
            {h1}
          </Text>
          <Flex mt={2}>
            <FaMapMarkerAlt />
            <Text
              fontFamily={Font.paragraph}
              fontSize={{ base: "10px", md: "13px", lg: "16px" }}
              fontWeight="bold"
              ml={2}
              mt="-1px"
            >
              {location}
            </Text>
          </Flex>
        </Box>
        <Box width="100%" overflowWrap="break-word">
          <Text
            fontFamily={Font.heading}
            fontSize={{ base: "10px", md: "12px", lg: "14px" }}
            fontWeight="light"
          >
            {h2}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MissionCard;
