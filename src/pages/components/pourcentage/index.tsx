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
import { useEffect } from 'react';
import { useRef, useLayoutEffect, useState } from 'react';

import GreenShadow from "../Shadow/green"

export default function Pourcentage(data) {
  const boxRef = useRef();
  
  const [dimensions, setDimensions] = useState<{width: undefined|number, height: undefined|number}>({width: undefined, height: undefined});
  useLayoutEffect(() => {
    if(boxRef.current){
      setDimensions({width: boxRef.current!.offsetWidth, height: boxRef.current!.offsetHeight});
    }
  }, []);
  useEffect(() => {
    let movement_timer = null;
    window.addEventListener('resize', ()=>{
      clearInterval(movement_timer);
      movement_timer = setTimeout(() => {
        if(boxRef.current){
          setDimensions({width: boxRef.current!.offsetWidth, height: boxRef.current!.offsetHeight});
        }
      }, 100);
    });
  }, [])
  return (
    <>
    <Box bg={data.colorbox} alignItems="center" ref={boxRef}>
      <Center >
          <Text fontWeight="bold" color="blackAlpha.500" my="1" textAlign="center">{data.pourcentageCard}</Text>
      </Center>
    </Box>
    </>
  );
}


