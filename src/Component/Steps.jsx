import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Box, Center, Text, Flex } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
const Steps = ({ user }) => {
  return (
    <Flex>
      <Center>
        <Box w={"65px"}>
          <CircularProgressbarWithChildren
            value={(user.stepsWalked / 4000) * 100}
          >
            <Text fontSize={"13px"} fontWeight={700}>
              {user.stepsWalked}
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
};

export default Steps;
