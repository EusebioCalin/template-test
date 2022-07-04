import { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './style.css';

const Header = () => {

    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const [navbarDropdownOpen, setNavbarDropdownOpen] = useState(false);

    const onDropdownOpen = (e) => {
        if (!navbarDropdownOpen) {
            setNavbarDropdownOpen(true);
        } else {
            setNavbarDropdownOpen(false);
        }
    }

    const changeNavBar = () => {
        if (window.scrollY >= 60) {
            setNavbarScrolled(true)
        } else {
            setNavbarScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", changeNavBar);
        return () => {
            window.removeEventListener("scroll", changeNavBar);
        }
    }, [])

    return (
        <Navbar fixed="top" expanded={navbarDropdownOpen} bg={navbarScrolled || navbarDropdownOpen ? 'dark' : ''} className='top-header-scrolled' expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className="" href="#home">Qualicode</Navbar.Brand>
                <Navbar.Toggle onClick={onDropdownOpen} />
                <Navbar.Collapse id="basic-navbar-nav" className="navbar-container" >
                    <Nav onSelect={() => setNavbarDropdownOpen(false)}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#work">Work</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#team">Team</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;