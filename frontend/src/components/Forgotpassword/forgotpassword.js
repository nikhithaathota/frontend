import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Card,
  CardBody,
  Stack,
  Heading,
  Box,
  Text
} from '@chakra-ui/react';
import axios from 'axios';
import { api } from '../Actions/api';
 // Ensure correct import path

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');

      try {
        const response = await axios.post(api + '/forgotpassword', { email });

        if (response.data.success) {
          setSuccessMessage('A password reset link has been sent to your email.');
        } else {
          setEmailError('Email not found.');
        }
      } catch (error) {
        console.error(error);
        setEmailError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <Box bg="gray.50" p={8} minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Card width="400px" boxShadow="xl" borderRadius="lg">
        <CardBody>
          <Stack spacing={4}>
            <Heading size="lg" textAlign="center">Forgot Password</Heading>
            
            <FormControl isInvalid={!!emailError}>
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!emailError ? (
                <FormHelperText>Enter the email associated with your account.</FormHelperText>
              ) : (
                <FormErrorMessage>{emailError}</FormErrorMessage>
              )}
            </FormControl>

            {successMessage && (
              <Text color="green.500" textAlign="center">{successMessage}</Text>
            )}

            <Button 
              colorScheme="teal" 
              size="lg" 
              onClick={handleSubmit}
              mt={4}
            >
              Reset Password
            </Button>

            <Button 
              colorScheme="gray" 
              size="lg" 
              variant="link" 
              mt={4}
              onClick={() => window.location.href = '/signin'}
            >
              Back to Sign In
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};