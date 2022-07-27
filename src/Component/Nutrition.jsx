import React, { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import { PieChart } from "react-minimal-pie-chart";
import { Center, Flex } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ToolTip from "./Tooltip";

export const Nutrition = ({ user }) => {
  const [calorieTaeget, setCalorieTarget] = useState(user.calorieTarget);
  const [hover, sethover] = useState(false);
  const [values, setValues] = useState([]);
  const val = user.nutrition.map((item) => {
    return item.consumed;
  });
  useEffect(() => {
    setValues(val);
  }, [val]);

  const handleIncrement = () => {
    setCalorieTarget(calorieTaeget + 500);
  };
  const handleDecrement = () => {
    setCalorieTarget(calorieTaeget - 500);
  };
  return (
    <Box ml={{sm:1}}>
      <Flex>
        <Box
          onMouseOver={() => sethover(true)}
          onMouseOut={() => sethover(false)}
          // w="60px"
          w={["60px", "55px", "60px", "65px"]}
        >
          <PieChart
            data-iscapture="true"
            lineWidth={22}
            radius={50}
            data={[
              { value: values[0], color: "pink" },
              { value: values[1], color: "blue" },
              { value: values[2], color: "yellow" },
            ]}
            // Add font later.
            label={({ x, y, dx, dy, dataEntry }) => (
              <svg fill="white">
                <text x={x} y={y} dy={dy}>
                  <tspan x={"1.8rem"} font-size={"19px"} font-weight={600}>
                    {user.calorieIntake}
                  </tspan>
                  <tspan
                    x={"1.6rem"}
                    y={"4.2rem"}
                    font-size={"15px"}
                    font-weight={400}
                    wordSpacing={2}
                  >
                    calories
                  </tspan>
                </text>
              </svg>
            )}
            labelPosition={0}
          />
        </Box>

        <Box>
          <Flex flexDirection={"row"} ml={[1, 2, 3, 4]}>
            <Box>
              <Box
                bg={"black"}
                w={7}
                borderRadius="6px"
                onClick={() => handleIncrement()}
              >
                <Center h={5}>
                  <AddIcon boxSize={2} />
                </Center>
              </Box>

              <Text fontSize={"sm"} fontWeight={700}>
                {Math.round((calorieTaeget / 1000) * 10) / 10}K
              </Text>
              <Text fontSize={"xs"} mt="-6px">
                target
              </Text>
              <Box
                bg={"black"}
                w={7}
                borderRadius="6px"
                onClick={() => handleDecrement()}
              >
                <Center h={5}>
                  <MinusIcon boxSize={2} />
                </Center>
              </Box>
            </Box>

            <Center>
              <Box
                ml={[1, 2, 3, 4]}
                w={8}
                bg="blackAlpha.600"
                pt={5}
                pb={5}
                borderRadius="10px"
              >
                <ChevronRightIcon boxSize={6} />
              </Box>
            </Center>
          </Flex>
        </Box>
      </Flex>
      <Box
        display={hover ? "block" : "none"}
        pos={"absolute"}
        mt={-0.4}
        ml={"-55px"}
        style={{ zIndex: "10" }}
      >
        <ToolTip user={user} />
      </Box>
    </Box>
  );
};

export default Nutrition;
