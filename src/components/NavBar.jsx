import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar() {

    let navigate = useNavigate();

    const logout = ()=>{
        sessionStorage.clear();
        navigate("/", { replace: true })
    }


  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand>
                <Image src='/images/White_pizza-logo.jpg' alt='Logo Pizza Delicious' style={{ width: "20%"}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    {   sessionStorage.getItem("loggedUser")
                        ?
                        <LinkContainer to={"/"}>
                        <Nav.Link  onClick={logout}>Déconnexion</Nav.Link>
                        </LinkContainer>
                        :
                        <>
                            <LinkContainer to={"/Signup"}>
                                <Nav.Link>Inscription</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={"/login"}>
                                <Nav.Link>Connexion</Nav.Link>
                            </LinkContainer>
                        </>
                    }
                    <LinkContainer to={"/Cart"}>
                        <Nav.Link>Panier</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}

export default NavBar