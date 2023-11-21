import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex, 
  Spacer,
  Box
} from '@chakra-ui/react'

export default function Nav() {
  return (
		<nav>
      <Flex>
        <Box p='4'>
          <Heading 
            bgGradient='linear(to-l, #b39789, #8d6a5e, #644c44)'
            bgClip='text'
            fontSize='4xl'
            fontWeight='extrabold'
          >
            Rich Coffee
          </Heading>
        </Box>
        <Spacer />
        <Box p='4' >
          <Breadcrumb spacing='8px' separator='>' fontSize='20px'>
			      <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Flex>
		</nav>
  )
}
