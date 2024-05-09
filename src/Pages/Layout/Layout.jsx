import { Outlet } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"

const Layout = () => {
    return (
        <div>
            <Header />
            <main className="md:mt-0 mb-28">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout