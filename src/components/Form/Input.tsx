import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  error?: FieldError;
  label?: string;
  name: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  error = null, label, name, ...rest }, ref
) => {
  return (
    <FormControl id={name} isInvalid={Boolean(error)}>
      { Boolean(label) && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        bgColor="gray.900"
        focusBorderColor="pink.500"
        id={name}
        name={name}
        ref={ref}
        size="lg"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        {...rest}
      />

      {Boolean(error) && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
