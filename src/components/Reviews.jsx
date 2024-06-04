import { Box, Text, Progress, Button } from "@chakra-ui/react";

const Reviews = () => {
  return (
    <Box bg="white" p={4} borderRadius="md" boxShadow="md">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Reviews
      </Text>
      <Text>Positive Reviews</Text>
      <Progress value={80} colorScheme="green" mb={4} />
      <Text>Neutral Reviews</Text>
      <Progress value={17} colorScheme="gray" mb={4} />
      <Text>Negative Reviews</Text>
      <Progress value={3} colorScheme="red" mb={4} />
      <Text mb={4}>
        More than <strong>1,500,000 developers</strong> used Creative Tim's products and over <strong>700,000 projects</strong> were created.
      </Text>
      <Button colorScheme="teal" w="full">
        View All Reviews
      </Button>
    </Box>
  );
};

export default Reviews;