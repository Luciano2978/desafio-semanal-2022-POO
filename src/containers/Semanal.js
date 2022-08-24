import { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import RetoSemanal from "../components/RetoSemanal";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
export default function Semanal() {
    const { listameRetosSemanal, retosSemanal } = useContext(Contexto);
    useEffect(() => {
        listameRetosSemanal();
    }, []);
    return (
        <>
            <div className="container">
                <div className="wraper">
                    <div className="home">
                        <br />
                        <Container>
                            <Row>
                                {
                                    retosSemanal.map((item) => (
                                        <RetoSemanal {...item}></RetoSemanal>
                                    ))
                                }
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}
