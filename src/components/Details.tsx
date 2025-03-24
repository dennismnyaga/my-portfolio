import React, { useEffect } from 'react'
// import dum from '../media/images/Screenshot 2024-09-10 172507.png'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchSinglePortfolio, getSinglePortfolioStatus, selectSinglePortfolio } from '../features/portfolio/singlePortfolioSlice'
import { useParams } from 'react-router-dom'
import getApiUrl from '../getApiUrl'
const Details = () => {
  const portfolioId = useParams()

  const ids = Number(portfolioId.porfolioId)
  const singlePortArray = useAppSelector(selectSinglePortfolio);
 
  const portfolioStatus = useAppSelector(getSinglePortfolioStatus);

  const dispatch = useAppDispatch()

  const urls = getApiUrl();

  useEffect(() => {
    if (ids) {
      dispatch(fetchSinglePortfolio(ids))
    }

  }, [dispatch, ids])


  let content;

  if (portfolioStatus === 'loading') {
    content = <div>
      <h4>Loading...</h4>
    </div>
  } else if (portfolioStatus === 'failed') {
    content = <div>
      <h4>Error occured</h4>
    </div>
  } else if (portfolioStatus === 'succeeded') {
    // @ts-ignore
    const singlePort = singlePortArray[0];
    content = <div className=' grid grid-cols-2'>
      <div className='  col-span-1'>
        <img className=' w-full object-contain rounded-lg ' src={`${urls}/${singlePort.site_image}`} alt='dum' />
        <div className=' mt-3  items-center text-center'>
          <div className=''>
            <h4 className=' font-extrabold text-xl text-name-color underline mb-2'>{singlePort?.site_name}</h4>
            <h4 className=' font-bold text-xl '>Visit Site at:</h4>
            <a href={singlePort?.site_url} target="_blank">{singlePort?.site_url || 'no url'}</a>
          </div>
          <div className=' mt-2'>
            <h4 className=' font-bold text-xl '>Github Repo:</h4>
            <a href={singlePort.git_repo} target="_blank">{singlePort?.git_repo}</a>
          </div>
        </div>
        <div className='mt-2'>
          <h4 className=' font-bold text-xl'>Project Description:</h4>
          <p>{singlePort.description}</p>
        </div>
      </div>
      <div className=' ms-14'>
        <h4 className=' font-extrabold text-2xl'>Building stack</h4>
        <div className=' mt-5 flex flex-col justify-center px-10 '>
          {singlePort?.stacks.map((mm: any) => (
            <ol className=' list-disc'>
              <li>
                <h5 className=' py-1'>{mm.stack_name}</h5>
              </li>
            </ol>
          ))}
        </div>
      </div>

    </div>
  }
  return (
    <div className=' px-8 mt-5'>
      {content}
    </div>
  )
}

export default Details