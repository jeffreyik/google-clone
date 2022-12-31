import Logo from '../assets/google-logo.png'
import SearchBar from '../components/SearchBar'

const Home = () => {
    return (
        <div className="home-page">
            <img src={Logo} alt="" className='logo' />
            <SearchBar />
            <p>Made by <a href="http://twitter.com/eyikjeffrey">Jeffrey</a></p>
        </div>
    )
}

export default Home