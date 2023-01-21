import React, { useState,useEffect} from 'react';

import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Textarea,
    Box,
    Input,
    Spacer,
    useClipboard
  } from '@chakra-ui/react';
  import { useFileUpload } from 'use-file-upload'
  import axiosInstance from './axios';

import { useToast } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import FileUpload from './FileUpload';

  export default function SplitPage() {
    let [file, setFile] = useState("")
    let [fileData, setSelectedFile] = useState("")

    let [extractedText, setExtractedText] = useState("")
    let [value, setjobValue] = useState("")
    // let [code, setCode] = useState("hello there sirs")
    const { onCopy, hasCopied } = useClipboard("code")


	// const [formData, updateFormData] = useState(initialFormData);


    // write a useffect to set the file data
    useEffect(() => {
        let formData = new FormData();
		formData.append('uploaded_file', fileData);
        formData['uploaded_file'] = fileData;
        console.log(formData)
        if (formData['uploaded_file'] !== fileData){
            alert("Please upload a file")
        }
        else{
            let formData = new FormData();
            formData.append('uploaded_file', fileData);
            let headers={'Content-Type': fileData.type}
		axiosInstance.post('file', formData,headers)
		.then((res) => {		
            console.log("sent file")
            setExtractedText(res.data.extracted_text)
		})

      }
    }, [fileData])



	let handleSubmit = (e) => {
		e.preventDefault();
        
		let postData = new FormData();
		postData.append('uploaded_file', fileData);
        postData['uploaded_file'] = fileData;
        console.log(postData)
        if (postData['uploaded_file'] !== fileData){
            alert("Please upload a file")
        }
        else{
            let newFront = new FormData();
            newFront.append('uploaded_file', fileData);
            let headers={'Content-Type': fileData.type}
		axiosInstance.post('file', newFront,headers)
		.then((res) => {		
            console.log("sent file")
            setExtractedText(res.data.extracted_text)
		})
    }
        ;

	};


    let handleJobDesc = (e) => {
        let inputValue = e.target.value
        setjobValue(inputValue)
      }

      let handleResume = (e) => {
        let inputValue = e.target.value
        setExtractedText(inputValue)

      }


    return (
        <>

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex  pt={40} pr={4} pl={4} flex={1} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>

            <Card>
            <CardBody p={8}>
            <Box>
       
                    <Text mb='7.5px'>Job Description</Text>

                    <Textarea
                    onChange={handleJobDesc}
                    placeholder=''
                    size='sm'
                />
             
            </Box>
            

            <Box mt='5px' mb='1em'>
        
              
                    <Text mb ='7.5px'>Resume Summary</Text>
                    <Textarea
                    value={extractedText}
                    onChange={handleResume}
                    placeholder=''
                    size='sm'
                />
           
            </Box>
  

            {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text> */}
            <Spacer></Spacer>
            <Stack direction={{ base: 'column', md: 'column' }} spacing={4}>

        <FileUpload
          onFileSelectSuccess={(file) => {setSelectedFile(file)}}
          onFileSelectError={({ error }) => alert(error)}
        />
            {fileData!=="" ?
            
            <Text>Hello there</Text> 
            : <></>
            
            }
            
            <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
            </CardBody>
                </Card>
          </Stack>
        </Flex>
        <Flex p={6} pl={8} pt={40} pr={8}  flex={1.4} align='baseline' justify={'center'} justifyContent='flex-start' >
          {/* <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
           */}

           <Card >
           <Button
          onClick={onCopy}
          size="sm"
          textTransform="uppercase"
          colorScheme="teal"
          fontSize="xs"
          height="24px"
          width="5em"
          top={4}
          left="90%"
        >
          {hasCopied ? 'copied' : 'copy'}
        </Button>
            <CardBody p={10}> 
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!.</Text>
            </CardBody>
        </Card>
        </Flex>
      </Stack>
      </>
    );
  }