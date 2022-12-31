import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar';

const ResultsPage = () => {
    return (
        <div className="results-page">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default ResultsPage;