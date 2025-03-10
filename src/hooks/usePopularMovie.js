import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utilities/moviesSlice';
import { API_OPTIONS } from '../utilities/constants';
import { useNavigate } from 'react-router-dom';

const usePopularMovie = () => {
  const user=useSelector((store)=>store.user);
    const navigate=useNavigate();
    const dispatch=useDispatch();
  const getPopularMovies=async ()=>{
    try{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json=await data.json();
    
    dispatch(addPopularMovies(json.results))
  }
  catch(err){
    if(!user){
      console.log("return");
      return;}
      console.log(user)
     navigate("/error");
  }
}

  useEffect(()=>{
    getPopularMovies();
  },[])

}

export default usePopularMovie;