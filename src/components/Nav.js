import React, { useState } from 'react';
import {
  Text,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaAlignJustify } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import SpotifyConfig from './SpotifyConfig';


const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue('white', 'blackAlpha.200');
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
    >
      <Text fontSize="xl" fontWeight="bold">
        Weird Fishes
      </Text>

      <Spacer />
      
      <Flex alignItems="center">
        <SpotifyConfig></SpotifyConfig>
        
        <IconButton mr="2" w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>

        {/*isLargerThanMD ? (
          <>
            <a target="_blank" rel="noreferrer" href="https://appseed.us/apps/react/" fontSize="md" mr="10">
               Apps
            </a>
          </>
        ) : (
          <IconButton ref={ref} onClick={onOpen}>
            <Icon as={FaAlignJustify} />
          </IconButton>
        )*/} 

      </Flex>
    </Flex>
  );
};

export default Nav;