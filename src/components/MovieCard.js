import { IMG_CDN_URL} from "../utilities/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-36 md:w-48 pr-4">
        <img alt="Movie Card" src={IMG_CDN_URL+posterPath}/>
        </div>
  )
}

export default MovieCard