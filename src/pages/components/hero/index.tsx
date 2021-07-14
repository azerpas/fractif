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

import GreenShadow from "../Shadow/green"
export default function SplitScreen() {
  return (
    <>
    {/* //TODO: use a Container */}
    <Center mt="1rem" mb={{base: "-3rem", md: "-5rem"}}>
        <Heading textDecor="highlight" fontSize={{base: "3xl", sm: "5xl"}} textAlign="center">
            Car investment&nbsp;
            <span style={{boxShadow: "rgb(129, 255, 98) 0px -15px 0px inset !important"}}>reinvented </span>
        </Heading>
    </Center>
 
    <Center>
        <Image
          alt={'guide-2'}
          objectFit={'cover'}
          boxSize={{base: "95%", md: "85%"}}
          src={
            'https://media.discordapp.net/attachments/707421140179746946/858394956635570206/porsche-model.png?width=1805&height=1016'
          }
          mb={{base: "12", md: "9", lg: "2"}}
        />
    </Center>
    
    <Container>
    <Flex flexDirection="row" ml="auto" mr="auto">
      <Flex flexDirection={{ base: 'column', sm: 'column', lg: 'row' }}  >
        <Flex flexDirection="column" textAlign={{base: "center", lg: "left"}}>
            <Heading color="blackAlpha.400" fontSize="2xl" fontWeight="semibold">For the first time</Heading>
            <Heading color="black" fontSize="3xl" my={2}>Buy cars like <span style={{color: "black",textShadow: "4px 2px #81ff62"}}>stocks</span></Heading>
        </Flex>

        <Text 
          mt={{ base: '10px', sm: '10px', lg: '0px' }} ml={{ base: '', sm: '', lg: '45px' }} w={{ base: '100%', sm: '100%', lg: '70%' }}
          fontSize={{ base: '0.9rem', sm: '0.9rem', lg: '1.2rem' }} fontWeight="light" textAlign={{base: "center", lg: "left"}}>
            For the first time, investors around the globe can buy into the car market through fully-compliant, fractional, 
              tokenized ownership. Powered by blockchain.
        </Text>
      </Flex>
    </Flex>
    </Container>


    <Center my={{base: "5"}}>
      <SimpleGrid columns={{base: 2}} spacing={2}>
        <Button bg="black" color="white">Get in</Button>
        <Button bg="white" color="black" variant="outline">Learn more</Button>
      </SimpleGrid>
      
    </Center>

    <Center>
      <Heading textDecor="highlight" fontSize="3xl" mt={3}>Get instant returns</Heading>
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


