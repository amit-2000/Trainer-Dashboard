import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
function Steps() {
  const percentage = 66;
  return (
    <Flex>
      <Center>
        <Box w={"65px"}>
          <CircularProgressbarWithChildren value={55}>
            <Text fontSize={"13px"} fontWeight={700}>
              2547
            </Text>
            <Text fontSize={"9px"} fontWeight={600} mt="-5px">
              walked
            </Text>
          </CircularProgressbarWithChildren>
        </Box>
      </Center>
      <Box>
        <Flex flexDirection={"column"} ml={3}>
          <Box bg={"black"} w={7} borderRadius="6px">
            <Center h={5}>
              <AddIcon boxSize={2} />
            </Center>
          </Box>

          <Text fontSize={"sm"} fontWeight={700}>
            4K
          </Text>
          <Text fontSize={"xs"} mt="-6px">
            target
          </Text>
          <Box bg={"black"} w={7} borderRadius="6px">
            <Center h={5}>
              <MinusIcon boxSize={2} />
            </Center>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Steps;
