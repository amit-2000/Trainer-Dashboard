import React from "react";
import { Text, Box, Stack, Center, Flex } from "@chakra-ui/react";
import { BiWalk } from "react-icons/bi";
import { FaDumbbell, FaConciergeBell } from "react-icons/fa";
function Heading() {
  return (
    <div>
      <Box>
        <Stack
          direction={["column", "row"]}
          mb={1}
          fontSize={["xs", "17px", "lg", "lg"]}
          fontWeight={[300,600,700,700]}
        >
          <Box minW="220px" h="40px"></Box>
          <Box w="200px" h="40px">
            <Center>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <BiWalk fontSize={25} />
                <Text>Steps</Text>
              </Flex>
            </Center>
          </Box>
          <Box w="200px" h="40px">
            <Center>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <FaDumbbell fontSize={25} />
                <Text ml={"10px"}>Workout</Text>
              </Flex>
            </Center>
          </Box>
          <Box w="200px" h="40px">
            <Center>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <FaConciergeBell fontSize={25} />
                <Text ml={"10px"}>Nutrition</Text>
              </Flex>
            </Center>
          </Box>
          <Box w="200px" h="40px"></Box>
        </Stack>
      </Box>
    </div>
  );
}

export default Heading;
