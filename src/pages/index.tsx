import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Explain from '../components/explain'
import CardCar from '../components/CardCar'
import Newsletter from '../components/newsletter'

import {
  Flex,
  Text,
  Center,
  Stack,
  SimpleGrid,
  Heading,
  Container
} from '@chakra-ui/react';

import Link from "next/link";

import Pourcentage from '../components/pourcentage'
import PorscheSvg from '../components/svg/Porsche'
import CarStat from '../components/CarStat'
import { createIcon } from "@chakra-ui/icons"
import { useEffect } from 'react'
import { getScript } from '../utils/google/recaptcha'
import { useState } from 'react'
import Footer from '../components/footer'
import WSJ from '../components/svg/WSJ'

export default function Home() {
  const [recaptcha, setRecaptcha] = useState<string|undefined>();

  if(!process.env.NEXT_PUBLIC_SITE_KEY) throw new Error("Site Key undefined");
  const handleLoaded = (_: any) => {
    window.grecaptcha.ready((_: any) => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_SITE_KEY, { action: "newsletter" })
        .then((token: string) => {
            setRecaptcha(token)
        });
    })
  }
  // Add recaptcha script
  useEffect(()=>{
      document.body.appendChild(getScript(handleLoaded))
  }, []);
  return (
    <>
      <Navbar/>
      <Hero/>
      <Explain/>
      <CardCar/>

      <Flex w="100%" h="300px" bg="#16161A" mt="100px" flexDirection={{ base: 'column', sm: 'column', lg: 'row' }} >
          <Text color="white" margin="auto" ml={{ base: '20px', sm: '20px', lg: '80px' }} mr="10px" fontWeight="extrabold" fontSize={{ base: '20px', sm: '1xl', lg: '4xl' }} w={{ base: '90%', sm: '', lg: '50%' }}>
            The fractional investment is the least risky investment.
          </Text>
          <Flex flexDirection="column" mb={{ base: '70px', sm: '70px', lg: '0' }} margin={{ base: '', sm: '', lg: 'auto' }} ml={{ base: '20px', sm: '20px', lg: '80px' }}>
            <Text color="white" fontWeight="bold" fontSize={{ base: '12px', sm: '12px', lg: '2xl' }}  w={{ base: '90%', sm: '', lg: '85%' }}>Diversify your investment and earn big.</Text>
            <Text color="white" fontWeight="medium" fontSize={{ base: '10px', sm: '10px', lg: '15px' }}  w={{ base: '90%', sm: '', lg: '80%' }}>Pre-owned popular cars prices are hitting an all time high, making some early purchases an amazing source of investment. </Text>
            <Text color="white" as="cite" fontWeight="medium" fontSize={{ base: '10px', sm: '10px', lg: '15px' }}  w={{ base: '90%', sm: '', lg: '80%' }} my="2">&quot;Used-car prices, which have soared in recent months, are now defying economic gravity.&quot;</Text>
            <Text color="white" fontWeight="medium" fontSize={{ base: '10px', sm: '10px', lg: '15px' }}  w={{ base: '90%', sm: '', lg: '80%' }}><WSJ/> </Text>
          </Flex>
      </Flex>
      <Container mt="3rem">
        <Center>
          <Heading fontSize="3xl" mt={3}>Be a partial owner of collector cars</Heading>
        </Center>
        <Center mt="20px">
          <SimpleGrid columns={10} w="90vw">
            <Pourcentage colorbox="#D9FFFD" pourcentageCard="10%"></Pourcentage>
            <Pourcentage colorbox="#C5FFFB" pourcentageCard="20%"></Pourcentage>
            <Pourcentage colorbox="#AAFCCB" pourcentageCard="30%"></Pourcentage>
            <Pourcentage colorbox="#7BFAAE" pourcentageCard="40%"></Pourcentage>
            <Pourcentage colorbox="#7DFA7B" pourcentageCard="50%"></Pourcentage>
            <Pourcentage colorbox="#76EB73" pourcentageCard="60%"></Pourcentage>
            <Pourcentage colorbox="#6FDD6D" pourcentageCard="70%"></Pourcentage>
            <Pourcentage colorbox="#67D065" pourcentageCard="80%"></Pourcentage>
            <Pourcentage colorbox="#5FC25D" pourcentageCard="90%"></Pourcentage>
            <Pourcentage colorbox="#45A543" pourcentageCard="100%"></Pourcentage>
            </SimpleGrid>
        </Center>

        <Center>
          <Text textAlign="center" mt="20px">
            As in the stock market, buy up to 100% of the car and dispose of it physically or let us take care of it.
          </Text>
        </Center>
      </Container>
      {/** TODO: fix overflow on  non-mobile */}
      
      <Flex mt="60px" ml={{ base: '', sm: '', lg: '20px' }} flexDirection={{ base: 'column', sm: 'column', lg: 'row' }}  mx={{base: "4"}}>
        <CarStat name="Porsche 911 GT3 992" price={12798300} lastTwelveMonths={[3290,3293,3293,3293,3293,3293,3293,3293,3293,3293,3293,3293]} img={<PorscheSvg/>}/>
        <CarStat name="Porsche 911 GT3 992" price={12798300} lastTwelveMonths={[3290,3293,3293,3293,3293,3293,3293,3293,3293,3293,3293,3293]} img={<PorscheSvg/>}/>
        <CarStat name="Porsche 911 GT3 992" price={12798300} lastTwelveMonths={[3290,3293,3293,3293,3293,3293,3293,3293,3293,3293,3293,3293]} img={<PorscheSvg/>}/>
      </Flex>

      <Center my="3rem">
        <Flex w="80%">
          <Stack >
            <Stack  mt="15px"> 
              <Heading color="green.400">Expand your wealth</Heading>
              <Text w={{ base: '', sm: '', lg: '60%' }}>
              Build wealth by investing in hundreds of cars and earn big in the long term.
              We allow you to invest in cars without risking to buy a car at 100% and allowing you to buy shares of cars in order to resell them some time later
              </Text>
            </Stack>


            <Flex mr="25px"  
              alignContent="right" 
                  
              flex={{ base: 1, md: 0 }}
              justify='flex-end'
              FlexDirection="column"
              spacing={6}
            > 
              <Heading color="green.400" textAlign="right">Why Invest in Cars ?</Heading>
            </Flex>
            <Flex mr="25px" alignContent="right"          
            flex={{ base: 1, md: 0 }}
              justify='flex-end'
              FlexDirection="column"
              spacing={6}> 
              <Text w={{ base: '', sm: '', lg: '60%' }} mt="50px" textAlign="right">
                Classic cars are becoming increasingly rare.
                The electric car market is booming, however it still lacks a certain driving fun that old cool cars are giving. As the European Commission quickly passes new laws, buyer demand is growing exponentially.
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </Center>
      <Newsletter recaptcha={recaptcha} setRecaptcha={setRecaptcha}/>
      <Footer/>
    </>
  )
}


