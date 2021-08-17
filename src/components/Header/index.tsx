import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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

      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          fontSize="20"
          icon={<Icon as={RiMenuLine}/>}
          mr="2"
          onClick={onOpen}
          variant="unstyled"
        />
      )}
      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
