import { Box, VStack, Text, Button, Divider, Flex, Icon, Link } from "@chakra-ui/react";
import { FaHome, FaUser, FaUsers, FaFileAlt, FaCog, FaProjectDiagram, FaDollarSign, FaChartBar, FaBell, FaShoppingCart, FaLock, FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box bg="white" w="250px" h="100vh" p={4} boxShadow="md">
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        PURITY UI DASHBOARD PRO
      </Text>
      <VStack align="start" spacing={4}>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaHome} mr={2} />
          Dashboard
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaFileAlt} mr={2} />
          Pages
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaUser} mr={2} />
          Profile
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaUsers} mr={2} />
          Users
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaFileAlt} mr={2} />
          Reports
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaCog} mr={2} />
          Account
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaProjectDiagram} mr={2} />
          Projects
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaDollarSign} mr={2} />
          Pricing Page
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaChartBar} mr={2} />
          Widgets
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaBell} mr={2} />
          Alerts
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaShoppingCart} mr={2} />
          Ecommerce
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={FaLock} mr={2} />
          Authentication
        </Link>
      </VStack>
      <Divider my={6} />
      <Box mt="auto">
        <Flex align="center" mb={4}>
          <Icon as={FaQuestionCircle} mr={2} />
          <Text>Need help?</Text>
        </Flex>
        <Button colorScheme="teal" w="full">
          Documentation
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;