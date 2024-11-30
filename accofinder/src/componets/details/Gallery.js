import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Typography } from 'antd';


function Gallery() {
   const locaton = useLocation();
   const {Room} = locaton.state
   const roomimagePath = Room.roomimage?.path

    const [model] = useState(false);
    //const [tempimgSrc, setTempImgSrc] = useState('');
    const {Title} = Typography

   

    return (
        <>
           <div className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-400 ease-in-out ${model ? 'visible opacity-100 scale-100' : 'invisible opacity-0 scale-0'}`}>
                
            </div>

                 <Title level={2}>{Room.name}</Title>
                 <div className="flex flex-col md:flex-row items-center ">
                  
                 <img className='w-full md:w-[960px] h-auto md:h-[400px] rounded-md' src={`https://accofinderbackend-1.onrender.com/${roomimagePath}`} alt='bedroom'/>
            
                </div>

        </>
    );
}

export default Gallery;
