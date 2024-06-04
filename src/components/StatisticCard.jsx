import { Box, Flex, Text, Icon } from "@chakra-ui/react";

const StatisticCard = ({ icon, value, label, percentage }) => {
  return (
    <Box bg="blue.900" color="white" p={4} borderRadius="md" boxShadow="md">
      <Flex justify="space-between" align="center">
        <Icon as={icon} boxSize={6} />
        <Box textAlign="right">
          <Text fontSize="2xl" fontWeight="bold">
            {value}
          </Text>
          <Text>{label}</Text>
          <Text>{percentage}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default StatisticCard;