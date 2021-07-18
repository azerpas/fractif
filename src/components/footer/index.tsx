import React from "react"
import { Box, Icon, Text, Stack, Link, chakra } from "@chakra-ui/react"
import { IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";

const links = [
    {
        icon: IoLogoTwitter,
        label: "Twitter",
        href: "https://twitter.com/fractif"
    },
    {
        icon: IoLogoInstagram,
        label: "Instagram",
        href: "https://instagram.com/fractif"
    },
    {
        icon: IoLogoFacebook,
        label: "Facebook",
        href: "#"
    }
];

type FooterLinkProps = {
    icon?: React.ElementType
    href?: string
    label?: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href, label }) => (
    <Link display="inline-block" href={href} aria-label={label} isExternal>
      <Icon as={icon} fontSize="xl" color="gray.400" />
    </Link>
)

const Footer = () => {
    return(
        <Box as="footer" my={12} textAlign="center">
            <Text fontSize="sm">
                Proudly made in 🇫🇷 by Fractif team
            </Text>
            <Stack mt={4} direction="row" spacing="12px" justify="center">
                {links.map((link) => (
                    <FooterLink key={link.href} {...link} />
                ))}
            </Stack>
        </Box>
    );
}

export default Footer;