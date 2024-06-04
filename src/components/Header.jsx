import { Box, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="white" w="full" p={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Pages</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Reports</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <InputGroup w="300px">
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Type here..." />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Header;