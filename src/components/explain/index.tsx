import React, { useState } from "react";

import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Center,
  Box,
  Container,
  Stack
} from '@chakra-ui/react';

export default function Explain() {
  const [getexplain, setexplain] = useState(true);

  return (
    <>
      <Stack align={"center"} justify={"center"} >
        <Stack w="80%" align={"center"} justify={"center"}>
          <Center mt="3rem" mb="10px" >
            <Heading fontSize="3xl" mt={3}>How It Works</Heading>
          </Center>
          <Center w="80%">
            <Text fontWeight="light" fontSize={{ base: '0.9rem' }}>Buying & selling part of a car is simple, just as it should be.</Text>
          </Center>
          <Center  >
            <Flex flexDirection="row" pt="50px">
              <Center mr="25px">
                <Text
                  textDecoration={ getexplain === true && "underline" } textDecorationColor="#2F80CB" textDecorationThickness="2px"
                  fontWeight="semibold" onClick={() => setexplain(true)}>Buying
                </Text>
              </Center>
              <Center ml="25px">
                <Text color="gray.600" textDecoration={ getexplain === false && "underline"} textDecorationColor="#2F80CB" fontWeight="semibold" onClick={() => setexplain(false)}>Selling</Text>
              </Center>
            </Flex>
          </Center>
          {
            getexplain == true ?
              <>
                <Stack w={{base:"80%",md:"container.lg"}}  align={'center'} justify={'center'} >
                  <SimpleGrid columns={{ base: 1, sm: 1, lg: 3 }} spacing={{ base: 5, lg: 10 }} mt="40px" w="80%" h="" pt={{ base: "0", md: "5%" }}>
                    <Box display={{ base: "block", lg: "flex" }} flexDirection="column" justifyContent="space-between" >
                      <Heading ml="15px" fontWeight="semibold" fontSize={{ base: "large" }}>1. Browse car and listings</Heading>
                      <Text ml="15px" w={{ base: '90%' }} fontSize={{ base: '0.9rem' }} fontWeight="light" color="gray.600">Browse hundreds of 100% safe & legit listings of
                        the best bots, all available for instant download.</Text>
                      <Image
                        alt="Car listings"
                        objectFit={'cover'}
                        src={
                          'https://media.discordapp.net/attachments/707421140179746946/858521545273376768/PXgdd5t.png'
                        } />
                    </Box>

                    <Box display={{ base: "block", lg: "flex" }} flexDirection="column" justifyContent="space-between">
                      <Heading ml="15px" fontWeight="semibold" fontSize={{ base: "large" }}>2. Purchase 1 to 100% of the car</Heading>
                      <Text ml="15px" w={{ base: '90%' }} fontSize={{ base: '0.9rem' }} fontWeight="light" color="gray.600">Instantly purchase a whole car or only a fraction of it.</Text>
                      <Image
                        objectFit={'cover'}
                        src={'https://media.discordapp.net/attachments/707421140179746946/858521543108460554/i0AIWwe.png'}
                        alt="Filter car search form"
                      />
                    </Box>

                    <Box display={{ base: "block", lg: "flex" }} flexDirection="column" justifyContent="space-between">
                      <Heading ml="15px" fontWeight="semibold" fontSize={{ base: "large" }}>3. Download your new bot</Heading>
                      <Text ml="15px" w={{ base: '90%' }} fontSize={{ base: '0.9rem' }} fontWeight="light" color="gray.600">No waiting for sellers, just download your bot as soon as you purchase and get ready to cop some sneakers!</Text>
                      <Image
                        alt="A man using its computer to browse our website"
                        objectFit={'cover'}
                        src={'https://media.discordapp.net/attachments/707421140179746946/858521541934317568/G4fe4a0.png'}
                      />
                    </Box>
                  </SimpleGrid>
                </Stack>
              </>

              :
              <>
                <Stack w={{base:"2xs",md:"container.lg"}} h={{base:"4xl",md:"sm"}} align={'center'} justify={'center'}>
                  <Text fontSize={{ base: '0.8rem', sm: '', lg: "1rem" }} fontWeight="medium" >Coming soon ...</Text>
                </Stack>
              </>
          }
        </Stack>
      </Stack>
    </>
  );
}


