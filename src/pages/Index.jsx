import React, { useState, useRef } from "react";
import { Box, Button, Container, VStack, Heading, Text, IconButton, useToast, Divider, Code } from "@chakra-ui/react";
import { FaMicrophone, FaMicrophoneSlash, FaRegFilePdf } from "react-icons/fa";
import { Image } from "@chakra-ui/react";

const Index = () => {
  const [isListening, setIsListening] = useState(false);
  const outputRef = useRef();
  const toast = useToast();

  const displayOutput = (content) => {
    if (outputRef.current) {
      outputRef.current.innerHTML = content;
    }
  };

  const handleVoiceCommand = () => {
    if (!navigator.mediaDevices) {
      toast({
        title: "Error",
        description: "Your browser doesn't support voice commands.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsListening((prevState) => !prevState);

    if (isListening) {
      displayOutput("<Text>Time complexity of sorting algorithms varies. For example, Quick Sort has an average case of O(n log n).</Text>");
    }
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading>Welcome, Computer Science Student!</Heading>
        <Text>Use your voice to control the interface. Click the microphone button to start.</Text>

        <IconButton aria-label={isListening ? "Stop listening" : "Start listening"} icon={isListening ? <FaMicrophoneSlash /> : <FaMicrophone />} colorScheme={isListening ? "red" : "green"} size="lg" onClick={handleVoiceCommand} />

        <Divider />

        <Heading size="md">Help Commands</Heading>
        <Code p={4} children="What is the time complexity of sorting algorithms?" />
        <Code p={4} children="Show me notes on distributed systems" />
        <Code p={4} children="Find research papers on machine learning" />

        <Divider />

        <Heading size="md">Output Frame</Heading>
        <Box border="1px solid" borderColor="gray.200" p={4} ref={outputRef} minHeight="300px" display="flex" alignItems="center" justifyContent="center">
          <Text>Output will be displayed here</Text>
          {/* Example Output */}
          {/* <Image src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2Rpbmd8ZW58MHx8fHwxNzEwMDczNjI0fDA&ixlib=rb-4.0.3&q=80&w=1080" /> */}
          {/* <embed src="path_to_pdf" type="application/pdf" width="100%" height="100%" /> */}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
