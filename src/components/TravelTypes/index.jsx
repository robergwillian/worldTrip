import React from "react";
import vidaNortuna from "../../assets/vidaNortuna.png";
import praia from "../../assets/praia.png";
import moderno from "../../assets/moderno.png";
import classico from "../../assets/classico.png";
import globo from "../../assets/globo.png";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";

export const TravelTypes = () => {
  return (
    <Container centerContent pt="80px">
      <Stack direction={["column", "row"]} spacing="150px">
        <Box w="158px" h="145px" align='center'>
          <Link href="#">
            <Image src={vidaNortuna.src} alt="vida noturna" maxWidth="85px" mb='24px'/>
            <Heading as="h4" size="md" fontSize="24px" color="#47585B">
              vida nortuna
            </Heading>
          </Link>
        </Box>
        <Box w="158px" h="145px" align='center'>
          <Link href="#">
            <Image src={praia.src} alt="praia" maxWidth="85px" mb='24px' />
            <Heading as="h4" size="md" fontSize="24px" color="#47585B">
              praia
            </Heading>
          </Link>
        </Box>
        <Box w="158px" h="145px" align='center'>
          <Link href="#">
            <Image src={moderno.src} alt="moderno" maxWidth="85px" mb='24px' />
            <Heading as="h4" size="md" fontSize="24px" color="#47585B">
              moderno
            </Heading>
          </Link>
        </Box>
        <Box w="158px" h="145px" align='center'>
          <Link href="#">
            <Image src={classico.src} alt="classico" maxWidth="85px" mb='24px' />
            <Heading as="h4" size="md" fontSize="24px" color="#47585B">
              classico
            </Heading>
          </Link>
        </Box>
        <Box w="158px" h="145px" align='center'>
          <Link href="#">
            <Image src={globo.src} alt="globo" maxWidth="85px" mb='24px' />
            <Heading as="h4" size="md" fontSize="24px" color="#47585B">
              globo
            </Heading>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
};
