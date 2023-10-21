import React from "react";
import { locationLink } from "./Branches/BranchCard";
import { Box, Text, Icon, Flex } from "@chakra-ui/react";
import {
  FaMailBulk,
  FaMapMarkerAlt,
  FaMapMarked,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { Font, laftoMap } from "../utils/constants";
import Footer1 from "../utils/images/Footer/Footer1.jpg";

const Footer = () => {
  return (
    <Box
      h="300px"
      bgImg={Footer1}
      bgPos="center"
      bgAttachment="cover"
      w="100%"
      mt={20}
      pos="relative"
      bottom={0}
      right={0}
      left={0}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        mx="auto"
        mt="50px"
        mb="50px"
        gap={4}
        display="grid"
        gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      >
        <Box mt={5} ml={{ base: 6, md: 10 }}>
          <Text
            fontFamily={Font.heading}
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            fontWeight="black"
            color="white"
          >
            Contact Us
          </Text>
          <Box ml={4} mt={2}>
            <Flex>
              <Icon as={FaMailBulk} color="white" mr={2} />
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvpbNksWcCglVCTbKRzmMLrmHmRTCwctjBbqXCNVjJvNGlzSnjTGTKlJkbnPlLbLqzqRQq ">
                <Text
                  fontFamily={Font.paragraph}
                  fontSize={{ base: "9px", md: "12px", lg: "15px" }}
                  fontWeight="regular"
                  _hover={{ textDecoration: "underline", color: "blue" }}
                  color="white"
                >
                  CoffeeTerminalEt@gmail.com
                </Text>
              </a>
            </Flex>
            <Flex my={2}>
              <Icon as={FaPhoneAlt} color="white" mr={2} />
              <Text
                fontFamily={Font.paragraph}
                fontSize={{ base: "9px", md: "12px", lg: "15px" }}
                fontWeight="regular"
                color="white"
              >
                251941569566
              </Text>
            </Flex>
            <Flex>
              <Icon as={FaMapMarkerAlt} color="white" mr={2} />
              <Text
                fontFamily={Font.paragraph}
                fontSize={{ base: "9px", md: "12px", lg: "15px" }}
                fontWeight="regular"
                color="white"
              >
                Addis Ababa, Ethiopia
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box ml={{ base: 6, md: 0 }} mt={5}>
          <Text
            fontFamily={Font.heading}
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            fontWeight="black"
            color="white"
          >
            Location
          </Text>
          <Box ml={4} mt={2}>
            <Flex>
              <Icon as={FaMapMarked} color="white" mr={2} />
              <a href={laftoMap}>
                <Text
                  fontFamily={Font.paragraph}
                  fontSize={{ base: "9px", md: "12px", lg: "15px" }}
                  fontWeight="regular"
                  _hover={{ textDecoration: "underline", color: "blue" }}
                  color="white"
                >
                  Lafto branch
                </Text>
              </a>
            </Flex>
            <a href={locationLink.kera}>
              <Flex my={2}>
                <Icon as={FaMapMarked} color="white" mr={2} />
                <Text
                  fontFamily={Font.paragraph}
                  fontSize={{ base: "9px", md: "12px", lg: "15px" }}
                  fontWeight="regular"
                  _hover={{ textDecoration: "underline", color: "blue" }}
                  color="white"
                >
                  Kera branch
                </Text>
              </Flex>
            </a>
            <a href={laftoMap}>
              <Flex>
                <Icon as={FaMapMarked} color="white" mr={2} />
                <Text
                  fontFamily={Font.paragraph}
                  fontSize={{ base: "9px", md: "12px", lg: "15px" }}
                  fontWeight="regular"
                  _hover={{ textDecoration: "underline", color: "blue" }}
                  color="white"
                >
                  Lebu branch
                </Text>
              </Flex>
            </a>
          </Box>
        </Box>
        <Box ml={{ base: 6, md: 0 }} mt={5}>
          <Text
            fontFamily={Font.heading}
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            fontWeight="black"
            color="white"
          >
            Our Socials
          </Text>
          <Flex mt={{ base: 3, md: 4 }} mb={{ base: 2, md: 4 }} gap={3}>
            <a href="https://www.facebook.com/CoffeeTerminalEt">
              <Icon
                as={FaFacebook}
                color="white"
                fontSize={{ base: "16px", md: "20px" }}
                _hover={{ color: "green" }}
              />
            </a>
            <a href="https://www.instagram.com/coffeeterminal_et/?hl=en">
              <Icon
                as={FaInstagram}
                color="white"
                fontSize={{ base: "16px", md: "20px" }}
                _hover={{ color: "green" }}
              />
            </a>
            <a href="">
              <Icon
                as={FaYoutube}
                color="white"
                fontSize={{ base: "16px", md: "20px" }}
                _hover={{ color: "green" }}
              />
            </a>
            <a href="https://www.tiktok.com/@coffeeterminal_et">
              <Icon
                as={FaTiktok}
                color="white"
                fontSize={{ base: "16px", md: "20px" }}
                _hover={{ color: "green" }}
              />
            </a>
          </Flex>
          <Text
            fontFamily={Font.paragraph}
            fontSize={{ base: "8px", md: "10px", lg: "12px" }}
            fontWeight="light"
            color="white"
          >
            Copyright © 2023 Coffee Terminal
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
