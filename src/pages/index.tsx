import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Teaser from '../components/teaser'
import Explain from '../components/explain'
import Newsletter from '../components/newsletter'
import Announcement from '../components/announcement'

import {
  Flex,
  Text,
  Center,
  Stack,
  SimpleGrid,
  Heading,
  Container,
  Box,
  Image
} from '@chakra-ui/react';

import { useEffect } from 'react'
import { getScript } from '../utils/google/recaptcha'
import { useState } from 'react'

export default function Home() {
  const [recaptcha, setRecaptcha] = useState<string | undefined>();

  if (!process.env.NEXT_PUBLIC_SITE_KEY) throw new Error("Site Key undefined");
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
  useEffect(() => {
    document.body.appendChild(getScript(handleLoaded))
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Teaser />
      <Announcement/>
      <Explain />
      <Newsletter recaptcha={recaptcha} setRecaptcha={setRecaptcha} />
    </>
  )
}


