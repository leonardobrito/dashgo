import { Avatar, Box, Flex, Icon, Input, HStack, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
export function Header() {
  return (
    <Flex
      align="center"
      as="header"
      h="20"
      mt="4"
      mx="auto"
      maxWidth={1480}
      px="6"
      w="100%"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" color="pink.500" ml="1">.</Text>
      </Text>

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

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          borderColor="gray.700"
          borderRightWidth={1}
          color="gray.300"
          mx="8"
          spacing="8"
          pr="8"
          py="1"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Leonardo Brito</Text>
            <Text color="gray.300" fontSize="small">
              f.leobrito@gmail.com
            </Text>
          </Box>

          <Avatar
            name="Leonardo Brito"
            size="md"
            src="https://github.com/leonardobrito.png"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
