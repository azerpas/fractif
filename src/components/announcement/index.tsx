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
    Container
} from '@chakra-ui/react';


export default function Announcement() {
    return (
        <>
            <Flex w="100%" h="250px" bg="#16161A" flexDirection={{ base: 'column', sm: 'column', lg: 'row' }} justify="center" align="center" >
                <Stack w="80%" flexDirection={{ base: 'column', sm: 'column', lg: 'row' }} justify={"stretch"} textAlign={{base:"center",md:"left"}} align={"center"}>
                    <Stack flexDirection="column" w={{ base: '100%', sm: '', lg: '60%' }} >
                        <Text color="white" fontWeight="extrabold" fontSize={{ base: '20px', sm: '1xl', lg: '4xl' }}>
                            The fractional investment is the least risky investment.
                        </Text>
                    </Stack>
                    <Stack flexDirection="column" w={{ base: '90%', sm: '', lg: '40%' }} h={"100%"} pt={{base:"5",md:"0"}}>
                        <Text color="white" fontWeight="bold" fontSize={{ base: '14px', sm: '12px', lg: '2xl' }}>But you don’t have to take our word for it.</Text>
                        <Text color="white" fontWeight="medium" fontSize={{ base: '12px', sm: '10px', lg: '15px' }}>According to these car experts, who
                            made millions by investing in cars.</Text>
                    </Stack>
                </Stack>
            </Flex>
        </>
    );
}
