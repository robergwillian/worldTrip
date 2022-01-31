import { Box, Container } from "@chakra-ui/react";
import React from "react";

export const Divider = () => {
  return (
    <Container centerContent>
      <Box
        width="90px"
        height="1px"
        background="black"
        mt="80px"
        mb="80px"
      ></Box>
    </Container>
  );
};
