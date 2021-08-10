import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leonardo Brito</Text>
          <Text color="gray.300" fontSize="small">
            f.leobrito@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        name="Leonardo Brito"
        size="md"
        src="https://github.com/leonardobrito.png"
      />
    </Flex>
  )
}
