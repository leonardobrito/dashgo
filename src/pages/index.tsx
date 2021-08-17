import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const singInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { formState, handleSubmit, register } = useForm({
    resolver: yupResolver(singInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
        p="8"
        width="100%"
      >
        <Stack spacing="4">
          <Input
            error={errors.email}
            label="E-mail"
            name="email"
            type="email"
            {...register('email')}
          />
          <Input
            error={errors.password}
            label="Senha"
            name="senha"
            type="senha"
            {...register('password')}
          />
        </Stack>

        <Button
          colorScheme="pink"
          isLoading={formState.isSubmitting}
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
