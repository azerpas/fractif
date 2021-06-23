import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Center,
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={0} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'xl'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
   >
              WE NOTIFY, YOU COP 🧑‍🍳
            </Text>
            <br />{' '}
            <Text color={'blue.400'} fontSize="2rem" as={'span'}>
              Enter the Resell World
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          WE NOTIFY , YOU COP WE NOTIFY , YOU COP WE NOTIFY 
          WE NOTIFY , YOU COP,WE NOTIFY , YOU COP,WE 
          NOTIFY , WE NOTIFY , YOU COP YOU COP
          WE NOTIFY , YOU COPWE 
          </Text>
         
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Bloom Logo'}
          objectFit={'cover'}
          src={
            'https://cdn.discordapp.com/attachments/855530446078607390/856017501431005204/White-font.png?width=62&height=62'
          }
        />
      </Flex>
    </Stack>
  );
}