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
    <Box
      w={{ base: "40%", md: "35%", lg: "25%" }}
      h={{ base: "180px", sm: "230px", md: "270px", lg: "390px" }}
      bgColor="white"
      rounded="2xl"
      boxShadow="xl"
      mt={{ base: 2, md: 0 }}
    >
      <Box
        rounded="xl"
        mt={2}
        w={{ base: "90%", lg: "93%" }}
        mx="auto"
        h={{ base: "85px", sm: "110px", md: "120px", lg: "200px" }}
        bgImg={img}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        my="2"
      />
      <Box
        mx={{ base: 2, md: 4, lg: "30px" }}
        alignItems="left"
        justifyContent="left"
      >
        <Text
          mb={1}
          fontWeight="extrabold"
          fontSize={{ base: "10px", sm: "15px", md: "20px", lg: "25px" }}
          fontFamily={Font.heading}
        >
          {hone}
        </Text>
        <Text
          fontWeight="light"
          fontSize={{ base: "7px", sm: "9px", md: "10px", lg: "14px" }}
          fontFamily={Font.paragraph}
        >
          {htwo}
        </Text>
      </Box>
    </Box>
  );
};

export default MenuCard;
