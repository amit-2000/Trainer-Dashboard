import React from "react";
import { Box, Center, Stack } from "@chakra-ui/react";
// import { useMediaQuery } from "@chakra-ui/react";
import User from "./User";
import Steps from "./Steps";
import Workout from "./Workout";
import BellIcon from "./BellIcon";
import Nutrition from "./Nutrition";
import Heading from "./Heading";
import { data } from "./user_data";

function Dashboard() {
  // console.log(data);
  //   const isLargerThan800 = useMediaQuery("(min-width: 1200px)");
  //   console.log(isLargerThan800);

  return (
    <Box bg="gray.800" w="100%" h="590px" p={1} color="white">
      <Center h="100%">
        <Box bg="blackAlpha.600" borderRadius={"12px"} w="95%" p="10">
          <Heading />
          <Box>
            {data.map((user) => {
              return (
                <Stack
                  direction={["column", "row"]}
                  bg="gray.800"
                  borderRadius={"10px"}
                  mb="5"
                >
                  <Box w="290px" h="90px">
                    <Center h="90px">
                      <User user={user} />
                    </Center>
                  </Box>
                  <Box w="200px" h="90px">
                    <Center h="90px">
                      <Steps user={user} />
                    </Center>
                  </Box>
                  <Box w="200px" h="90px">
                    <Center h="90px">
                      <Workout user={user} />
                    </Center>
                  </Box>
                  <Box w="200px" h="90px">
                    <Center h="90px">
                      <Nutrition user={user} />
                    </Center>
                  </Box>
                  <Box w="200px" h="90px">
                    <Center h="90px">
                      <BellIcon />
                    </Center>
                  </Box>
                </Stack>
              );
            })}
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

export default Dashboard;
