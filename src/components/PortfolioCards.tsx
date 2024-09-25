import React, { useEffect } from 'react'
import dum from '../media/images/Screenshot 2024-09-10 172507.png'
import { CiLink } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPortfolio, selectAllPortfolio } from '../features/portfolio/portfolioSlice';


const PortfolioCards = () => {

    const allPortfolio = useAppSelector(selectAllPortfolio);


    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPortfolio())
    }, [dispatch])


  return (
    <div className=' mt-5 px-8'>
        <h2 className=' font-bold text-xl underline'>My portfolio:</h2>
        <div className='mt-3 grid grid-cols-4'>
            {allPortfolio.map((portfolio) => (
                <div className=' shadow-lg w-64 cursor-pointer rounded-lg mb-6'>
                <img className='w-64 object-contain rounded-lg' src={`http://127.0.0.1:8000/${portfolio.site_image}`}  alt='im'/>
                <div className=' mt-2 pb-3 px-3'>
                    <h3 className=' text-xl font-bold text-name-color'>{portfolio.site_name}</h3>
                    <p className=' flex items-center underline text-link-color'> <a href={portfolio.site_url}  target="_blank">visit site</a> <CiLink className=' ms-1' /></p>
                    <Link to={`/potfolio/${portfolio.id}`}>
                        <p className=' text-vis text-sm font-semibold '>View building stack</p>
                    </Link>                    
                </div>
            </div>
            ))}
            
          
           
        </div>
    </div>
  )
}

export default PortfolioCards