import React from "react";

import { Box, Center, HStack, Text } from "@chakra-ui/react";
import MenuCard from "./MenuCard";
//images
import Bgimg from "../../utils/images/Menu/logobgpic.jpg";
import PackedCoffee from "../../utils/images/Menu/packedcoffee.jpg";
import Catering from "../../utils/images/Menu/cateringimg.jpg";
import CoffeeWater from "../../utils/images/Menu/coffee+water.jpg";
import Mohito from "../../utils/images/Menu/mohito.jpg";
import Machiatto from "../../utils/images/Menu/machiatto.jpg";

import { Font } from "../../utils/constants";

interface Packed {
  Img: any;
  h1: string;
  h2: string;
}

// packed coffee card data
const packed: Packed = {
  Img: PackedCoffee,
  h1: "packed Coffee",
  h2: "Packed & Roasted quality coffee ready to go for our customers",
};
// catering card data
const catering: Packed = {
  Img: Catering,
  h1: "Coffee catering",
  h2: "we cater coffee at events & different social gatherings",
};
// coffee + water card data
const coffeewater: Packed = {
  Img: CoffeeWater,
  h1: "Coffee catering",
  h2: "We  offer a 200ml bottle of water for free to customers who purchase a coffee drink. Coffee Terminal cares about the health and comfort of our customers",
};
// mohito card  data
const mohito: Packed = {
  Img: Mohito,
  h1: "Mohito",
  h2: "Recently added beverage & customers faviorite. One of our houses special",
};
// machiato card  data
const machiato: Packed = {
  Img: Machiatto,
  h1: "Mohito",
  h2: "Breathtaking machiato with takeaway cup , Write customers names on take away cup ",
};

const Services = () => {
  return (
    <Box bgImg={Bgimg} border="2px" borderColor="black">
      <div id="Services">
        <Box alignItems="center" justifyContent="center">
          <Text
            fontSize="50px"
            fontWeight="black"
            fontFamily={Font.heading}
            textAlign="center"
          >
            What we serve customers
          </Text>
          <Text
            fontWeight="normal"
            fontFamily={Font.paragraph}
            textAlign="center"
          >
            Roasted & grounded coffee from all around ethiopia
          </Text>
          <HStack mx="auto" mb={4}>
            <MenuCard img={packed.Img} hone={packed.h1} htwo={packed.h2} />
            <MenuCard
              img={catering.Img}
              hone={catering.h1}
              htwo={catering.h2}
            />
          </HStack>
          <Text
            fontSize="50px"
            fontWeight="black"
            fontFamily={Font.heading}
            textAlign="center"
            mt={1}
          >
            Menu
          </Text>
          <Text
            fontWeight="normal"
            fontFamily={Font.paragraph}
            textAlign="center"
          >
            Few of our finest beverages
          </Text>
          <HStack w="100%" justifyContent="space-evenly" alignItems="Center">
            <MenuCard
              img={coffeewater.Img}
              hone={coffeewater.h1}
              htwo={coffeewater.h2}
            />
            <MenuCard img={mohito.Img} hone={mohito.h1} htwo={mohito.h2} />
            <MenuCard
              img={machiato.Img}
              hone={machiato.h1}
              htwo={machiato.h2}
            />
          </HStack>
        </Box>
      </div>
    </Box>
  );
};

export default Services;
