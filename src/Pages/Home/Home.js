import Elect12 from "../../Components/Elect12"
import Hero from "../../Components/Hero"
import Navbar from "../../Components/Navbar"
import NavbarTop from "../../Components/NavbarTop"
import TopCategories from "../../Components/TopCategories"
import './Home.css'
const Home = () => {



    return (
    <div>
        <NavbarTop />
        <div className="container">
            <Navbar />
            <Hero />
            <Elect12 />
            <TopCategories />
        </div>

    </div>
  )
}

export default Home