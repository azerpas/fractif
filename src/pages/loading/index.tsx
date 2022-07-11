import {
    Flex,
    Text,
    Center,
    Stack,
    SimpleGrid,
    Heading,
    Container,
    Box,
    Image,
    CircularProgress
} from '@chakra-ui/react';



export default function LoadingPage() {
    return (
        <Box w="100%" h="100vh" justify={"center"} align={"center"}>
            <CircularProgress size="24px" isIndeterminate pr={2} />
        </Box>
    )
}


