import MovieCard from "./MovieCard"
import "./scrollbar.css";
const MoviesList = ({title,movies}) => {
    // console.log(movies);
    if(movies==null)return;
  return (
    <div className="px-6">
            <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
    <div className="scrollBar flex overflow-x-scroll ">
        
       
    <div className="flex">
         {movies.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
    </div>
     </div>
     </div>         
  )
}

export default MoviesList