import { Box, Table, Thead, Tbody, Tr, Th, Td, Avatar, Text } from "@chakra-ui/react";

const UserTable = () => {
  const users = [
    { name: "Esthera Jackson", function: "Manager", review: "Positive", email: "esthera@simmmp.com", employed: "14/06/21", id: "42312" },
    { name: "Alexa Liras", function: "Programmer", review: "Positive", email: "alexa@simmmp.com", employed: "14/06/21", id: "93201" },
    { name: "Laurent Michael", function: "Executive", review: "Neutral", email: "laurent@simmmp.com", employed: "14/06/21", id: "84120" },
    { name: "Freduardo Hill", function: "Manager", review: "Positive", email: "freduardo@simmmp.com", employed: "14/06/21", id: "42314" },
    { name: "Daniel Thomas", function: "Programmer", review: "Negative", email: "daniel@simmmp.com", employed: "14/06/21", id: "75602" },
  ];

  return (
    <Box bg="white" p={4} borderRadius="md" boxShadow="md">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Function</Th>
            <Th>Review</Th>
            <Th>Email</Th>
            <Th>Employed</Th>
            <Th>ID</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td>
                <Avatar name={user.name} mr={2} />
                <Text display="inline">{user.name}</Text>
              </Td>
              <Td>{user.function}</Td>
              <Td>{user.review}</Td>
              <Td>{user.email}</Td>
              <Td>{user.employed}</Td>
              <Td>{user.id}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserTable;