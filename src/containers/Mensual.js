import { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import RetoMensual from "../components/RetoMensual";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
export default function Semanal() {
    const { listameRetosMensual, retosMensual } = useContext(Contexto);
    useEffect(() => {
        listameRetosMensual();
    }, []);
    return (
        <>
            <br />
            <Container>
                <Row>
                    {
                        retosMensual.map((item) => (
                            <RetoMensual {...item}></RetoMensual>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}
