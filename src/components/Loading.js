import "../assets/css/Loading.css";
import iconoCargador from "../assets/statics/loading.gif";
export default function Loading() {
    const load = document.getElementById("load");
    console.log(load);
    setTimeout(function(){
        //load.style.display = "none";
    }, 2000);
    return (
        <>
            <div className="loading" id="load"><img src={iconoCargador} className="img-fluid mx-auto d-block" alt="loading" /></div>
        </>
    )
}
