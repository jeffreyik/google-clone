import { AppContext } from '../context/AppContext'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Layout = () => {
    const navigate = useNavigate('')
    const [options, setOptions] = useState({
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      })
      const [searchQuery, setSearchQuery] = useState('')
      const [results, setResults] = useState({
        isLoading: false,
        error: '',
        data: []
      })

      const getSearch = (e) => {
        e.preventDefault()
        navigate('/results')
        setResults({
            ...results,
            isLoading: true
        })
        fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${searchQuery}&pageNumber=1&pageSize=10&autoCorrect=true`, options)
          .then(response => response.json())
          .then(response => {
            setResults({
                isLoading: false,
                error: '',
                data: response
            })
            // console.log(response)
            // console.log(results)
          })
          .catch(err => console.error(err));
      }

    return (
        <AppContext.Provider value={{results, setSearchQuery, searchQuery, getSearch}}>
            <Outlet />
        </AppContext.Provider>
    )
}

export default Layout;