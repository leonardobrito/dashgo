import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({
  isCurrent = false,
  number
}: PaginationItemProps) {

  if(isCurrent) {
    return (
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
        {number}
      </Button>
    )
  }

  return (
    <Button
      bg="gray.700"
      fontSize="xs"
      size="sm"
      width="4"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {number}
    </Button>
  )
}
