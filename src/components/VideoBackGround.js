
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackGround = ({movieId}) => {
    
   
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo);

    useMovieTrailer(movieId);
  return (
    <div className=''>
      <iframe className='w-full aspect-video'
    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3`}
    title="YouTube video player" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    ></iframe></div>
  )
}

export default VideoBackGround