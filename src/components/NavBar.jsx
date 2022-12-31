import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/google-logo.png'
import SearchBar from './SearchBar'

const NavBar = () => {
    return (
        <nav>
            <div className="top-nav">
                <div className="container">
                    <Link to='/'><img src={Logo} alt="" className='nav-logo' /></Link>
                    <SearchBar />
                </div>
            </div>
            <div className="tabs">
                <div className="container">
                    <NavLink to='/results'>All</NavLink>
                    <NavLink to='/results/images'>Images</NavLink>
                    <NavLink to='/results/news'>News</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar