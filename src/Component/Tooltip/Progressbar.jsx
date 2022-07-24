import React from "react";
import { Box, Center, HStack, Stack, Text, Flex } from "@chakra-ui/react";

const ProgressBar = () => {
  const containerStyles = {
    height: 13,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginBottom: 10,
  };

  const fillerStyles = {
    height: "100%",
    width: `${50}%`,
    backgroundColor: "red",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontSize: "10px",
    fontWeight: "400",
    marginRight: "-30px",
    // backgroundColor: "black",
    position: "relative",
    top: "-9px",
  };

  return (
    <Box w="200px" p={2} pt={3} bg="gray.700" borderRadius={10}>
      <Box
        bg="gray.900"
        padding={"3px 6px 3px 6px"}
        borderRadius={"10px"}
        mb={2}
      >
        <Flex justifyContent={"space-between"} mb={1}>
          <Text fontSize={"12px"} fontWeight="600">
            PROTEIN
          </Text>
          <Text fontSize={"12px"} fontWeight="600">
            70G
          </Text>
        </Flex>
        <Box style={containerStyles}>
          <Box style={fillerStyles}>
            <span style={labelStyles}>{`${40}g`}</span>
          </Box>
        </Box>
      </Box>
      <Box
        bg="gray.900"
        padding={"3px 6px 3px 6px"}
        borderRadius={"10px"}
        mb={2}
      >
        <Flex justifyContent={"space-between"} mb={1}>
          <Text fontSize={"12px"} fontWeight="600">
            CARBS
          </Text>
          <Text fontSize={"12px"} fontWeight="600">
            70G
          </Text>
        </Flex>
        <Box style={containerStyles}>
          <Box style={fillerStyles}>
            <span style={labelStyles}>{`${40}g`}</span>
          </Box>
        </Box>
      </Box>
      <Box
        bg="gray.900"
        padding={"3px 6px 3px 6px"}
        borderRadius={"10px"}
        mb={2}
      >
        <Flex justifyContent={"space-between"} mb={1}>
          <Text fontSize={"12px"} fontWeight="600">
            FATS
          </Text>
          <Text fontSize={"12px"} fontWeight="600">
            70g
          </Text>
        </Flex>
        <Box style={containerStyles}>
          <Box style={fillerStyles}>
            <span style={labelStyles}>{`${40}g`}</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;
