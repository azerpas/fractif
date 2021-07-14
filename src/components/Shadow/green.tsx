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
  
  export default function GreenShadow() {
    return (
      <>
      <Flex position="absolute" zIndex="-1">
            <svg width="702" height="664" viewBox="0 0 702 664" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f)">
            <path d="M640 283.33C640 429.833 519.389 548.598 370.608 548.598C221.827 548.598 100 615.838 100 469.334C100 322.83 200.917 100 349.698 100C498.48 100 640 136.826 640 283.33Z" fill="#84FF66" fillOpacity="0.2"/>
            </g>
            <defs>
            <filter id="filter0_f" x="0" y="0" width="740" height="664" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
            </filter>
            </defs>
            </svg>
        </Flex>
      </>
    );
  }
  
  
  