import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Typography } from 'antd';


function Gallery() {
   const locaton = useLocation();
   const {Room} = locaton.state

    const [model] = useState(false);
    //const [tempimgSrc, setTempImgSrc] = useState('');
    const {Title} = Typography

   

    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-400 ease-in-out ${model ? 'visible opacity-100 scale-100' : 'invisible opacity-0 scale-0'}`}>
                <div className="relative">
                    
                </div>
            </div>

            <Title level={2}>{Room.name}</Title>
            <div className="flex justify-center items-center ">
               <img className=' w-[450px] h-[500px]' src={Room.cover} alt='cover'></img> 
               <img className=' w-[450px] h-[500px]'src={Room.bedrooms} alt='bathroom'></img>            
               <div className=' flex flex-col gap-1'>
                    <img className=' w-96 h-[250px] ' src={Room.kitchenImg} alt='kitchen'></img>
                    <img className=' w-96 h-[250px] 'src={Room.toiletImage} alt='bathroom'></img>
                   
               </div>
            </div>
        </>
    );
}

export default Gallery;
