import { ZoodMallLogo } from "../images/icons"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <ZoodMallLogo />
        <form>
          <input type="text" placeholder="ZoodMall da qidirish" />
        </form>
        <div>
          Icon
          <div className="basket">
            Icon
            <span>Savat</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar