import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { createIcon } from "@chakra-ui/icons"

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="1px 1px #ff0000"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      boxShadow="1px 0px 10px #18A1C3" 
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
        Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        Choisissez l’abonnement qui vous correspond le mieux selon vos objectifs
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
            Semestriel
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                €
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                179,99
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /6 mois
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={Valid} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={Valid} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={Valid} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="blue">
                Out of Stock
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg="#18A1C3"
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Mensuel
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  €
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  25,99
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /mois
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={Valid} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={Valid} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={Valid} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={Valid} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={Valid} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="blue">
                  Out of Stock
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Annuel
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                €
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                339,99
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /an
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={Valid} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={Valid} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={Valid} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="blue" >
                Out of Stock
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}

export const Valid = createIcon({
  displayName: "UpDownIcon",
  viewBox: "0 0 38 28.932",
  d: "M15.491,28.486,6.423,19.418,3.4,22.441,15.491,34.532,41.4,8.623,38.377,5.6Z",
})