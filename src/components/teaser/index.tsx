import React, { useState, useCallback, useEffect } from 'react';
import {
  Button,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Box,
  Image,
  VStack,
  Center
} from '@chakra-ui/react';


export default function Teaser() {
  const names = [
    'bags', 'watch', 'cars'
]
  const [asset, setNewAsset] = useState("cars");

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * names.length);
      setNewAsset(names[index]);
  }, []);

  useEffect(() => {
      const intervalID = setInterval(shuffle, 1000);
      return () => clearInterval(intervalID);
  }, [shuffle])

  return (
    <>
      <Stack minH={'80vh'} align={'center'} justify={'center'} pt={{base:"12%", md:"5%"}} pb={"5%"}>
      <Box height="fit-content" textAlign="center" display={{base:"block", md:"none"}} >
          <Center>
            <Image
              objectFit={'cover'}
              src={'https://media.discordapp.net/attachments/707421140179746946/994355470569574500/3.png'}
              alt="Rolex Pepsi"
            />
            </Center>
            <Stack pt="10">
              <Text fontSize={"14px"}>
                <span style={{ "color": "#2F80CB", "fontWeight": "bold" }}>+45%</span> these  <span style={{ "fontWeight": "bold" }}>10 last years</span>
              </Text>
              <Text fontSize={"24px"} fontWeight="bold">
                Rolex GMT master II
              </Text>
              <Text fontSize={"14px"}>
                REF: 116710
              </Text>
            </Stack>
          </Box>
          
        <Stack w="80%">
        <SimpleGrid columns={3} spacing='40px'  display={{base:"none", md:"flex"}} justifyContent="center" h="fit-content" >
          <Box height="fit-content" textAlign="center" >
          <Center >
            <Image
              objectFit={'cover'}
              src={'https://media.discordapp.net/attachments/707421140179746946/994355470569574500/3.png'}
              alt="Rolex Pepsi"
            />
            </Center>
            <Stack pt="10">
              <Text fontSize={{md:"14px","2xl":"30px"}}>
                <span style={{ "color": "#2F80CB", "fontWeight": "bold" }}>+45%</span> these  <span style={{ "fontWeight": "bold" }}>10 last years</span>
              </Text>
              <Text fontSize={{md:"28px","2xl":"52px"}} fontWeight="bold">
                Rolex GMT master II
              </Text>
              <Text fontSize={{md:"16px","2xl":"26px"}}>
                REF: 116710
              </Text>
            </Stack>
          </Box>

          <Box height="fit-content" textAlign="center" alignItems="center" >
          <Center>
              <Image
                objectFit={'cover'}
                src={'https://media.discordapp.net/attachments/707421140179746946/994354270767960215/2.png'}
                alt="Hermes Birkin"
              />
              </Center>
            <Stack pt="10">
              <Text fontSize={{md:"14px","2xl":"30px"}}>
                <span style={{ "color": "#2F80CB", "fontWeight": "bold" }}>+32%</span> these  <span style={{ "fontWeight": "bold" }}>10 last years</span>
              </Text>
              <Text fontSize={{md:"28px","2xl":"52px"}} fontWeight="bold">
                Hermes Le Birkin
              </Text>
              <Text fontSize={{md:"16px","2xl":"26px"}}>
                REF: 31181
              </Text>
            </Stack>
          </Box>

          <Box height="fit-content" textAlign="center" >
            <Center>
            <Image
              objectFit={'cover'}
              src={'https://media.discordapp.net/attachments/707421140179746946/994354271007031396/1.png'}
              alt="Mercedes 300Sl brabus"
            />
            </Center>
            <Stack pt="10">
              <Text fontSize={{md:"14px","2xl":"30px"}}>
                <span style={{ "color": "#2F80CB", "fontWeight": "bold" }}>+80%</span> these  <span style={{ "fontWeight": "bold" }}>10 last years</span>
              </Text>
              <Text fontSize={{md:"28px","2xl":"52px"}} fontWeight="bold">
                Mercedes 300SL
              </Text>
              <Text fontSize={{md:"16px","2xl":"26px"}}>
                REF: 31181
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
        <Stack>
          <Flex flexDirection={{base:"column", md:"row"}} justify="center" align={{base:"center", md:"start"}} pt={{base:"0",md:"10","2xl":"20"}}>

            <VStack w={{base:"80%", md:"30%"}} pl={{base:"0", md:"10"}}>
              <Text fontWeight={"bold"} fontSize={{base:"20px",md:"24px",lg:"28px","2xl":"50px"}} w="100%"  textAlign={{base:"center",md:"left"}}>
                Buy <span style={{ "color": "#2F80CB", "fontWeight": "bold" }}>{asset}</span> like stocks
              </Text>
            </VStack>

            <VStack w={{base:"80%", md:"50%"}} justify={"start"} pt={{base:"5%", md:"0%"}} >
              <Text w="100%" fontSize={{base:"12px",md:"14px",lg:"18px","2xl":"30px"}} textAlign={{base:"center",md:"left"}}>
                For the first time, investors around the globe can buy
                into the car market through fully-compliant, fractional,
                tokenized ownership. Powered by Ethereum blockchain.
              </Text>
              <Stack w="100%" pt={{base:"5%"}}>
              <Button
                w={{base:"30", xl:"80", "2xl":"40%"}}
                h={{base:"10",xl:"20", "2xl":"100"}}
                rounded={'5px'}
                bg={'#313131'}
                color={'white'}
                fontSize={{base:"10", md:"10",lg:"15px", xl:"2xl","2xl":"4xl"}}
                _hover={{
                  bg: 'blue.500',
                }}>
                Get Started
              </Button>
              </Stack>
            </VStack>
          </Flex>
        </Stack>
        </Stack>
      </Stack>
    </>
  );
}


