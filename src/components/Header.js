import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iconoCabecera from "../assets/statics/loading.gif";
export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img alt="" src={iconoCabecera} width="30" height="30" className="d-inline-block align-top"/>{' '}Retos de Programación</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/semanales2022">Ejercicios Semanales '22</Nav.Link>
                            <Nav.Link href="/mensuales2022">Apps Mensuales '22</Nav.Link>
                            <Nav.Link href="https://github.com/rgplazas/desafio-semanal-2022-POO">Proyecto en GitHub</Nav.Link>
                            <button className="DCButton_DCButton__2G827 DCButton_DCButton__outline__mECyy undefined" aria-label="Login with github"><div className="DCButton_DCButton_icon__l9p8v DCButton_DCButton_icon__marginRight__9b00y"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg></div><div className="DCButton_DCButton_wrapper__1uexv">Login with Github</div></button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
