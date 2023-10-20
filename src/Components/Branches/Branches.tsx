import React from "react";

import { Box, Text } from "@chakra-ui/react";
import { Font } from "../../utils/constants";
import BranchCard, { kera, lafto, lebu } from "./BranchCard";
const Branches = () => {
  return (
    <div id="Branches">
      <Box w="100%" border="2px" borderColor="black">
        <Text
          fontSize={{ base: "32px", md: "40px" }}
          fontWeight="black"
          fontFamily={Font.heading}
          textAlign="center"
        >
          Location of our shop
          <BranchCard
            img={lafto.img}
            branch={lafto.branch}
            gate={lafto.gate}
            location={lafto.location}
          />
          <BranchCard
            img={lebu.img}
            branch={lebu.branch}
            gate={lebu.gate}
            location={lebu.location}
          />
          <BranchCard
            img={kera.img}
            branch={kera.branch}
            gate={kera.gate}
            location={kera.location}
          />
        </Text>
      </Box>
      s
    </div>
  );
};

export default Branches;
