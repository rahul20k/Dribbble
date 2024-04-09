import React from 'react';
import Card from './Card';
import { useNavigate } from "react-router-dom";

export const Position = () => {
  const navigate = useNavigate();

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col '>
      <div className="italic font-serif text-3xl text-pink-900 relative right-3 ml-10 mt-5 mb-5">𝒹𝓇𝒾𝒷𝒷𝒷𝓁𝑒</div>
        <div className='w-[70%] mx-auto  flex flex-col justify-center items-center'>
            <h1 className='mb-5 font-bold text-2xl text-center'> What brings you to Dribbble?</h1>
            <p className='text-gray-500 text-center'> select the options that best describe you. Don't worry,you can explore other option later.</p>
            <div className='flex  flex-wrap justify-center items-center  gap-5 mt-10 max-w-screen-lg mx-auto'>
                <Card/>
            </div>
        </div>
        <div className="flex justify-center items-center h-screen">
    <div className="text-black-500 ml-10 font-bold">Anything else? you can select multiple</div>
</div>
        <div className='w-full flex flex-col justify-center items-center'>
        <button
            onClick={()=>{navigate("/verificationMAil")}}
              className="bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-700 w-[200px] mt-4"
            >
              Finish
            </button>
            <div className="text-gray-500 ml-10"><button onClick={() => navigate("/profile")}>  or press Return</button> </div>
        </div>
       

    </div>
  )
}