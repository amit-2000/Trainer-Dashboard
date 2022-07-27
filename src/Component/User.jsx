import React from "react";
import { Box, Center, Text, Flex, Image } from "@chakra-ui/react";
const User = ({ user }) => {
  return (
    <Box>
      <Flex>
        <Center>
          <Box>
            <Image
              borderRadius="full"
              boxSize="39.68px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
        </Center>
        <Box textAlign={"left"} alignItems="center" ml="15px">
          <Text fontSize={["xs", "xs", "xs", "sm"]} fontWeight={"600"}>
            {user.name}
          </Text>
          <Text
            fontSize="xs"
            //  fontWeight={"400"}
            fontWeight={{
              sm: "400",
              xs:"300"
            }}
            fon
          >
            {user.email}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default User;
