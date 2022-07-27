import React from "react";
import { Box, Center, Stack } from "@chakra-ui/react";
import { Nutrition, Workout, BellIcon, Heading, User, Steps } from "./index";
import { data } from "./user_data";

function Dashboard() {
  return (
    <Box bg="gray.800" w="100%" h="590px" p={1} color="white">
      <Center h="100%">
        <Box
          bg="blackAlpha.600"
          borderRadius={"12px"}
          width={["100%", "97%", "95%", "90%"]}
          p={[4, 2, 5, 10]}
        >
          <Box>
            <Heading />
            {data.map((user) => {
              return (
                <Stack
                  direction={["column", "row"]}
                  bg="gray.800"
                  borderRadius={"10px"}
                  mb="5"
                  display={{ sm: "flex" }}
                >
                  <Box minW="230px" ml={1} h="90px">
                    <Center h="90px">
                      <User user={user} />
                    </Center>
                  </Box>
                  <Box w={"200px"} h="90px">
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
                  <Box w={["70px"]} h="90px">
                    <Center h="90px" mr={3}>
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
