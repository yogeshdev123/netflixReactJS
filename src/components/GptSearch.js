import { netflixbglogo } from "../utilities/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div className="h-screen flex justify-center items-center"  >
         <div className='absolute -z-10'>
                <img src={netflixbglogo} className='w-screen h-screen object-cover' alt='netflix'/></div>
        <div className="w-full h-full">
        <GptSearchBar/>
        <GptMovieSuggestions/></div>

    </div>
  )
}

export default GptSearch