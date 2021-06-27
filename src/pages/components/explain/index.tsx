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
    Divider
  } from '@chakra-ui/react';
  
  export default function Explain() {
    const [getexplain, setexplain] = useState(true);

    return (
      <>
  
      <Center mt="60px" mb="10px">
          <Heading>How It Works</Heading>
      </Center>
      <Center >
        <Text fontWeight="medium" fontSize={{ base: '10', sm: '', lg: "18px" }}>Buying & selling part of a car is simple, just as it should be.</Text>
      </Center>


{

 getexplain == true ? 

 <>
 <Center mt="20px">
        <Flex flexDirection="row">
            <Center mr="25px">
                <Text textDecoration="underline" textDecorationColor="#81FF62" fontWeight="medium" onClick={() => setexplain(true)}>Buying</Text> 
        </Center>
        <Center ml="25px">
                <Text color="gray.600" fontWeight="medium" onClick={() => setexplain(false)}>Selling</Text> 
        </Center>
       </Flex>
       </Center>

       <SimpleGrid columns={{ base: 1, sm: 1, lg: 3 }} spacing={{ base: 40, sm: 40, lg: 10 }} mt="40px">

  <Box bg="" height="80px" >

        <Text ml="15px" fontWeight="medium" fontSize={{ base: '10', sm: '', lg: "18px" }}>1. Browse car and listings</Text>
        <Text  ml="15px" mt={{ base: '0.6rem', sm: '', lg: "0.8rem" }} w={{ base: '90%', sm: '', lg: "" }} fontSize={{ base: '0.6rem', sm: '', lg: "0.8rem" }} fontWeight="medium" color="gray.600">Browse hundreds of 100% safe & legit listings of 
                the best bots, all available for instant download.</Text>
            <Image
        alt={'Bloom Logo'}
        objectFit={'cover'}
        src={
        'https://media.discordapp.net/attachments/707421140179746946/858521545273376768/PXgdd5t.png'
        }
    />

  </Box>

  <Box height="80px" mt={{ base: "120px", sm: "120px", lg: "0px" }}>
  <Text ml="15px" fontWeight="medium" fontSize={{ base: '10', sm: '', lg: "18px" }}>2. Purchase 1 to 100% of the car</Text>
  <Text  ml="15px" mt={{ base: '0.6rem', sm: '', lg: "0.8rem" }}  w={{ base: '90%', sm: '', lg: "" }} fontSize={{ base: '0.6rem', sm: '', lg: "0.8rem" }} fontWeight="medium" color="gray.600">Instantly purchase the whole car or only a fraction of
it.</Text>
            <Image
        objectFit={'cover'}
        src={
        'https://media.discordapp.net/attachments/707421140179746946/858521543108460554/i0AIWwe.png'
        }
    />
  </Box>

  <Box  height="80px" mt={{ base: "120px", sm: "120px", lg: "0px" }}>
  <Text ml="15px" fontWeight="medium" fontSize={{ base: '10', sm: '', lg: "18px" }}>3. Download your new bot</Text>
  <Text  ml="15px" mt={{ base: '0.6rem', sm: '', lg: "0.8rem" }}  w={{ base: '90%', sm: '', lg: "" }} fontSize={{ base: '0.6rem', sm: '', lg: "0.8rem" }} fontWeight="medium" color="gray.600">No waiting for sellers, just download your bot as
soon as you purchase and get ready to cop 
some sneakers!</Text>
            <Image
        alt={'Bloom Logo'}
        objectFit={'cover'}
        src={
        'https://media.discordapp.net/attachments/707421140179746946/858521541934317568/G4fe4a0.png'
        }
    />
  </Box>
</SimpleGrid>
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
  
  
  