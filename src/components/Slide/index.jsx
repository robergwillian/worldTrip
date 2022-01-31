import { Container, Heading } from "@chakra-ui/react";
import React from "react";

export const Slide = () => {
  return (
    <Container centerContent>
      <Heading as="h2" size="md" fontSize="36px" color="#47585B">
          Vamos nessa?
      </Heading>
      <Heading as="h2" size="md" fontSize="36px" color="#47585B" width="500px">
          Então escolha seu continente
      </Heading>
    </Container>
  );
};
