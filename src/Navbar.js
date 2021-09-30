import { Stack } from "@chakra-ui/react";
import Button from "./Button";

const BUTTON_WIDTH = "120px";

function NavbarButton(props) {
    return <Button w="120px" color="white" {...props} />
}

export default function Navbar() {
    return (
        <Stack position="fixed" bottom={0} w="100%" direction="row" justifyContent="center" pb="1rem" px="0.5rem" zIndex="100000">
            <NavbarButton>Work</NavbarButton>
            <NavbarButton>Projects</NavbarButton>
            <NavbarButton>Resume</NavbarButton>
            <NavbarButton>Contact</NavbarButton>
        </Stack>
    )
}