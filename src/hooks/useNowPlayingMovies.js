import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utilities/moviesSlice';
import { API_OPTIONS } from '../utilities/constants';
import { useNavigate } from 'react-router-dom';
import usePopularMovie from './usePopularMovie';

const useNowPlayingMovies = () => {
   const navigate=useNavigate();
    const dispatch=useDispatch();
  const getNowPlayingMovies=async ()=>{
    try{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json=await data.json();
    
    dispatch(addNowPlayingMovies(json.results))
    
  }
    catch(err){
           navigate("/error");
    }
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])

}

export default useNowPlayingMovies