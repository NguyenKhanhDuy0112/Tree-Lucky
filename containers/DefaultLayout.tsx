import Footer from "../layout/Footer";
import Header from "../layout/Header";

interface DefaultLayoutProps {
    children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps) {
    const { children } = props
    return (
        <>
            <Header />
            <section className="main">
                {children}
            </section>
            {/* <Footer /> */}
        </>
    );
}

export default DefaultLayout;