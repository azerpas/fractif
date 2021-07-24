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
  Container
} from '@chakra-ui/react';
  
export default function Explain() {
  const [getexplain, setexplain] = useState(true);

  return (
    <>
      <Center mt="3rem" mb="10px">
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
            <Container textAlign="center" maxW={{base: "container.sm", md: "container.lg"}}>
              <Box w={{ base: "100%", sm: "100%", lg: "1000px" }} alignItems="center" justifyContent="center">
                <SimpleGrid columns={{ base: 1, sm: 1, lg: 3 }} spacing={{ base: 5, lg: 10 }} mt="40px" >
                  <Box display={{base: "block", lg: "flex"}} flexDirection="column" justifyContent="space-between">
                    <Box>
                      <Heading ml="15px" fontWeight="semibold" fontSize={{ base: "large" }}>1. Browse car and listings</Heading>
                      <Text mt="2" ml="15px" w={{ base: '90%' }} fontSize={{ base: '0.9rem' }} fontWeight="light" color="gray.600">Browse our listings and discover a large offers of exceptional cars, carefully selected by our team.</Text>
                    </Box>
                    <Image
                      alt="Car listings"
                      objectFit={'cover'}
                      src={
                      'https://cdn.discordapp.com/attachments/809868554815537163/865783631456763944/CarSelling-1.png'
                      }/>
                  </Box>
                  <Box display={{base: "block", lg: "flex"}} flexDirection="column" justifyContent="space-between">
                    <Box>
                      <Heading ml="15px" fontWeight="semibold" fontSize={{ base: "large" }}>2. Purchase shares of the car</Heading>
                      <Text mt="2" ml="15px" w={{ base: '90%' }} fontSize={{ base: '0.9rem' }} fontWeight="light" color="gray.600">Instantly purchase a whole car or only a share of it, soon powered by the blockchain.</Text>
                    </Box>
                    <Image
                      objectFit={'cover'}
                      src={'https://media.discordapp.net/attachments/809868554815537163/865783630994866216/CarSelling-2.png?width=789&height=622'}
                      alt="Filter car search form"
                      />
                  </Box>
                  <Box display={{base: "block", lg: "flex"}} flexDirection="column" justifyContent="space-between">
                    <Box>
                      <Heading ml="15px" fontWeight="semibold" fontSize={{ base: "large" }}>3. Download your new bot</Heading>
                      <Text mt="2" ml="15px" w={{ base: '90%' }} fontSize={{ base: '0.9rem' }} fontWeight="light" color="gray.600">Keep track of your purchase and hold or resale your share whenever you want!</Text>
                    </Box>
                    <Image
                      alt="A man using its computer to browse our website"
                      objectFit={'cover'}
                      src={'https://cdn.discordapp.com/attachments/809868554815537163/865783633465049108/CarSelling-3.png'}
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
  
  
  
