import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iconoCabecera from "../assets/statics/github.png";
export default function Footer() {
    return (
        <>
            {/* <div>
                <p>Copyright RGPlazas 2022</p>
            </div> */}
            <Navbar collapseOnSelect bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Copyright RGPlazas 2022</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Navbar.Brand href="https://github.com/rgplazas/desafio-semanal-2022-POO" target="_blank"><img alt="" src={iconoCabecera} width="30" height="30" className="d-inline-block align-top"/>{' '}</Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
