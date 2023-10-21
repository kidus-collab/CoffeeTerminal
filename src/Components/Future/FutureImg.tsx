import React from "react";

import { Image, Box } from "@chakra-ui/react";
const FutureImg = ({ img }: any) => {
  return (
    <Box>
      <Image src={img} w="100%" />
    </Box>
  );
};

export default FutureImg;
