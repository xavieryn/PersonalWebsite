import { IconButton as ChakraIconButton } from "@chakra-ui/react";

export default function IconButton(props) {
    return (
        <ChakraIconButton borderRadius="50%" bgColor="initial" border="1px solid #0000004d" {...props} sx={{
            "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.2)"
            }
        }}/>
    );
}