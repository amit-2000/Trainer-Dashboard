import React from "react";
import { Box, Center, HStack, Stack, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
function Workout() {
  return (
    <Box>
      <Center>
        <Flex>
          <Center>
            <Box>
              <Box>
                <Flex>
                  <HowToRegIcon />
                  <Text fontSize={"14px"} ml="1">
                    15 Oct
                  </Text>
                </Flex>
              </Box>
              <Box mt={2}>
                <Flex>
                  <PendingActionsIcon />
                  <Text fontSize={"14px"} ml="1">
                    22 Oct
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Center>
          <Center>
            <Box ml={4} w={8} bg="red" pt={5} pb={5} borderRadius="10px">
              <ChevronRightIcon boxSize={6} />
            </Box>
          </Center>
        </Flex>
      </Center>
    </Box>
  );
}

export default Workout;
