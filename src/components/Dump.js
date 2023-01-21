import React from 'react'
import {
  ChakraProvider,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Box,
  Flex,
  Text,
  Textarea,
  Button
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import axiosInstance from './axios';

function SearchRes (){


  let [textVal, updatetextVal] = React.useState('')
  let [searchVal, updatesearchVal] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    updatetextVal(inputValue)
  }

  let handleSearchChange = (e) => {
    let inputValue = e.target.value
    updatesearchVal(inputValue)
  }
  
  let handleSearch = (e) => {
		e.preventDefault();
    let postData = new FormData();
    postData.append('name', searchVal);
    postData.append('id',1 );
		axiosInstance.post(`/api/post_item`, postData)
		.then((res) => {		
      console.log(res);
      console.log(res.data);
      updatetextVal(res.data);
		});

  }

  return(<></>)

}

export default SearchRes