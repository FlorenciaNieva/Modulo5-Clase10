import React from 'react'
import CardProduct from './CardProduct'
import { Heading, Container } from '@chakra-ui/react'

export default function ContainCards() {
  return (
    <Container maxW='750px' mt='20px'>
		  <Heading textAlign='center'>Producto destacado</Heading>
		  <CardProduct />
    </Container>
  )
}
