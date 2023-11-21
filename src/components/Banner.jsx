import { Image, Text, Grid, GridItem, Heading } from '@chakra-ui/react'
import ImgBanner from '../assets/coffee-banner.jpg'

export default function Banner() {
  return (
			<Grid templateColumns='repeat(2, 1fr)' gap={12} bg='#644c44'>
        <GridItem w='100%'>
				  <Image src={ImgBanner} alt='Coffe Banner' />
				</GridItem>
        <GridItem w='100%' pr='30px' alignSelf='center'>
				  <Heading as='h3' size='lg' color='white' textAlign='center'>
						¡THE MOST DELICIOUS AND ELEGANT COFFEE!
					</Heading>
				  <Text color='white' textAlign='center' pt='30px'>
					  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga, iste eos commodi quia voluptates blanditiis sed tempora! Ullam, eius alias praesentium illum deserunt nesciunt modi atque consequuntur consequatur error?
					</Text>
				</GridItem>
      </Grid>
  )
}
