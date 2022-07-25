import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const ToolTip = ({ user }) => {
  const containerStyles = {
    height: 13,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 50,
    marginBottom: 10,
  };

  const colors = ["pink", "blue", "yellow"];

  const labelStyles = {
    padding: 5,

    fontSize: "10px",
    fontWeight: "400",
    marginRight: "-26px",
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
        {user.nutrition.map((item, idx) => {
          return (
            <Box
              bg="gray.900"
              padding={"3px 6px 3px 6px"}
              borderRadius={"10px"}
              mb={2}
            >
              <Flex justifyContent={"space-between"} mb={1}>
                <Text fontSize={"12px"} fontWeight="600">
                  {item.item}
                </Text>
                <Text fontSize={"12px"} fontWeight="600">
                  70g
                </Text>
              </Flex>
              <Box style={containerStyles}>
                <Box
                  style={{
                    height: "100%",
                    width: `${(item.consumed / 70) * 100}%`,
                    borderRadius: "inherit",
                    textAlign: "right",
                  }}
                  bg={colors[idx]}
                  color={colors[idx]}
                  w={`45%`}
                >
                  <span style={labelStyles}>{`${item.consumed}g`}</span>
                </Box>
              </Box>
            </Box>
          );
        })}

        {/* <Box
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
        </Box> */}
      </Box>
    </Box>
  );
};

export default ToolTip;
