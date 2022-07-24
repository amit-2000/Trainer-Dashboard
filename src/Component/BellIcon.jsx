import React from "react";
import { Box, Center, HStack, Stack, Text, Flex } from "@chakra-ui/react";
import LinearProgress from "@mui/material/LinearProgress";
import ToolTip from "./Tooltip/Progressbar";
function BellIcon() {
  return (
    <Center>
      <Box
        bg={"green.300"}
        p="2"
        borderRadius={8}
        fontWeight="700"
        color="black"
        fontSize={0}
      >
        <svg
          id="i-bell"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="none"
          stroke="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
        >
          <path d="M8 17 C8 12 9 6 16 6 23 6 24 12 24 17 24 22 27 25 27 25 L5 25 C5 25 8 22 8 17 Z M20 25 C20 25 20 29 16 29 12 29 12 25 12 25 M16 3 L16 6" />
        </svg>
      </Box>
    </Center>
  );
}

export default BellIcon;
