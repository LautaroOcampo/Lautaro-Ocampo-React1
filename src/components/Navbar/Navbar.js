
import './Navbar.css'
import {CartWidget} from './CartWidget'
import Logo from "./Logo.png"
import {Link} from 'react-router-dom'
import { useState } from 'react'


export const Navbar = () => {

    let [navbar, setNavbar] = useState(false)

    const navbarChange = () => {
        window.scrollY > 0 ? setNavbar(true) : setNavbar(false)
    }

    window.addEventListener("scroll",navbarChange)

    return(
        <div class="main-div">
            <div class={navbar ? "navbar-div shadow" : "navbar-div"}>
                <div class='logo-div'>
                    <Link to="/">
                    <img className='logo' src={Logo}></img>
                    </Link>
                </div>
                <div class='navbar'>
                    <Link to="comidas/hamburguesas" className='navbar-item'>Hamburguesas</Link>
                    <Link to="comidas/guarniciones" className='navbar-item'>Guarnicion</Link>
                    <Link to="comidas/bebidas" className='navbar-item'>Bebida</Link>
                    <CartWidget></CartWidget>
                </div>
            </div>
        </div>
    )
}

export default Navbar