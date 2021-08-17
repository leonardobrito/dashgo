import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";

export default function CreateUser() {
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
          p={["6", "8"]}
        >
          <Heading fontWeight="normal" size="lg" >Criar Usuário</Heading>

          <Divider borderColor="gray.700" my="6" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input label="Nome completo" name="name" />
              <Input label="E-mail" name="email" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input label="Senha" name="password" type="password" />
              <Input label="Confirmação da senha" name="password_confirmation" type="password" />
            </SimpleGrid>
          </VStack>

          <Flex justify="flex-end" mt="8">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
