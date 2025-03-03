
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovie from '../hooks/usePopularMovie'
import GptSearch from './GptSearch'
import Header from './Header'
import MainContainer from './MainContainer'

import SecondaryContainer from './SecondaryContainer'



const Browse = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovie();
  return (
    <>
    <Header isGptEnabled={showGptSearch}/>
 
    {showGptSearch?(<GptSearch isGptEnabled={showGptSearch}/>):(<>
    <MainContainer/>
    <SecondaryContainer/></>)}
</>
  )
}

export default Browse;