import React from "react";
import { Box, Center, HStack, Stack, Text } from "@chakra-ui/react";
// import { useMediaQuery } from "@chakra-ui/react";
import User from "./User";
import Steps from "./Steps";
import Workout from "./Workout";
import BellIcon from "./BellIcon";
import Nutrition from "./Nutrition";
// import ToolTip from "./Tooltip.tsx";
import { data } from "./user_data";
function Dashboard() {
  console.log(data);
  //   const isLargerThan800 = useMediaQuery("(min-width: 1200px)");
  //   console.log(isLargerThan800);
  return (
    <Box bg="tomato" w="100%" h="auto" p={1} color="white">
      <Center h="auto">
        <Box bg="black" borderRadius={"12px"} w="95%" m="4" p="10">
          <Box>
            <Stack
              direction={["column", "row"]}
              bg="green"
              //   spacing="24px"
              mb="10"
            >
              <Box w="290px" h="40px" bg="red"></Box>
              <Box w="200px" h="40px">
                Steps
              </Box>
              <Box w="200px" h="40px">
                Workout
              </Box>
              <Box w="200px" h="40px">
                Nutrition
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack
              direction={["column", "row"]}
              bg="gray"
              borderRadius={"10px"}
              mb="5"
              //   spacing="24px"
            >
              <Box w="290px" h="90px">
                <Center h="90px">
                  <User />
                </Center>
              </Box>
              <Box w="200px" h="90px">
                <Center h="90px">
                  <Steps />
                </Center>
              </Box>
              <Box w="200px" h="90px">
                <Center h="90px">
                  <Workout />
                </Center>
              </Box>
              <Box w="200px" h="90px">
                <Center h="90px">
                  <Nutrition />
                </Center>
              </Box>
              <Box w="200px" h="90px">
                <Center h="90px">
                  <BellIcon />
                </Center>
              </Box>
            </Stack>
            <Stack
              direction={["column", "row"]}
              bg="gray"
              borderRadius={"10px"}
              mb="5"
            >
              <Box w="290px" h="90px" bg="red">
                <Center h="90px">User</Center>
              </Box>
              <Box w="200px" h="90px">
                <Center h="90px">User</Center>
              </Box>
              <Box w="200px" h="90px">
                <Center h="90px">User</Center>
              </Box>
              <Box w="200px" h="90px">
                <Center h="90px">User</Center>
              </Box>
              <Box w="200px" h="90px" bg="red">
                <Center h="90px">User</Center>
              </Box>
            </Stack>
            <Stack
              direction={["column", "row"]}
              bg="gray"
              borderRadius={"10px"}
              mb="5"
            >
              <Box w="290px" h="90px" bg="red">
                <Center h="90px">User</Center>
              </Box>
              <Box w="200px" h="90px">
                <Center h="90px">User</Center>
              </Box>
              <Box w="200px" h="90px">
                <Center h="90px">User</Center>
              </Box>
              <Box w="200px" h="90px">
                <Center h="90px">User</Center>
              </Box>
              <Box w="200px" h="90px" bg="red">
                <Center h="90px">User</Center>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

export default Dashboard;
