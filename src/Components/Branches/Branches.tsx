import React from "react";

import { Box, Text } from "@chakra-ui/react";
import { Font } from "../../utils/constants";
import BranchCard, { kera, lafto, lebu } from "./BranchCard";
const Branches = () => {
  return (
    <div id="Branches">
      <Box mt={5} w="100%">
        <Text
          fontSize={{ base: "30px", md: "40px" }}
          fontWeight="black"
          fontFamily={Font.heading}
          textAlign="center"
          mb={5}
        >
          Location of our shops
          <Box mt={6}>
            <BranchCard
              img={lafto.img}
              branch={lafto.branch}
              gate={lafto.gate}
              location={lafto.location}
            />
          </Box>
          <Box my={8}>
            <BranchCard
              img={lebu.img}
              branch={lebu.branch}
              gate={lebu.gate}
              location={lebu.location}
            />
          </Box>
          <Box>
            <BranchCard
              img={kera.img}
              branch={kera.branch}
              gate={kera.gate}
              location={kera.location}
            />
          </Box>
        </Text>
      </Box>
    </div>
  );
};

export default Branches;
