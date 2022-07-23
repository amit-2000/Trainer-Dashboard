import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Text, Box } from "@chakra-ui/react";
import { PieChart } from "react-minimal-pie-chart";
import { Center, HStack, Stack, Flex, Image, VStack } from "@chakra-ui/react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Comp = () => {
  return <Text>55</Text>;
};

export default class Nutrition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "bottom",
      type: "dark",
      effect: "float",
      condition: false,
    };
  }

  render() {
    const { place, type, effect } = this.state;
    return (
      <Box>
        <Flex>
          <Box
            data-for="main"
            data-html={true}
            data-tip="<div style='disply:flex'>
          <p >Hello world</p> <p></p>Hello world</div>"
            // bg={"black"}
            w="32%"
          >
            <PieChart
              data-iscapture="true"
              lineWidth={22}
              radius={50}
              data={[
                { value: 30, color: "#E38627" },
                { value: 25, color: "#C13C37" },
                { value: 20, color: "#6A2135" },
              ]}
              // Add font later.
              label={({ x, y, dx, dy, dataEntry }) => (
                <svg fill="white">
                  <text x={x} y={y} dx={dx} dy={dy}>
                    <tspan x={"1.8rem"} font-size={"19px"} font-weight={600}>
                      2547
                    </tspan>
                    <tspan
                      x={"1.6rem"}
                      y={"4.2rem"}
                      font-size={"15px"}
                      font-weight={400}
                    >
                      calories
                    </tspan>
                  </text>
                </svg>
              )}
              // labelStyle={{
              //   // fontSize: "25px",
              //   // fontFamily: "sans-serif",
              //   fill: "#E38627",
              // }}
              labelPosition={0}
            />
          </Box>

          <ReactTooltip
            id="main"
            place={place}
            type={type}
            effect={effect}
            multiline={true}
          />
          <Box>
            <Flex flexDirection={"row"} ml={3}>
              <Box>
                <Box bg={"black"} w={7} borderRadius="6px">
                  <Center h={5}>
                    <AddIcon boxSize={2} />
                  </Center>
                </Box>

                <Text fontSize={"sm"} fontWeight={700}>
                  2.5K
                </Text>
                <Text fontSize={"xs"} mt="-6px">
                  target
                </Text>
                <Box bg={"black"} w={7} borderRadius="6px">
                  <Center h={5}>
                    <MinusIcon boxSize={2} />
                  </Center>
                </Box>
              </Box>

              <Center>
                <Box ml={4} w={8} bg="red" pt={5} pb={5} borderRadius="10px">
                  <ChevronRightIcon boxSize={6} />
                </Box>
              </Center>
            </Flex>
          </Box>
        </Flex>
      </Box>
    );
  }
}

{
  /* <Box
          data-for="main"
          data-html={true}
          data-tip="<div style='disply:flex'>
          <p>Hello world</p> <p></p>Hello world</div>"
          // bg={"black"}
          w="60px"
        >
          <PieChart
            data-iscapture="true"
            lineWidth={25}
            radius={50}
            data={[
              { value: 30, color: "#E38627" },
              { value: 25, color: "#C13C37" },
              { value: 20, color: "#6A2135" },
            ]}
          />
        </Box>

        <ReactTooltip
          id="main"
          place={place}
          type={type}
          effect={effect}
          multiline={true}  // /> */
}
