import React from 'react'
import { Divider, Flex, Box, Spacer, Link, Heading } from '@chakra-ui/react'

export default function Footer() {
  return (
    <footer>
			<Flex mt='30px' mb='30px' flexDirection='colum'>
        <Box w='50%' h='10' textAlign='center' >
				  <Heading as='h5' size='sm'>About us</Heading>
					<Box mt='10px'>
						<Link display='block' color='gray'>Our history</Link>
					  <Link display='block' color='gray'>Our coffee</Link>
					</Box>
				</Box>
        <Spacer />
        <Box h='100px'>
					<Divider orientation='vertical' />
				</Box>
        <Spacer />
        <Box w='50%' h='10' textAlign='center'>
					<Heading as='h5' size='sm'>User experience</Heading>
					<Box mt='10px'>
						<Link display='block' color='gray'>Ways to buy</Link>
					  <Link display='block' color='gray'>Delivery</Link>
					</Box>
				</Box>
      </Flex>
		</footer>
  )
}
