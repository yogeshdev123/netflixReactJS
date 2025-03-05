import React, { useRef } from 'react';
import lang from '../utilities/langConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utilities/OpenAi';
import axios from 'axios';
import { API_OPTIONS, OPENAI_KEY } from '../utilities/constants';
import { addGptMovieResults } from '../utilities/GptSlice';


const GptSearchBar = (movieName) => {
    const langVal=useSelector((store)=>store.config.lang);
    const dispatch=useDispatch();
    const searchText=useRef(null);
    const searchMovieTMDB=async (movieName)=>{
        const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json= await data.json();
        return json.results;
    }
    const handleGptSearchClick= async (e)=>{
        const gptQuery="Act as the Movie Recommendation System and Suggest some movies for the query: "+searchText.current.value+".only give me names of 5 films, comma seperated like the example ahead.Example Result: Super Bad,Bad Guys, Rush Hours,e.t.c";
        try{
        const gptResults=await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
            {
              contents: [{ role: "user", parts: [{ text: gptQuery }] }]
            },
            {
              params: { key: OPENAI_KEY },
              headers: { 'Content-Type': 'application/json' },
            }
          );
          let gptMovies=gptResults.data.candidates[0].content.parts[0].text.split(",");
          console.log(gptMovies)
         const promiseArray= gptMovies.map((val)=>searchMovieTMDB(val));
         const tmdbResults=await Promise.all(promiseArray);
         dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}))
         console.log(tmdbResults);
        }
          catch(err){
            console.log(err);
          }
          
    
    }
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center" >
        <form className={`w-full md:w-1/2 bg-black grid grid-cols-12`} onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9 placeholder:font-bold' placeholder={lang[langVal].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg font-bold' onClick={handleGptSearchClick}>{lang[langVal].search}</button>

        </form>
    </div>
  )
}

export default GptSearchBar