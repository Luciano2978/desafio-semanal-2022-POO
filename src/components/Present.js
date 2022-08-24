//import "../assets/css/Loading.css";
import iconoCargador from "../assets/statics/loading.gif";
export default function Present() {
    return (
        <>
            <div className="loading" id="load"><img src={iconoCargador} width="100" height="100" className="img-fluid mx-auto d-block" alt="loading" /></div>
        </>
    )
}
