import Link from "next/link";
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const { formState, handleSubmit, register } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(values)
  }

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
          as="form"
          bg="gray.800"
          borderRadius={8}
          flex="1"
          onSubmit={handleSubmit(handleCreateUser)}
          p={["6", "8"]}
        >
          <Heading fontWeight="normal" size="lg" >Criar Usuário</Heading>

          <Divider borderColor="gray.700" my="6" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={errors.name}
                label="Nome completo"
                name="name"
                {...register('name')}
              />
              <Input
                error={errors.email}
                label="E-mail"
                name="email"
                type="email"
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={errors.password}
                label="Senha"
                name="password"
                type="password"
                {...register('password')}
              />
              <Input
                error={errors.password_confirmation}
                label="Confirmação da senha"
                name="password_confirmation"
                type="password"
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex justify="flex-end" mt="8">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                colorScheme="pink"
                isLoading={formState.isSubmitting}
                type="submit"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
