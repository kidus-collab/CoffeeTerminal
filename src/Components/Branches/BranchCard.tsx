import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { FC } from "react";
import { Font } from "../../utils/constants";
//images
import Lafto from "../../utils/images/Branches/Lafto branch 1.png";
import Lebu from "../../utils/images/Branches/Lebu.png";
import Kera from "../../utils/images/Branches/kera.png";

interface BranchCardProps {
  img: any;
  branch: string;
  gate: string;
  location: string;
}

export const lafto: BranchCardProps = {
  img: Lafto,
  branch: "Lafto branch",
  gate: "Gate 1",
  location: "We are found at lafto taxi tera infrot of mosque",
};
export const lebu: BranchCardProps = {
  img: Lebu,
  branch: "Lebu branch",
  gate: "Gate 2",
  location: "We are found at lafto taxi tera infrot of mosque",
};
export const kera: BranchCardProps = {
  img: Kera,
  branch: "Kera branch",
  gate: "Gate 3",
  location: "We are found at lafto taxi tera infrot of mosque",
};

const BranchCard: FC<BranchCardProps> = ({ img, branch, gate, location }) => {
  return (
    <Box
      border="2px"
      borderColor="black"
      w="100%"
      display="flex"
      flexDirection={{
        base: "column",
        md: branch === "Lebu branch" ? "column-reverse" : "column",
      }}
    >
      <Box w={{ base: "100%", md: "50%" }}>
        <Image src={img} w="100%" />
      </Box>
      <Box
        alignItems="left"
        w={{ base: "100%", md: "50%" }}
        justifyContent={branch === "Lebu branch" ? "right" : "left"}
      >
        <Box justifyContent="left">
          <Text
            fontSize={{ base: "32px", md: "40px" }}
            fontWeight="black"
            fontFamily={Font.heading}
            textAlign="center"
          >
            {branch}
          </Text>
          <Text
            my={3}
            fontSize={{ base: "15px", md: "18px" }}
            fontWeight="bold"
            fontFamily={Font.heading}
            textAlign="center"
          >
            {gate}
          </Text>
          <Text
            fontSize={{ base: "11px", md: "14px" }}
            fontWeight="light"
            fontFamily={Font.paragraph}
            textAlign="center"
          >
            {location}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BranchCard;
