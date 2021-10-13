import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine, RiRefreshLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import Link from 'next/link'
import { useUsers } from '../../services/hooks/useUsers'

export default function UserList() {
  const { data, isFetching, isLoading, error, refetch } = useUsers()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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
            <Heading fontWeight="normal" size="lg">
              Usuários

              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>


            <div>
              {!isLoading && <IconButton
                isDisabled={isFetching}
                mr="2"
                variant="ghost"
                colorScheme="gray.500"
                aria-label="Reload data"
                fontSize="20px"
                icon={<RiRefreshLine />}
                onClick={() => refetch()}
              />
              }

              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  colorScheme="pink"
                  fontSize="sm"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                  size="sm"
                >
                  Criar novo
                </Button>
              </Link>
            </div>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter os dados do usuário.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th
                      color="gray.300"
                      px={['4', '4', '6']}
                      width="8"
                    >
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(user => (
                    <Tr key={user.id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text color="gray.300" fontSize="sm">{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
                      <Td>
                        <Link href="/users/edit" passHref>
                          <Button
                            as="a"
                            colorScheme="purple"
                            fontSize="sm"
                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                            size="sm"
                          >
                            Editar
                          </Button>
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
