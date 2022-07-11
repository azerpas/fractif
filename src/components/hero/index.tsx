import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Hero_tokenization_desktop from '../svg/hero_tokenization_desktop'

import EthereumSvg from '../svg/ethereum'
export default function SplitScreen() {
  return (
    <>
      <Stack minH={{ base: '100vh', md: "80vh" }} direction={{ base: 'column', md: 'row' }} bgColor="#16161A" justify={"center"} align={{ base: "center", md: "start", "2xl": "center" }} >
        <Stack flexDirection={{ base: 'column', md: 'row' }} align={"center"} w="80%" >
          <Flex w="100%" align={'center'} justify={{ base: "center", md: 'right' }} pt={{ base: "30%", md: "0" }} h="fit-content">
            <Stack spacing={6} w={{ base: '85%', md: '80%', lg: "80%" }} >
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: "6xl", xl: "6xl", "2xl": "8xl" }} >
                <Text color={'white'} textAlign={{ base: "start", md: "start" }}>
                  The easiest way to invest in assets
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg', xl: "2xl", "2xl": "4xl" }} color={'gray.300'} textAlign="justify" pt={{ base: "5%" }}>
                For the first time, investors around the globe can buy luxury items through fully-compliant, fractional, tokenized ownership market.
              </Text>
              <HStack>
                <Text fontSize={{ base: 'md', lg: 'lg', xl: "2xl", "2xl": "4xl" }} color={'gray.300'}>
                  Powered by Ethereum.
                </Text>
                <EthereumSvg />
              </HStack>

              <Stack direction={{ base: 'column', md: 'row' }} spacing={4} pt={{ base: "5%" }}>
                <Button
                  w={{ base: "30", xl: "80", "2xl": "40%" }}
                  h={{ base: "10", xl: "20", "2xl": "100" }}
                  rounded={'5px'}
                  bg={'#2F80CB'}
                  color={'white'}
                  fontSize={{ base: "10", md: "10", lg: "15px", xl: "2xl", "2xl": "4xl" }}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Get Started
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex w={{ base: "100%", md: '50%', lg: "100%" }} h="fit-content" align={'center'} justify={{ base: "center", md: 'center' }} display={{ base: "none", md: "flex" }}>
            <Stack justifyContent={{ base: "center", md: 'center' }} align="center" >
              <Hero_tokenization_desktop />
            </Stack>
          </Flex>
          <Stack h="40vh" justify={"center"} align={"center"} display={{ base: "flex", md: "none" }}>
            <Text color={"white"} textAlign="center"> Read more ...</Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}


