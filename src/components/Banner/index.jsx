import { Container, Image } from "@chakra-ui/react";
import React from "react";
import banner from "../../assets/banner.png";

export const Banner = () => {
  return (
    <Container maxWidth={'100%'} centerContent>
      <Image
        width={1440}
        height={369}
        src={banner.src}
        alt="World Trip banner"
      />
    </Container>
  );
};
