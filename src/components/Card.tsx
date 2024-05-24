import React from "react";
import { HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CardData } from "interfaces";
const Card: React.FC<CardData> = ({ title, description, imageSrc }) => {
  return (
    <VStack
      boxShadow="md"
      rounded="xl"
      spacing={4}
      alignItems="flex-start"
      bg="white"
    >
      <Image
        src={imageSrc}
        alt={title}
        maxH="200px"
        w="100%"
        p={0}
        rounded="xl"
      />
      <VStack
        paddingRight={4}
        paddingLeft={4}
        align="start"
        spacing={2}
        flex="1"
      >
        <Heading as="h3" size="md" fontWeight="bold" color="black">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>
      </VStack>
      <HStack paddingRight={4} paddingLeft={4} paddingBottom={4} spacing={1}>
        <Text color="black" fontWeight="semibold" fontSize="sm">
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};
export default Card;
