import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return(
  <Stack
    align="flex-start"
    spacing="12"
  >
    <NavSection title="GERAL">
      <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
      <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
    </NavSection>

    <NavSection title="AUTOMAÇÃO">
      <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
      <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
    </NavSection>
  </Stack>
  )
}
