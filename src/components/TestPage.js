import React, { useState,useEffect} from 'react';
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,useClipboard,
    useBreakpointValue,
    Textarea,
    Box,

    Input
  } from '@chakra-ui/react';
//   import { Highlight } from '@chakra-ui/react'
const CodePanel = () => {
    // const components = useSelector(getComponents)
    const [code, setCode] = useState("hello there sirs")
    
  
  
    const { onCopy, hasCopied } = useClipboard(code)
  
    return (
      <Box
      >
        <Button
          onClick={onCopy}
          size="sm"
          position="relative"
          textTransform="uppercase"
          colorScheme="teal"
          fontSize="xs"
          height="24px"
          top={4}
          left="50%"
        >
          {hasCopied ? 'copied' : 'copy'}
        </Button>

        <Text>
            {code}
        </Text>

      </Box>
    )
  }

  export default CodePanel