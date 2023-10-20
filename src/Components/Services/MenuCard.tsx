import React, { FC } from "react";

import { Box, Text } from "@chakra-ui/react";
import { Font } from "../../utils/constants";

interface MenuCardProps {
  img: any;
  hone: string;
  htwo: string;
}

const MenuCard: FC<MenuCardProps> = ({ img, hone, htwo }) => {
  return (
    <Box w="300px" h="400px" bgColor="white" rounded="xl" boxShadow="lg">
      <Box rounded="xl" mt={2} w="80%" mx="auto" h="200px" bgImg={img} my="2" />
      <Box mx="30px" alignItems="left" justifyContent="left">
        <Text
          mb={2}
          fontWeight="extrabold"
          fontSize="25px"
          fontFamily={Font.heading}
        >
          {hone}
        </Text>
        <Text fontWeight="normal" fontSize="14px" fontFamily={Font.paragraph}>
          {htwo}
        </Text>
      </Box>
    </Box>
  );
};

export default MenuCard;
