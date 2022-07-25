import React from "react";
import { Box, Center, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { AiOutlineExclamation } from "react-icons/ai";
const Workout = ({ user }) => {
  console.log(user.scheduleDate);
  const todayDate =
    new Date().getDate() +
    " " +
    new Date().toLocaleString("default", { month: "long" });
  return (
    <Box>
      <Center>
        <Flex>
          <Center>
            <Box>
              <Box pl={1} pb={0} pt={0} pr={2}>
                <Flex>
                  <HowToRegIcon />
                  <Text fontSize={"14px"} ml="1">
                    {user.performedDate}
                  </Text>
                </Flex>
              </Box>
              <Box
                mt={2}
                bg={todayDate === user.scheduleDate ? "red" : ""}
                borderRadius={"8px"}
                p={1}
                pr={2}
              >
                <Flex>
                  <PendingActionsIcon />
                  <Text fontSize={"14px"} ml="1">
                    {user.scheduleDate}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Center>
          <Center>
            <Box
              w={9}
              ml={4}
              // bg="blackAlpha.600"
              pt={5}
              pb={5}
              borderRadius="10px"
              bg={user.feedback === true ? "red" : "blackAlpha.600"}
            >
              {user.feedback ? (
                <Center>
                  <AiOutlineExclamation fontSize={"26px"} fontWeight="900" />
                </Center>
              ) : (
                <ChevronRightIcon boxSize={6} />
              )}
            </Box>
          </Center>
        </Flex>
      </Center>
    </Box>
  );
};

export default Workout;
