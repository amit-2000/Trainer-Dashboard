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
    <Box ml={{ sm: -3 }}>
      <Center>
        <Flex>
          <Center>
            <Box>
              <Box
                pl={1}
                pb={0}
                pt={0}
                pr={2}
                w={{
                  xs: 6,
                }}
              >
                <Box display={"flex"}>
                  <HowToRegIcon />
                  <Text
                    //  fontSize={"14px"}
                    fontSize={["xs", "sm", "sm", "sm"]}
                    ml="1"
                    mt={"2px"}
                  >
                    {user.performedDate}
                  </Text>
                </Box>
              </Box>
              <Box
                mt={1}
                bg={todayDate === user.scheduleDate ? "red" : ""}
                borderRadius={"8px"}
                p={1}
                pr={2}
              >
                <Flex>
                  <PendingActionsIcon />
                  <Text
                    // fontSize={"14px"}
                    fontSize={["xs", "sm", "sm", "sm"]}
                    ml="1"
                  >
                    {user.scheduleDate}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Center>
          <Center>
            <Box
              w={[9, 7, 9, 9]}
              ml={[1, 2, 3, 4]}
              // bg="blackAlpha.600"
              pt={[5, 4, 5, 5]}
              pb={[5, 4, 5, 5]}
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
