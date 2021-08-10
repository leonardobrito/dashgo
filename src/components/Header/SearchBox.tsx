import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      alignSelf="center"
      as="label"
      bg="gray.800"
      borderRadius="full"
      color="gray.200"
      flex="1"
      maxWidth={400}
      ml="6"
      position="relative"
      px="8"
      py="4"
    >
      <Input
        color="gray.50"
        placeholder="Buscar na plataforma"
        mr="4"
        px="4"
        variant="unstyled"
        _placeholder={{
          color: 'gray.400',
        }}
      />
      <Icon as={RiSearchLine} fontSize="20"/>
    </Flex>
  )
}
