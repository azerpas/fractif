import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Explain from './components/explain'
import CardCar from './components/CardCar'
import Newsletter from './components/newsletter'


import {
  Flex,
  Text,
  Center,
  Stack,
  Spacer,
  SimpleGrid,
  Box,
  Divider,
  Heading
} from '@chakra-ui/react';
import { createIcon } from "@chakra-ui/icons"
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Explain/>
      <CardCar/>

      <Flex w="100%" h="300px" bg="#16161A" mt="100px" flexDirection={{ base: 'column', sm: 'column', lg: 'row' }} >
            <Text color="white" margin="auto" ml={{ base: '20px', sm: '20px', lg: '80px' }} mr="10px" fontWeight="extrabold" fontSize={{ base: '20px', sm: '1xl', lg: '4xl' }} w={{ base: '90%', sm: '', lg: '50%' }}>The fractional investment is the least risky investment.</Text>
          <Flex flexDirection="column" mb={{ base: '70px', sm: '70px', lg: '0' }} margin={{ base: '', sm: '', lg: 'auto' }} ml={{ base: '20px', sm: '20px', lg: '80px' }}>
            <Text color="white" fontWeight="bold" fontSize={{ base: '12px', sm: '12px', lg: '2xl' }}  w={{ base: '90%', sm: '', lg: '85%' }}>But you don’t have to take our word for it.</Text>
            <Text color="white" fontWeight="medium" fontSize={{ base: '10px', sm: '10px', lg: '15px' }}  w={{ base: '90%', sm: '', lg: '80%' }}>According to these nine Advisors in The Oracles, who 
            made millions by investing in real estate.</Text>
          </Flex>
      </Flex>

      <Stack ml="25px" mt="15px"> 
        <Heading color="green.400">Expand your wealth</Heading>
        <Text w="60%">
        Build wealth by investing in hundreds of cars and earn big in the long term.
        We allow you to invest in cars without risking to buy a car at 100% and allowing you to buy shares of cars in order to resell them some time later
        </Text>
      </Stack>


      <Stack mr="25px" mt="15px"> 
        <Heading color="green.400" textAlign="right">Why Investing in Cars ?</Heading>
        <Text w="60%" textAlign="right" >
        Build wealth by investing in hundreds of cars and earn big in the long term.
        We allow you to invest in cars without risking to buy a car at 100% and allowing you to buy shares of cars in order to resell them some time later
        </Text>
      </Stack>

      <Newsletter/>
        
    </>
  )
}


