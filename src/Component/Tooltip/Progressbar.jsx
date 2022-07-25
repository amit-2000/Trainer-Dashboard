import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const ProgressBar = ({ user }) => {
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

    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,

    fontSize: "10px",
    fontWeight: "400",
    marginRight: "-30px",
    // backgroundColor: "black",
    position: "relative",
    top: "-9px",
  };

  const triangle = {
    width: "0",
    height: "0",
    borderLeft: "7px solid transparent",
    borderRight: "7px solid transparent",
    borderBottom: "10px solid ",
    marginTop: "-22px",
    marginLeft: "72px",
  };

  return (
    <Box w="200px" p={2} pt={3} bg="gray.700" borderRadius={10}>
      <Text style={triangle} color="gray.700" justifyContent={"center"}></Text>
      <Box mt="15px">
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
              70g
            </Text>
          </Flex>
          <Box style={containerStyles}>
            <Box style={fillerStyles} bg="pink">
              <span style={labelStyles}>{`${user.proteinConsumed}g`}</span>
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
              70g
            </Text>
          </Flex>
          <Box style={containerStyles}>
            <Box style={fillerStyles} bg="blue">
              <span style={labelStyles}>{`${40}g`}</span>
            </Box>
          </Box>
        </Box>
        <Box
          bg="gray.900"
          padding={"3px 6px 3px 6px"}
          borderRadius={"10px"}
          mb={0}
        >
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"12px"} fontWeight="600">
              FATS
            </Text>
            <Text fontSize={"12px"} fontWeight="600">
              70g
            </Text>
          </Flex>
          <Box style={containerStyles}>
            <Box style={fillerStyles} bg="yellow">
              <span style={labelStyles} color="yellow">{`${40}g`}</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;
