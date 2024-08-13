// import React, { useState } from 'react';
// import {
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Input,
//   Button,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Box,
//   Text,
// } from '@chakra-ui/react';
// import axios from 'axios';
// import { api } from '../Actions/api'; // Ensure correct import path

// export const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [isPasswordReset, setIsPasswordReset] = useState(false);

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validatePassword = () => {
//     if (password !== confirmPassword) {
//       setPasswordError('Passwords do not match.');
//       return false;
//     }
//     if (password.length < 8) {
//       setPasswordError('Password must be at least 8 characters long.');
//       return false;
//     }
//     setPasswordError('');
//     return true;
//   };

//   const handleSubmitEmail = async () => {
//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address.');
//     } else {
//       setEmailError('');

//       try {
//         const response = await axios.post(api + '/forgotpassword', { email });

//         if (response.data.success) {
//           setSuccessMessage('A password reset link has been sent to your email.');
//           setIsPasswordReset(true);
//         } else {
//           setEmailError('Email not found.');
//         }
//       } catch (error) {
//         console.error(error);
//         setEmailError('An error occurred. Please try again later.');
//       }
//     }
//   };

//   const handleSubmitPassword = async () => {
//     if (validatePassword()) {
//       try {
//         const response = await axios.post(api + '/resetpassword', {
//           email,
//           password,
//         });

//         if (response.data.success) {
//           setSuccessMessage('Your password has been reset successfully.');
//         } else {
//           setPasswordError('Failed to reset password.');
//         }
//       } catch (error) {
//         console.error(error);
//         setPasswordError('An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <Box bg="gray.50" p={8} minH="100vh" display="flex" alignItems="center" justifyContent="center">
//       <Card width="400px" boxShadow="xl" borderRadius="lg">
//         <CardBody>
//           <Stack spacing={4}>
//             <Heading size="lg" textAlign="center">
//               Forgot Password
//             </Heading>

//             {!isPasswordReset ? (
//               <>
//                 <FormControl isInvalid={!!emailError}>
//                   <FormLabel>Email address</FormLabel>
//                   <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                   {!emailError ? (
//                     <FormHelperText>Enter the email associated with your account.</FormHelperText>
//                   ) : (
//                     <FormErrorMessage>{emailError}</FormErrorMessage>
//                   )}
//                 </FormControl>

//                 {successMessage && (
//                   <Text color="green.500" textAlign="center">
//                     {successMessage}
//                   </Text>
//                 )}

//                 <Button colorScheme="teal" size="lg" onClick={handleSubmitEmail} mt={4}>
//                   Reset Password
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <FormControl isInvalid={!!passwordError}>
//                   <FormLabel>New Password</FormLabel>
//                   <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </FormControl>

//                 <FormControl isInvalid={!!passwordError}>
//                   <FormLabel>Confirm Password</FormLabel>
//                   <Input
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                   />
//                   {!passwordError ? (
//                     <FormHelperText>Enter your new password.</FormHelperText>
//                   ) : (
//                     <FormErrorMessage>{passwordError}</FormErrorMessage>
//                   )}
//                 </FormControl>

//                 {successMessage && (
//                   <Text color="green.500" textAlign="center">
//                     {successMessage}
//                   </Text>
//                 )}

//                 <Button colorScheme="teal" size="lg" onClick={handleSubmitPassword} mt={4}>
//                   Submit New Password
//                 </Button>
//               </>
//             )}

//             <Button colorScheme="gray" size="lg" variant="link" mt={4} onClick={() => window.location.href = '/signin'}>
//               Back to Sign In
//             </Button>
//           </Stack>
//         </CardBody>
//       </Card>
//     </Box>
//   );
// };
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
import { api } from '../Actions/api';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

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