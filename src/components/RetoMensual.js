
import Col from 'react-bootstrap/Col';

export default function RetoMensual(props) {
    const { order, mes, app, enunciado, fecha_publicacion_enunciado, fecha_publicación_resolucion, titulo, imagen } = props;
    return (
        <>
            <Col sm={12} md={6} lg={6} xl={6} id={order} className="py-4">
                <div className="CardStep_cardStep__2EG0E">
                    <img loading="lazy" className="CardStep_cardStep_img__1WcOc" src={imagen} alt="Step 1: Choose a challenge" />
                    <h3 className="CardStep_cardStep_title__1oEQ_">{titulo} (APP #{app})</h3>
                    <p className="CardStep_cardStep_description__CVlpV">
                        * Mes: {mes} <br />
                        * Fecha publicación enunciado: {fecha_publicacion_enunciado} <br />
                        * Fecha publicación resolución: {fecha_publicación_resolucion} <br />
                        Enunciado: {enunciado}
                    </p>
                </div>
            </Col>
        </>
    )
}
