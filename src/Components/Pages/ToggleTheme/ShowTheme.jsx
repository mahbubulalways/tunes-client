import React, { useState } from 'react';
import { darkMode, lightMode } from './Theme';

const ShowTheme = () => {
    const [checkbox,setCheckbox]=useState(null)
    if(!checkbox){
        lightMode()
    }
    else{
        darkMode()
    }
    return (
        <div className=''>
            <div className={`z-10 fixed right-8 lg:right-20 top-3/4 mt-16 w-max h-max ${checkbox ?'bg-white px-4 py-6 rounded-full'  : 'bg-gray-700 px-4 py-6  rounded-full'}`}>
            <div className='pt-1'>
            <input type="checkbox" onChange={()=>setCheckbox(event.target.checked)} className="toggle z-10"  />
            </div>
        </div>
        </div>
    );
};

export default ShowTheme;