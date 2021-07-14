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
import { ReactNode } from 'react';

type CarStatProps = {
    name: string
    price: number // price in integer (3,00€ = 300; 127,95€ = 12795) 
    lastTwelveMonths: [number, number, number, number, number, number, number, number, number, number, number, number]
    img: ReactNode
}

export default function CarStat(props: CarStatProps) {
    const curFormat = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR"})
    const percentFormat = new Intl.NumberFormat("fr-FR", { style: "percent" })
    const diffPercent = (a: number, b: number) => 100 * Math.abs( ( a - b ) / ( (a+b)/2 ) );
    return (
        <>
            <Box boxShadow="2xl" p="4" rounded="md" bg="white" w="350px" h="200px" margin="auto" mb="10px">
                <Flex flexDirection="row">
                    <Flex flexDirection="column">
                        <Text color="#595959" fontWeight="bold" fontSize="13px">{props.name}</Text>
                        <Text color="#595959" fontWeight="bold" fontSize="10px">{curFormat.format(props.price)}</Text>
                        <Text color="#9E9E9E" fontSize="7px">Market Cap</Text>
                    </Flex>
                    <Flex ml="100px">
                        {/* TODO: Chart JS module to represent the last twelve months */}
                        {/* props.lastTwelveMonths[0] < props.lastTwelveMonths[11] ? green : red */}
                        <svg width="100" height="75" viewBox="0 0 158 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.31055 3.22876C8.31055 3.22876 26.6385 17.1328 44.9665 17.1328C63.2945 17.1328 63.2945 69.2728 81.6225 69.2728C99.9505 69.2728 99.9505 31.9848 117.963 31.9848C136.291 31.9848 154.619 43.9928 154.619 43.9928V88.2328H8.31055V3.22876Z" fill="#48FF1B" fillOpacity="0.2"/>
                        </svg>
                    </Flex>
                </Flex>
                <Flex flexDirection="row">
                    <Flex mb="50px">
                        {props.img}
                    </Flex>
                    <Flex flexDirection="row" mt="60px" ml="15px">
                        <svg width="30" height="30" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* props.lastTwelveMonths[0] < props.lastTwelveMonths[11] ? green : red */}
                            <path d="M26 17.3333L39 30.3333H13L26 17.3333Z" fill="#48BB78"/>
                        </svg>
                        <Text color="#86DCA7" fontSize="1xl">
                            {percentFormat.format( diffPercent(props.lastTwelveMonths[0], props.lastTwelveMonths[11]) )}
                        </Text>
                    </Flex>
                </Flex>
        
        
            </Box>
        </>
    );
  }  