//react router
import { NavLink } from "react-router-dom";

//mantine UI
import { AppShell, Flex } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "" },
  { name: "knn", href: "knn-form" },
  { name: "K-means", href: "kmeans-form" },
  { name: "add property", href: "add-form" },
];
export default function MainNavbarComponent() {
  const pinned = useHeadroom({ fixedAt: 70 });
  return (
    <AppShell header={{ height: 60, collapsed: !pinned, offset: false }}>
      <AppShell.Header px={{ sm: "lg" }} py="sm" bg="indigo" >
        <Flex
          gap={{ base: "lg", sm: "xl" }}
          justify={{ base: "space-evenly", sm: "center" }}
          align="center"
          direction="row"
        >
          {navLinks.map((element) => (
            <NavLink key={element.name} to={element.href} className="link">{element.name}</NavLink>
          ))}
        </Flex>
      </AppShell.Header>
    </AppShell >
  )
}