//import Loading from "./Loading";
import Header from "./Header";
import Present from "./Present";
import Footer from "./Footer";
export default function Layout(props) {
    const { children } = props;
    return (
        <>
            {/* <Loading> */}
                <Header></Header>
                <Present></Present>
                {children}
                <Footer></Footer>
            {/* </Loading> */}
        </>
    )
}
