import React from "react";
import {
  Box,
  Center,
  HStack,
  Stack,
  Text,
  Flex,
  Image,
  VStack,
} from "@chakra-ui/react";
function User() {
  return (
    <Box >
      <Flex>
        <Center>
          <Image
            borderRadius="full"
            boxSize="39.68px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Center>
        <Box textAlign={"left"} alignItems="center" ml="15px">
          <Text fontSize="sm" fontWeight={"600"}>
            Charvie Sharma
          </Text>
          <Text fontSize="xs" fontWeight={"400"}>
            charviesharma.cs@gmail.com
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default User;
