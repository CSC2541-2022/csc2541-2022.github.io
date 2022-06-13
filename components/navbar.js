import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Container } from 'react-bootstrap';
import Link from 'next/link'
import { useTheme } from 'next-themes';
import ThemeSwitch from './theme-switch';

export default function NavigationBar() {
    // Check if dark mode is active
    const { theme, _ } = useTheme();
    const dark = theme === 'dark' ? true : false;
    return (
      <>
      <Navbar collapseOnSelect expand='sm' id="navbarouter" className="sticky-top" style={{borderBottom: "double"}}>
        <Container>
            <Link href="/">
              <NavbarBrand id="navbarbrand">CSC2541</NavbarBrand>
            </Link>
            <Navbar.Toggle id="navbartoggle" aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className="justify-content-end" style={{width: "100%"}}>
              <NavItem>
                <Link href="/">
                  <NavLink href="/" style={{color: "#808080"}}>Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/schedule">
                  <NavLink href="/schedule" style={{color: "#808080"}}>Schedule</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/assignments">
                  <NavLink href="/assignments" style={{color: "#808080"}}>Assignments</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/logistics">
                  <NavLink href="/logistics" style={{color: "#808080"}}>Logistics</NavLink>
                </Link>
              </NavItem>
              <NavItem>
              <Link href="/">
                  <NavLink style={{color: "#808080", paddingTop: "5px"}}><ThemeSwitch/></NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
  }