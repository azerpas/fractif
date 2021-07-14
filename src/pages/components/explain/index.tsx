import React, {useState} from "react";

import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Center,
  Box,
  Divider,
  Container
} from '@chakra-ui/react';
  
export default function Explain() {
  const [getexplain, setexplain] = useState(true);

  return (
    <>

    <Center mt="60px" mb="10px">
        <Heading fontSize="3xl" mt={3}>How It Works</Heading>
    </Center>
    <Center >
      <Text fontWeight="light" fontSize={{ base: '0.9rem' }}>Buying & selling part of a car is simple, just as it should be.</Text>
    </Center>


    {

      getexplain == true ? 

      <>
        <Center mt="20px" >
          <Flex flexDirection="row">
            <Center mr="25px">
              <Text 
                textDecoration="underline" textDecorationColor="#81FF62" textDecorationThickness="2px" 
                fontWeight="semibold" onClick={() => setexplain(true)}>Buying
              </Text> 
            </Center>
            <Center ml="25px">
              <Text color="gray.600" fontWeight="semibold" onClick={() => setexplain(false)}>Selling</Text> 
            </Center>
          </Flex>
        </Center>

        <Center>
          <Container textAlign="center">
            <Box w="90%" alignItems="center" justifyContent="center">
              <SimpleGrid columns={{ base: 1, sm: 1, lg: 3 }} spacing={{ base: 20, sm: 40, lg: 10 }} mt="40px" >

                <Box bg="" height="80px" >

                  <Heading ml="15px" fontWeight="semibold" fontSize={{ base: "large" }}>1. Browse car and listings</Heading>
                  <Text  ml="15px" mt={{ base: '0.6rem', sm: '', lg: "0.8rem" }} w={{ base: '90%', sm: '', lg: "" }} fontSize={{ base: '0.9rem' }} fontWeight="light" color="gray.600">Browse hundreds of 100% safe & legit listings of 
                      the best bots, all available for instant download.</Text>
                  <Image
                    alt="Car listings"
                    objectFit={'cover'}
                    src={
                    'https://media.discordapp.net/attachments/707421140179746946/858521545273376768/PXgdd5t.png'
                    }/>
                </Box>
                <Box height="80px" mt={{ base: "120px", sm: "120px", lg: "0px" }}>
                  <Heading ml="15px" fontWeight="semibold" fontSize={{ base: "large" }}>2. Purchase 1 to 100% of the car</Heading>
                  <Text  ml="15px" mt={{ base: '0.6rem', sm: '', lg: "0.8rem" }}  w={{ base: '90%', sm: '', lg: "" }} fontSize={{ base: '0.9rem' }} fontWeight="light" color="gray.600">Instantly purchase the whole car or only a fraction of it.</Text>
                  <Image
                    objectFit={'cover'}
                    src={'https://media.discordapp.net/attachments/707421140179746946/858521543108460554/i0AIWwe.png'}
                    alt="Filter car search form"
                    />
                </Box>
                <Box height="80px" mt={{ base: "120px", sm: "120px", lg: "0px" }}>
                  <Heading ml="15px" fontWeight="semibold" fontSize={{ base: "large" }}>3. Download your new bot</Heading>
                  <Text ml="15px" mt={{ base: '0.6rem', sm: '', lg: "0.8rem" }}  w={{ base: '90%', sm: '', lg: "" }} fontSize={{ base: '0.9rem' }} fontWeight="light" color="gray.600">No waiting for sellers, just download your bot as soon as you purchase and get ready to cop some sneakers!</Text>
                  <Image
                    alt="A man using its computer to browse our website"
                    objectFit={'cover'}
                    src={'https://media.discordapp.net/attachments/707421140179746946/858521541934317568/G4fe4a0.png'}
                  />
                </Box>
              </SimpleGrid>
            </Box>
          </Container>
        </Center>
      </>

    :

      <>
        <Center mt="20px">
          <Flex flexDirection="row">
            <Center mr="25px">
              <Text fontWeight="medium" onClick={() => setexplain(true)}>Buying</Text> 
            </Center>
            <Center ml="25px">
              <Text color="gray.600" textDecoration="underline" textDecorationColor="#81FF62" fontWeight="medium" onClick={() => setexplain(false)}>Selling</Text> 
            </Center>
          </Flex>
        </Center>
        <Center>
          <Text mt="3rem" fontSize={{ base: '0.8rem', sm: '', lg: "1rem" }} fontWeight="medium">Coming soon ...</Text>
        </Center>
      </>
    }

      
    </>
  );
}
  
  
  