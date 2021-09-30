import { Box, Heading, Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import IconButton from "./IconButton";

export default function Header() {
    return (
        <Box
            w="100%"
            h="100vh"
            backgroundImage="/background.svg"
            backgroundSize="cover"
            color="white"
            paddingLeft="calc(100vw/8)"
            paddingTop=/*{{ sm: "100px", md: "175px"}}*/"calc(100vh / 6)"
        >
            <Heading fontSize={["2rem", "4rem", "6rem", "8rem"]} as="h1">Xavier<br/>Nishikawa</Heading>
            <Heading size="lg" as="h2" fontWeight={450}>High school student</Heading>
            <Heading size="lg" as="h2" fontWeight={450}>Developer</Heading>
            <Stack marginTop="1rem" direction="row">
                <IconButton icon={<ChevronDownIcon />} />
                <IconButton icon={<ChevronDownIcon />} />
                <IconButton icon={<ChevronDownIcon />} />
            </Stack>
        </Box>
    )
}