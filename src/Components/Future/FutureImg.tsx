import React from "react";

import { Image, Box } from "@chakra-ui/react";
const FutureImg = ({ img }: any) => {
  return (
    <Box w={{ base: "50%", lg: "30%" }}>
      <Image src={img} w="100%" />
    </Box>
  );
};

export default FutureImg;
