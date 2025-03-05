import { useEffect } from 'react'
import { addTrailerVideo } from '../utilities/moviesSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utilities/constants';
import { useNavigate} from 'react-router-dom';

const useMovieTrailer = (movieId) => {
   const dispatch=useDispatch();
   const navigate=useNavigate();
  const getMovieVideos= async ()=>{
    try{
    const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS );
    const json=await data.json();
 
    const filterData=json.results.filter(video=>video.type==="Trailer");
    const trailer=filterData.length?filterData[0]:json.results[0];
  
    dispatch(addTrailerVideo(trailer));}
  catch(err){
    navigate("/error")

  }
 }
 useEffect(()=>{
     getMovieVideos();

 },[])
 
}

export default useMovieTrailer