import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "components/FullScreenSection";
const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";
const LandingSection: React.FC = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack align="center">
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=7" />
      <p>{greeting}</p>
      <Heading color="white">{bio1}</Heading>
      <Heading color="white"> {bio2}</Heading>
    </VStack>
  </FullScreenSection>
);
export default LandingSection;
