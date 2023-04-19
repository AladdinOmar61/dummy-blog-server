import React, { useState } from 'react';
import {
  Button,
  Center,
  Box,
  Spacer,
  Text,
  Heading,
  Flex,
  Textarea,
  Input,
  useToast,
} from '@chakra-ui/react';
import useGlobalReducer from '../utils/useGlobalReducer';

function Create() {
  const [title, setTitle] = useState('Default Title!');
  const [body, setBody] = useState('');
  const toast = useToast();

  /*
    Steps to use:
    1. Destructure the state and the function to post a blog from the custom hook
    2. parameter = (postId, title, content) order matters, if you don't need a parameter, pass in null,
    3. Call the function to post a blog
  */

  const { postBlog } = useGlobalReducer(null, title, body);

  const handleInputChange = (e, value) => {
    const inputValue = e.target.value;
    if (value === 'title' ? setTitle(inputValue) : setBody(inputValue));
  };

  const postNewBlog = (newTitle) => {
    return toast({
      title: `Blog Post: ${newTitle} has been created!`,
      description: 'Your blog post has been created!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Center className="bg-black h-screen">
      <Flex
        p={{ base: 4, md: 14 }}
        w="100%"
        direction={{ base: 'column' }}
        justifyContent="center"
      >
        <Heading className="text-red-500 font-bold drop-shadow-xl stroke-white text-center">
          Create a Blog Post!
        </Heading>
        <Spacer mb={10} />
        <Box className="">
          <Input
            className=" font-bold text-white text-xl bg-gray-800 border-red-500 border-2 outline-none"
            onChange={(e) => handleInputChange(e, 'title')}
            placeholder="Type your title here!"
          />
          <Textarea
            className=" font-medium text-white text-xl bg-gray-800 border-red-500 border-2 outline-none"
            value={body}
            onChange={handleInputChange}
            placeholder="Type your blog post here!"
            size="sm"
          />
        </Box>
        <Text>
          <Spacer mb={10} />
          <Center>
            <Button
              onClick={() => {
                postNewBlog(title);
                postBlog();
              }}
              className="text-red-500 bg-opacity-50 bg-gray-900 border-2 border-red-500 hover:text-black hover:bg-red-500"
              bg="gray.900"
            >
              {' '}
              Submit!{' '}
            </Button>
          </Center>
        </Text>
      </Flex>
    </Center>
  );
}

export default Create;
