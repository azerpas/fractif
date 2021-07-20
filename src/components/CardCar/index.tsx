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
            <Center mt="3rem">
                <Flex flexDirection="column"> 
                    <Heading fontSize="3xl">Our Curated Cars</Heading>
                    <Center my="3">
                        <Heading color="green.300" fontSize="xl" fontWeight="bold">Invest. &nbsp;Earn.&nbsp;  Sell.</Heading>
                        {/** TODO: https://vercel.com/home style heading gradient */}
                    </Center>
                </Flex>
            </Center>
            <Box
                margin="auto"
                mt="3"
                w={{ base: '80%', md: '60%', lg: '60%' }}
                h={{ base: '80%' }}
                border="none"
                boxShadow="1px 1px 5px 0px rgb(0 0 0 / 50%)"
            >
                <Stack bg="blackAlpha.800">
                    <Heading color="white" fontWeight="extrabold" fontSize="2xl" textAlign="center" my="1">NEW!</Heading>
                </Stack>

                <Image
                    margin="auto"
                    objectFit={'cover'}
                    src={
                        'https://media.discordapp.net/attachments/707421140179746946/858540827339915284/27.JPG'
                    }
                    alt="Mercedes SL 560 Cabrio picture"
                    />

                <Stack>
                    <Heading fontWeight="bold" fontSize={{ base: 'xl', sm: '', lg: "2xl" }} my="2" textAlign="center">Mercedes-Benz SL 560 Cabrio</Heading>

                    <Flex flexDirection="row" justifyContent="space-between">
                        <Text fontWeight="medium" color="green.900" ml="4" fontSize={{ base: '70%', sm: '', lg: "80%" }}>Minimum Investement</Text>
                        <Text fontWeight="medium" color="green.900" mr="4" fontSize={{ base: '70%', sm: '', lg: "80%" }}>105,53€</Text>
                    </Flex>

                    <Flex flexDirection="row" justifyContent="space-between">
                        <Text fontWeight="medium" color="green.400" ml="4" fontSize={{ base: '70%', sm: '', lg: "80%" }}>Total investement</Text>
                        <Text fontWeight="medium" color="green.400" mr="4" fontSize={{ base: '70%', sm: '', lg: "80%" }}>30,000€</Text>
                    </Flex>
                </Stack>

                <Stack>
                    <Text fontWeight="extrabold" margin="auto" color="green.700" fontSize={{ base: '70%', sm: '', lg: "80%" }}>Opening in 1 day 3 hours</Text>
                </Stack>

                <Stack bg="green.400" mt="20px">
                    <Button variant="unstyled">
                        <Text color="white" fontWeight="bold" margin="auto" >Alert me when it goes live</Text>
                    </Button>
                </Stack>

            </Box>
        </>
    );
  }
  
  
  