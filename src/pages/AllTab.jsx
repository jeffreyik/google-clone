import { ClipLoader } from 'react-spinners'
import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const AllTab = () => {
    const { results } = useContext(AppContext)

    return (
        <div>
            <div className='container'>

            <ClipLoader size={50} 
            color={'#1a73e8'} 
            loading={results.isLoading} />

            {results.isLoading === false && results.data.value.map(data => {
                return (
                <div className="result-card" key={data.id}>
                    <a className='title' target='_blank' href={data.url}>{data.title}</a>
                    <a className='link'>{data.url}</a>
                    <p>{data.description}</p>
                </div>
                )
            })}
            {results.isLoading === false && <div>Done</div>}
            </div>
        </div>
    )
}

export default AllTab;