import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      align="center"
      direction="row"
      justify="space-between"
      mt="8"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          colorScheme="pink"
          disabled
          fontSize="xs"
          size="sm"
          width="4"
          _disabled={{
            bg: 'pink.500',
            cursor: 'default',
          }}
        >
          1
        </Button>
        <Button
          bg="gray.700"
          fontSize="xs"
          size="sm"
          width="4"
          _hover={{
            bg: 'gray.500',
          }}
        >
          2
        </Button>
        <Button
          bg="gray.700"
          fontSize="xs"
          size="sm"
          width="4"
          _hover={{
            bg: 'gray.500',
          }}
        >
          3
        </Button>
        <Button
          bg="gray.700"
          fontSize="xs"
          size="sm"
          width="4"
          _hover={{
            bg: 'gray.500',
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  )
}
