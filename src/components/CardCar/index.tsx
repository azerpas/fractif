import {
    Button,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
    Center,
    Box,
    Stack,
    Spacer
} from '@chakra-ui/react';
import { GradientWrapper } from '../typography/Gradient';

export default function CardCar() {
    return (
        <>
            <Center mt="1rem">
                <Heading fontSize="3xl">Our Curated Cars</Heading>
            </Center>
            <Flex flexDirection={{ base: 'column', md: 'column', lg: 'row' }} mt="2rem" justifyContent="space-between">
                <Center my="3" ml={{ lg: '40px' }} width={{md: "100%", lg: "80%"}}>
                    <Heading color="grey.100" textAlign="center" fontSize={{ base: '4xl', md: '4xl', lg: '120px' }} fontWeight="bold">
                        <GradientWrapper number={0} colorFrom="#ff2800" colorTo="#F01900" content="Invest. " top="0px">Invest.</GradientWrapper> <br/>
                        <GradientWrapper number={1} colorFrom="#ff2800" colorTo="#F01900" content="Earn. " top="0px">Earn. </GradientWrapper> <br/>
                        <GradientWrapper number={2} colorFrom="#ff2800" colorTo="#F01900" content="Sell. " top="0px">Sell. </GradientWrapper> <br/>
                    </Heading>
                </Center>
                <Flex flexDirection="column">
                    <Center >
                        <Box
                            margin="auto"
                            mt="3"
                            w={{ base: '80%', md: '60%', lg: '80%' }}
                            h={{ base: '90%' }}
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
                    </Center>
                </Flex>
            </Flex>
        </>
    );
}
  
  
  