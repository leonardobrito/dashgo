import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex
        maxWidth={1480}
        mx="auto"
        my="6"
        px="6"
        w="100%"
      >
        <Sidebar />

        <Box
          bg="gray.800"
          borderRadius={8}
          flex="1"
          p="8"
        >
          <Flex
            align="center"
            justify="space-between"
            mb="8"
          >
            <Heading fontWeight="normal" size="lg">Usuários</Heading>
            <Button
              as="a"
              colorScheme="pink"
              fontSize="sm"
              leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
              size="sm"
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th color="gray.300" px="6" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Leonardo Brito</Text>
                    <Text color="gray.300" fontSize="sm">f.leobrito@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    colorScheme="purple"
                    fontSize="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    size="sm"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
