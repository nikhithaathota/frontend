import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Box,
  Stack,
  Heading,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { api} from '../Actions/api';
import { MdLock, MdEmail } from 'react-icons/md'; // Importing icons from react-icons
import axios from'axios'
import { useNavigate } from 'react-router-dom';
export const SignIn = () => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const navigate = useNavigate();
    const SignIn=async()=>{
    await axios.post(api+"/Signin",{Email,Password})
        .then((res)=>{
            if(res.data.message){
                console.log(res?.data?.values)
                alert("login sucessfully")
                navigate("/home");
            } else {
                alert("user not found")
                 //window.location.href="/signup"
                 navigate("/signup");
            }
        })
      
        .catch((e)=>console.log(e))
}
  return (
    <>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="gray.50"
      p={4}
    >
      <Box
        bg="white"
        p={6}
        borderRadius="md"
        shadow="md"
        width={{ base: 'full', sm: 'md' }}
      >
        {/* Heading with icon */}
        <Stack spacing={6} mb={8} textAlign="center">
          <Heading as="h1" size="lg" color=" black">
            <Icon as={MdLock} boxSize={8} color=" black" /> Sign In
          </Heading>
        </Stack>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="Email"
              placeholder="Enter your email"
              _placeholder={{ color: 'gray.400' }}
              _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
              _hover={{ borderColor: 'teal.300' }}
              border="1px"
              borderColor="gray.300"
              borderRadius="md"
              p={2}
              width="full"
              transition="border-color 0.2s ease, box-shadow 0.2s ease"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="Password"
              placeholder="Enter your password"
              _placeholder={{ color: 'gray.400' }}
              _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
              _hover={{ borderColor: 'teal.300' }}
              border="1px"
              borderColor="gray.300"
              borderRadius="md"
              p={2}
              width="full"
              transition="border-color 0.2s ease, box-shadow 0.2s ease"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormHelperText>Make sure your password is strong.</FormHelperText>
          </FormControl>
          <Button colorScheme="teal" width="full"    onClick={SignIn}
          >
          
            Sign In
          </Button>
        </Stack>
      </Box>
    </Box>
    <text></text>
    </>
  );
}