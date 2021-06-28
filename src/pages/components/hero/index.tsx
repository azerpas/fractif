import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Center,
  Box
} from '@chakra-ui/react';

import GreenShadow from "../Shadow/green"
export default function SplitScreen() {
  return (
    <>

    <Center mt="30px">
        <Heading textDecor="highlight">Car investment <span style={{"textDecoration" : "underline","WebkitTextDecorationLine":"lineThrough","textDecorationThickness": "20px","marginBottom": "30px","textDecorationColor":"#81FF62","marginTop":"10px"}}> reinvented </span></Heading>
    </Center>
 
    <Center>
        <Image
          alt={'Bloom Logo'}
          objectFit={'cover'}
          boxSize="75%"
          src={
            'https://media.discordapp.net/attachments/707421140179746946/858394956635570206/porsche-model.png?width=1805&height=1016'
          }
        />
    </Center>
    

    <Flex flexDirection="row" ml="auto" mr="auto" w="60%">

    <Flex flexDirection={{ base: 'column', sm: 'column', lg: 'row' }}  >
      <Flex flexDirection="column" >
          <Heading color="blackAlpha.700" fontSize="small">For the first time</Heading>
          <Heading color="black" fontSize="large">Buy car like <span style={{"color":"#48BB78"}}>stocks</span></Heading>
      </Flex>

        <Text mt={{ base: '10px', sm: '10px', lg: '0px' }} ml={{ base: '', sm: '', lg: '45px' }} fontSize={{ base: '10px', sm: '20px', lg: '20px' }} w={{ base: '100%', sm: '100%', lg: '70%' }}>For the first time, investors around the globe can buy
              into the car market through fully-compliant, fractional, 
              tokenized ownership. Powered by blockchain.</Text>
      </Flex>
    </Flex>


    <Center>
      <Button bg="black" color="white" mt={{ base: '25px', sm: '', lg: '40px' }} w="30%">Get in</Button>
    </Center>

    <Center>
      <Heading textDecor="highlight" mt={{ base: '25px', sm: '100px', lg: '100px' }}>Get instant returns</Heading>
    </Center>
    

    <Center mt="20px">
      <SimpleGrid columns={2}>
          <Box paddingEnd={{ base: '15', sm: '', lg: '50' }}>
            <Flex flexDirection="row" ml="auto" mr="auto">
              <Text fontSize={{ base: '30px', sm: '', lg: '5xl' }} fontWeight="extrabold"><span style={{"color":"#48BB78"}}>+</span>600</Text>
              <Text fontSize={{ base: '12px', sm: '', lg: '1.5xl' }} fontWeight="bold"  mt={{ base: '20px', sm: '', lg: '45px' }} ml="2px">€ /month</Text>
            </Flex>
            <Text fontWeight="light" fontSize={{ base: '7px', sm: '', lg: '8px' }} float="right" mt={{ base: '', sm: '', lg: '-10px' }}>From rental activity</Text>
          </Box>

          <Box alignItems="center" paddingStart={{ base: '10', sm: '', lg: '50' }}>
            <Flex flexDirection="row" ml="auto" mr="auto">
              <Text fontSize={{ base: '30px', sm: '', lg: '5xl' }}fontWeight="extrabold">+5</Text>
              <Text fontSize={{ base: '12px', sm: '', lg: '1.5xl' }} fontWeight="bold"  mt={{ base: '20px', sm: '', lg: '45px' }} ml="2px">% /year</Text>
            </Flex>
            <Text fontWeight="light" fontSize={{ base: '7px', sm: '', lg: '8px' }}  mt={{ base: '', sm: '', lg: '-10px' }}>Approximate appreciation</Text>
          </Box>
      </SimpleGrid>
    </Center>

    <Center mt="40px">
      <svg width="358" height="4" viewBox="0 0 358 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="2" x2="358" y2="2" stroke="url(#paint0_linear)" strokeWidth="4"/>
      <defs>
      <linearGradient id="paint0_linear" x1="-54.5" y1="4" x2="368" y2="4" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" stopOpacity="0"/>
      <stop offset="0.526042" stopColor="#48FF1B"/>
      </linearGradient>
      </defs>
      </svg>
    </Center>
    </>
  );
}


