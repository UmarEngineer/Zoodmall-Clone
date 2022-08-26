import Elect12 from "../../Components/Elect12"
import Hero from "../../Components/Hero"
import Navbar from "../../Components/Navbar"
import NavbarTop from "../../Components/NavbarTop"
import TopCategories from "../../Components/TopCategories"
import ElectTermPayment from "../../Components/ElectTermPayment"
import AutoProducts from "../../Components/AvtoProducts"
import TopAutoProducts from "../../Components/TopAvtoProducts"
import { TopBrandsSlider } from "../../Components/TopBrandsSlider"
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
            <ElectTermPayment />
            <AutoProducts />
            <TopAutoProducts />
            <TopBrandsSlider />
        </div>

    </div>
  )
}

export default Home