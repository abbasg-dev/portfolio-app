import React from "react";
import { VStack } from "@chakra-ui/react";
import { FullScreenSectionData } from "interfaces";
const FullScreenSection: React.FC<FullScreenSectionData> = ({
  children,
  isDarkBackground,
  backgroundColor,
  ...boxProps
}) => {
  return (
    <VStack
      backgroundColor={backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack w="100%" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};
export default FullScreenSection;
