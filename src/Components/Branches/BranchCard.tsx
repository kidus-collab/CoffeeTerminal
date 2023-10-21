import { Box, Icon, Button, Text, Image } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Font, colors, laftoMap } from "../../utils/constants";
import { FaMapMarked } from "react-icons/fa";
//images
import Lafto from "../../utils/images/Branches/Lafto branch 1.png";
import Lebu from "../../utils/images/Branches/Lebu.png";
import Kera from "../../utils/images/Branches/kera.png";

interface BranchCardProps {
  img: any;
  branch: string;
  gate: string;
  location: any;
}

export const lafto: BranchCardProps = {
  img: Lafto,
  branch: "Lafto branch",
  gate: "Gate 1",
  location: "We are found at lafto taxi tera infront of mosque",
};
export const lebu: BranchCardProps = {
  img: Lebu,
  branch: "Lebu branch",
  gate: "Gate 2",
  location: "We are found at lebu around varnero roundabout",
};
export const kera: BranchCardProps = {
  img: Kera,
  branch: "Kera branch",
  gate: "Gate 3",
  location: "We are found at kera Cherkos road infront of cherkos taxi",
};

interface locationLinkType {
  lafto: string;
  lebu: string;
  kera: string;
}
export const locationLink: locationLinkType = {
  lafto: laftoMap,
  lebu: laftoMap,
  kera: "https://maps.app.goo.gl/yVDXZxur3FdSoxqg8",
};

const BranchCard: FC<BranchCardProps> = ({ img, branch, gate, location }) => {
  const [link, setLink] = useState<string | undefined>();

  function locationLinking(): string | undefined {
    switch (link) {
      case "Lafto branch":
        return locationLink.lafto;
      case "Lebu branch":
        return locationLink.lebu;
      case "Kera branch":
        return locationLink.kera;
    }
  }
  return (
    <Box
      mb={6}
      w="100%"
      display="flex"
      flexDirection={{
        base: "column",
        md: branch === "Lebu branch" ? "row-reverse" : "row",
      }}
    >
      <Box w={{ base: "100%", md: "50%" }}>
        <Image src={img} w="100%" />
      </Box>
      <Box w={{ base: "100%", md: "50%" }}>
        <Box
          alignItems="left"
          justifyContent="left"
          ml={3}
          my={{ base: 5, md: 3 }}
        >
          <Text
            fontSize={{ base: "24px", sm: "28px", md: "30px" }}
            fontWeight="black"
            fontFamily={Font.heading}
            textAlign="left"
            ml={3}
          >
            {branch}
          </Text>
          <Text
            mt="-2px"
            mb={1}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }}
            fontWeight="bold"
            fontFamily={Font.heading}
            textAlign="left"
            ml={3}
          >
            {gate}
          </Text>
          <Box w={{ base: "64%", sm: "62%", md: "64%" }}>
            <Text
              fontSize={{ base: "13px", sm: "14px", lg: "16px" }}
              fontWeight="light"
              fontFamily={Font.paragraph}
              textAlign="left"
              ml={3}
            >
              {location}
            </Text>
          </Box>
          <a href={locationLinking()} target="blank">
            <Button
              role="group"
              rounded="xl"
              px={{ base: 5, lg: 6 }}
              py={{ base: 3, lg: 6 }}
              bgColor={colors[1]}
              alignSelf={{ base: "start", md: "end" }}
            >
              <Icon color="white" as={FaMapMarked} />
              <Text
                color="white"
                fontFamily={Font.heading}
                fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px" }}
                ml={2}
                fontWeight="bold"
                onClick={() => setLink(branch)}
              >
                See Map
              </Text>
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default BranchCard;
