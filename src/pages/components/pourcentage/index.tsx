import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Center,
  Box
} from '@chakra-ui/react';

import GreenShadow from "../Shadow/green"
export default function pourcentage(data) {
  return (
    <>
    <Box bg={data.colorbox} boxSize={{ base: '35px', sm: '35px', lg: '50px' }} alignItems="center" >
      <Center >
          <Text fontWeight="bold" color="blackAlpha.500" mt={{ base: '8px', sm: '8px', lg: '13px' }} fontSize={{ base: '12px', sm: '12px', lg: '' }} textAlign="center">{data.pourcentageCard}</Text>
      </Center>
    </Box>
    </>
  );
}


