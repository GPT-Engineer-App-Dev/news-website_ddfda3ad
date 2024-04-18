import React from "react";
import { Box, Flex, Heading, Text, Input, Button, Image, Stack, Icon, Container, SimpleGrid, Link } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box bg="gray.100" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading size="lg">News Website</Heading>
            <Flex align="center">
              <Input placeholder="Search..." mr={4} />
              <Button colorScheme="blue" leftIcon={<FaSearch />}>
                Search
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Navigation */}
      <Box bg="gray.200" py={2}>
        <Container maxW="container.lg">
          <Flex justify="space-between">
            <Link href="#" fontWeight="bold">
              Home
            </Link>
            <Link href="#" fontWeight="bold">
              Politics
            </Link>
            <Link href="#" fontWeight="bold">
              Business
            </Link>
            <Link href="#" fontWeight="bold">
              Technology
            </Link>
            <Link href="#" fontWeight="bold">
              Sports
            </Link>
          </Flex>
        </Container>
      </Box>

      {/* Featured News */}
      <Container maxW="container.lg" py={8}>
        <Heading mb={4}>Featured News</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXdzJTIwaGVhZGxpbmV8ZW58MHx8fHwxNzEzNDA5NDQyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Featured News 1" mb={4} />
            <Heading size="md" mb={2}>
              News Headline 1
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMG5ld3N8ZW58MHx8fHwxNzEzNDA5NDQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Featured News 2" mb={4} />
            <Heading size="md" mb={2}>
              News Headline 2
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Latest News */}
      <Container maxW="container.lg" py={8}>
        <Heading mb={4}>Latest News</Heading>
        <Stack spacing={8}>
          <Box>
            <Heading size="md" mb={2}>
              News Headline 3
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
          </Box>
          <Box>
            <Heading size="md" mb={2}>
              News Headline 4
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
          </Box>
          <Box>
            <Heading size="md" mb={2}>
              News Headline 5
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
          </Box>
        </Stack>
      </Container>

      {/* Footer */}
      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 News Website. All rights reserved.</Text>
            <Stack direction="row" spacing={4}>
              <Icon as={FaFacebook} boxSize={6} />
              <Icon as={FaTwitter} boxSize={6} />
              <Icon as={FaInstagram} boxSize={6} />
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
