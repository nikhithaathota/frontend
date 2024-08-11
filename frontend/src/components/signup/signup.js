import React, { useState } from 'react';
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
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MdPerson, MdLock, MdEmail } from 'react-icons/md'; // Importing icons from react-icons
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../Actions/api'; // Ensure this path is correct based on your project structure

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Using useNavigate for routing

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${api}/signup`, { name, email, password });
      console.log(response.data)
      if (response.data) {
        alert('Sign up successful');
        navigate('/signin'); // Redirect to sign-in page
      } else {
        alert('Sign up failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred while signing up');
    }
  };

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
          <Stack spacing={6} mb={8} textAlign="center">
            <Heading as="h1" size="lg" color="black">
              <Icon as={MdPerson} boxSize={8} color="black" /> Sign Up
            </Heading>
          </Stack>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                _placeholder={{ color: 'gray.400' }}
                _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                _hover={{ borderColor: 'teal.300' }}
                border="1px"
                borderColor="gray.300"
                borderRadius="md"
                p={2}
                width="full"
                transition="border-color 0.2s ease, box-shadow 0.2s ease"
                onChange={(e) => setName(e.target.value)}
              />
              <FormHelperText>We'll never share your information.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText>Make sure your password is strong.</FormHelperText>
            </FormControl>
            <Button colorScheme="teal" width="full" onClick={handleSignUp}>
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box textAlign="center" mt={4}>
        Already have an account? <Link color="teal.500" href="/signin">Sign In</Link>
      </Box>
    </>
  );
};
