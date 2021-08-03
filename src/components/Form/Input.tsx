import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <FormControl>
      { Boolean(label) && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        bgColor="gray.900"
        focusBorderColor="pink.500"
        id={name}
        name={name}
        size="lg"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        {...rest}
      />
    </FormControl>
  )
}
