import { Box, Heading } from '@chakra-ui/react';

export const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        minH="60vh"
      >
        <Heading as="h2" size="2xl" color="var(--chakra-colors-yellow-400)">
          CYBER PHONEBOOK
        </Heading>
      </Box>
    </>
  );
};
