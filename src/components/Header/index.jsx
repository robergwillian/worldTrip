import React from 'react';
import { Container, Image } from '@chakra-ui/react'
import Logo from '../../assets/logo.png'

export const Header = () => {
    return (
        <Container maxW='xl' pt={27} pb={27} centerContent>
            <Image src={Logo.src} alt="World Trip logo" />
        </Container>
    )
}

