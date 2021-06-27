import {
    Button,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
    Center,
    Box,
    Stack
  } from '@chakra-ui/react';
  

  export default function CardCar() {
    return (
      <>
  
        <Center mt="300px" mb="30px">
            <Flex flexDirection="column"> 
                <Heading color="black.400">Our Curated Cars</Heading>
                <Center>
                    <Heading color="green.300" fontSize="lg" fontWeight="bold">Invest.  Earn.  Sell.</Heading>
                </Center>
            </Flex>
        </Center>

                <Box
                margin="auto"
                w={{ base: '80%', sm: '80%', lg: "448px" }}
                h={{ base: '80%', sm: '80%', lg: "515px" }}
                border="none"
                boxShadow="1px 1px 10px black"
                >
                <Stack bg="blackAlpha.800">
                    <Text color="white" fontWeight="bold" margin="auto">NEW!</Text>
                </Stack>

                <Image
                    margin="auto"
                    objectFit={'cover'}
                    src={
                        'https://media.discordapp.net/attachments/707421140179746946/858540827339915284/27.JPG'
                    }
                    />

                <Stack>
                    <Text fontWeight="bold" fontSize={{ base: 'md', sm: '', lg: "xl" }} margin="auto" >Mercedes-Benz SL 560 Cabrio</Text>

                    <Flex flexDirection="row">
                        <Text fontWeight="medium" color="green.900" margin="auto" fontSize={{ base: '70%', sm: '', lg: "80%" }}>Minimum Investement</Text>
                        <Text fontWeight="medium" color="green.900" margin="auto" fontSize={{ base: '70%', sm: '', lg: "80%" }}>105,53€</Text>
                    </Flex>

                    <Flex flexDirection="row">
                        <Text fontWeight="medium" color="green.400" margin="auto" fontSize={{ base: '70%', sm: '', lg: "80%" }}>Total investement</Text>
                        <Text fontWeight="medium" color="green.400" margin="auto" fontSize={{ base: '70%', sm: '', lg: "80%" }}>30,000€</Text>
                    </Flex>
                </Stack>

                <Stack>
                    <Text fontWeight="bold" margin="auto" mt="20px" color="green.700" fontSize={{ base: '70%', sm: '', lg: "80%" }}>Opening in 1 day 3 hours</Text>
                </Stack>

                <Stack bg="green.400" h="50px" mt="20px">
                    <Text color="white" fontWeight="bold" margin="auto" >Alert me when it goes live</Text>
                </Stack>

                </Box>

      </>
    );
  }
  
  
  