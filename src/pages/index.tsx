import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/input'

export default function SignIn() {
  return (
    <Flex
      align="center"
      h="100vh"
      justify="center"
      w="100vw"
    >
      <Flex
        as="form"
        bg="gray.800"
        borderRadius={8}
        flexDir="column"
        maxWidth={360}
        p="8"
        width="100%"
      >
        <Stack spacing="4">
          <Input  label="E-mail" name="email" type="email" />
          <Input  label="Senha" name="senha" type="senha" />
        </Stack>

        <Button
          colorScheme="pink"
          mt="6"
          size="lg"
          type="submit"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
