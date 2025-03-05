import { netflixbglogo } from "../utilities/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <>
         <div className='fixed -z-10'>
                <img src={netflixbglogo} className='w-screen h-screen object-cover' alt='netflix'/></div>
        <div className="">
        <GptSearchBar/>
        <GptMovieSuggestions/></div>

    </>
  )
}

export default GptSearch