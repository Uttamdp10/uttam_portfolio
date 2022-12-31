import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
//import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }
    
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand = "md" className={scrolled ? "scrolled":""}>
            <Container>
                {/* <Navbar.Brand href="https://hrsh22.github.io/personal-portfolio/">
                    <img src={logo} alt="logo" />
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/uttam-patel-0a4b48211" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Linked IN"/></a>
                            <a href="https://github.com/Uttamdp10" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub"/></a>
                            <a href="https://www.instagram.com/uttaam_patel.23" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram"/></a>
                        </div><a href="mailto:uttampatel.6048@gmail.com" target="_blank" rel="noreferrer">
                        <button className="vvd" onClick={()=>console.log('connect')}>
                        <span>Let's Connect</span></button></a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}