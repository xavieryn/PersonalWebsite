import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button(props) {
    return (
        <ChakraButton backgroundColor="#ac1818" border="1px solid #0000004d" {...props} sx={{
            "&:hover": {
                backgroundColor: "#871313"
            }
        }}/>
    );
}