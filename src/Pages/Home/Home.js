import Hero from "../../Components/Hero"
import Navbar from "../../Components/Navbar"
import NavbarTop from "../../Components/NavbarTop"
import './Home.css'
const Home = () => {



    return (
    <div>
        <NavbarTop />
        <div className="container">
            <Navbar />
            {/* <Hero /> */}
        </div>

    </div>
  )
}

export default Home