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
  Image,
  Icon,
  Text,
  Link,
  useBreakpointValue,
  Textarea,
} from '@chakra-ui/react';
import { MdEvent, MdPhotoCamera } from 'react-icons/md'; // Importing icons from react-icons

export const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    type: '',
    description: '',
    date: '',
    photoUrl: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, form]);
    setForm({ type: '', description: '', date: '', photoUrl: '' });
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
              <Icon as={MdEvent} boxSize={8} color="black" /> Record Event
            </Heading>
          </Stack>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Event Type</FormLabel>
              <Input
                type="text"
                name="type"
                placeholder="Enter event type (Yoga/Sports)"
                _placeholder={{ color: 'gray.400' }}
                _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                _hover={{ borderColor: 'teal.300' }}
                border="1px"
                borderColor="gray.300"
                borderRadius="md"
                p={2}
                width="full"
                transition="border-color 0.2s ease, box-shadow 0.2s ease"
                value={form.type}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                placeholder="Enter a description for the event"
                _placeholder={{ color: 'gray.400' }}
                _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                _hover={{ borderColor: 'teal.300' }}
                border="1px"
                borderColor="gray.300"
                borderRadius="md"
                p={2}
                width="full"
                transition="border-color 0.2s ease, box-shadow 0.2s ease"
                value={form.description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                name="date"
                _placeholder={{ color: 'gray.400' }}
                _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                _hover={{ borderColor: 'teal.300' }}
                border="1px"
                borderColor="gray.300"
                borderRadius="md"
                p={2}
                width="full"
                transition="border-color 0.2s ease, box-shadow 0.2s ease"
                value={form.date}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Photo URL</FormLabel>
              <Input
                type="text"
                name="photoUrl"
                placeholder="Enter the URL of a photo"
                _placeholder={{ color: 'gray.400' }}
                _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                _hover={{ borderColor: 'teal.300' }}
                border="1px"
                borderColor="gray.300"
                borderRadius="md"
                p={2}
                width="full"
                transition="border-color 0.2s ease, box-shadow 0.2s ease"
                value={form.photoUrl}
                onChange={handleChange}
              />
              <FormHelperText>URL should point to an image.</FormHelperText>
            </FormControl>
            <Button colorScheme="teal" width="full" onClick={handleSubmit}>
              Add Event
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box textAlign="center" mt={8}>
        <Heading as="h2" size="md" color="black">
          Recorded Events
        </Heading>
        <Stack spacing={4} mt={4}>
          {events.map((event, index) => (
            <Box
              key={index}
              bg="white"
              p={4}
              borderRadius="md"
              shadow="md"
              width={{ base: 'full', sm: 'md' }}
              mx="auto"
            >
              <Stack spacing={4}>
                <Heading as="h3" size="sm" color="black">
                  {event.type}
                </Heading>
                <Textarea
                  isReadOnly
                  value={event.description}
                  size="sm"
                />
                <Box>
                  {event.photoUrl && <Image src={event.photoUrl} alt={event.type} borderRadius="md" />}
                </Box>
                <Box>
                  <Text>Date: {event.date}</Text>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
}