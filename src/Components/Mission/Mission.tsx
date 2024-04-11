import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import MissionCard from "./MissionCard";
//images
import Missionimg from "../../utils/images/Mission/mission.jpg";
import Vision from "../../utils/images/Mission/vision.jpg";
import Goal from "../../utils/images/Mission/goal.jpg";
import Objective from "../../utils/images/Mission/objective.jpg";

import { Font } from "../../utils/constants";
interface Type {
  Img: any;
  h1: string;
  h2: string;
  location: string;
}

// objective card detail
const objective: Type = {
  Img: Objective,
  h1: "Objective",
  h2: "To establish Coffee Terminal as the premier gateway for the finest coffee in Ethiopia by the end of 2024, while maintaining our uncompromising principles of quality, service, and sustainability. We will achieve this by sourcing the highest quality coffee beans from our Ethiopian farmers, roasting them to perfection, and providing excellent customer service in  our one-person, one-cup, one-terminal coffee shops.",
  location: "Lebu",
};
// objective card detail
const vision: Type = {
  Img: Vision,
  h1: "Vision",
  h2: `To be the most valued coffee processing plant in
  Africa by 2026.`,
  location: "Kera",
};
// objective card detail
const mission: Type = {
  Img: Missionimg,
  h1: "Mission",
  h2: "We are committed to sourcing our coffee ethically, from farmers who are paid fair wages and who practice sustainable farming methods. We also believe that coffee should be enjoyed in relaxed and inviting atmosphere. Our coffee shops are designed to be comfortable and welcoming, where people can gather to socialize and enjoy a cup of coffee. We are committed to giving back to our community, and we donate a portion of our profits to local charities.",
  location: "Lebu",
};
// objective card detail
const goal: Type = {
  Img: Goal,
  h1: "Goal",
  h2: "To ethically source and serve the finest coffee,  creating a unique and relaxing coffee experience for our community. We believe that coffee is more than just a beverage. It is a social ritual that brings people together, a way to start the day, and a way to relax and unwind.",
  location: "Lafto",
};

const Mission = () => {
  return (
    <section id="Mission">
      <Box mx={3} my={6}>
        <Text
          fontSize={{ base: "30px", sm: "40px", md: "50px" }}
          fontWeight="black"
          fontFamily={Font.heading}
          textAlign="center"
        >
          Vision & Missions
        </Text>
        <Text
          mt={1}
          mb={5}
          fontSize={{ base: "12px", md: "17px" }}
          fontWeight="light"
          fontFamily={Font.paragraph}
          textAlign="center"
        >
          Objectives we set out to achieve in this coffee shop
        </Text>
        <Flex mb={6} gap={6} flexDirection={{ base: "column", md: "row" }}>
          <MissionCard
            img={objective.Img}
            h1={objective.h1}
            h2={objective.h2}
            location={objective.location}
          />
          <MissionCard
            img={vision.Img}
            h1={vision.h1}
            h2={vision.h2}
            location={vision.location}
          />
        </Flex>
        <Flex gap={6} flexDirection={{ base: "column", md: "row" }}>
          <MissionCard
            img={mission.Img}
            h1={mission.h1}
            h2={mission.h2}
            location={mission.location}
          />
          <MissionCard
            img={goal.Img}
            h1={goal.h1}
            h2={goal.h2}
            location={goal.location}
          />
        </Flex>
      </Box>
    </section>
  );
};

export default Mission;
