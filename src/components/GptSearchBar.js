import React from 'react';
import lang from '../utilities/langConstants';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {
    const langVal=useSelector((store)=>store.config.lang);

  return (
    <div className='flex justify-center items-end h-1/3' >
        <form className='w-1/2 h-1/3 bg-black grid grid-cols-12'>
            <input type="text" className='p-4 m-4 col-span-9 placeholder:font-bold' placeholder={lang[langVal].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg font-bold'>{lang[langVal].search}</button>

        </form>
    </div>
  )
}

export default GptSearchBar