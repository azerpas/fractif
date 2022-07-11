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
      <Box height="lg" textAlign="center" display={{base:"block", md:"none"}} >
          <Center>
            <Image
              objectFit={'cover'}
              src={'https://media.discordapp.net/attachments/707421140179746946/994355470569574500/3.png'}
              alt="Rolex Pepsi"
            />
            </Center>
            <Stack pt="10">
              <Text fontSize={"24px"}>
                <span style={{ "color": "#2F80CB", "fontWeight": "bold" }}>+45%</span> these  <span style={{ "fontWeight": "bold" }}>10 last years</span>
              </Text>
              <Text fontSize={"36px"} fontWeight="bold">
                Rolex GMT master II
              </Text>
              <Text fontSize={"16px"}>
                REF: 116710
              </Text>
            </Stack>
          </Box>
        <Stack w="80%">
        <SimpleGrid columns={3} spacing='40px'  display={{base:"none", md:"flex"}} justifyContent="center">
          <Box height='lg' textAlign="center">
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
              <Text fontSize={"28px"} fontWeight="bold">
                Rolex GMT master II
              </Text>
              <Text fontSize={"16px"}>
                REF: 116710
              </Text>
            </Stack>
          </Box>

          <Box height='lg' textAlign="center" alignItems="center" >
          <Center>
              <Image
                objectFit={'cover'}
                src={'https://media.discordapp.net/attachments/707421140179746946/994354270767960215/2.png'}
                alt="Hermes Birkin"
              />
              </Center>
            <Stack pt="10">
              <Text fontSize={"14px"}>
                <span style={{ "color": "#2F80CB", "fontWeight": "bold" }}>+32%</span> these  <span style={{ "fontWeight": "bold" }}>10 last years</span>
              </Text>
              <Text fontSize={"28px"} fontWeight="bold">
                Hermes Le Birkin
              </Text>
              <Text fontSize={"16px"}>
                REF: 31181
              </Text>
            </Stack>
          </Box>

          <Box height='lg' textAlign="center" >
            <Center>
            <Image
              objectFit={'cover'}
              src={'https://media.discordapp.net/attachments/707421140179746946/994354271007031396/1.png'}
              alt="Mercedes 300Sl brabus"
            />
            </Center>
            <Stack pt="10">
              <Text fontSize={"14px"}>
                <span style={{ "color": "#2F80CB", "fontWeight": "bold" }}>+80%</span> these  <span style={{ "fontWeight": "bold" }}>10 last years</span>
              </Text>
              <Text fontSize={"28px"} fontWeight="bold">
                Mercedes 300SL
              </Text>
              <Text fontSize={"16px"}>
                REF: 31181
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
        <Stack>
          <Flex flexDirection={{base:"column", md:"row"}} justify="center" align={{base:"center", md:"start"}} >

            <VStack w={{base:"80%", md:"20%"}}>
              <Text fontWeight={"bold"} fontSize={"24px"} w="100%" >
                For the first time
                <br/>
                Buy <span style={{ "color": "#2F80CB", "fontWeight": "bold" }}>{asset}</span> like stocks
              </Text>
            </VStack>

            <VStack w={{base:"80%", md:"35%"}} justify={"start"} pt={{base:"5%", md:"0%"}}>
              <Text w="100%" >
                For the first time, investors around the globe can buy
                into the car market through fully-compliant, fractional,
                tokenized ownership. Powered by Ethereum blockchain.
              </Text>
              <Stack w="100%" pt={{base:"5%"}}>
                <Button
                  w={{base:"100%", md:"30%"}}
                  size={'lg'}
                  rounded={'5px'}
                  bg={'#313131'}
                  color={'white'}
                  _hover={{
                    bg: '#393944',
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


