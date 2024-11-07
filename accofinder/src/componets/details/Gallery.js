import React, { useState } from 'react';
import { IoClose } from "react-icons/io5"; // import close icon from Material UI
import { cardInfo } from '../data/Data';
import { useLocation } from 'react-router-dom';
import rootShouldForwardProp from '@mui/material/styles/rootShouldForwardProp';

function Gallery() {
   const locaton = useLocation();
   const {Room} = locaton.state

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-400 ease-in-out ${model ? 'visible opacity-100 scale-100' : 'invisible opacity-0 scale-0'}`}>
                <div className="relative">
                    <img src={tempimgSrc} alt="Enlarged view" className="max-w-96 max-h-96 p-5" />
                    <IoClose 
                        onClick={() => setModel(false)} 
                        className="absolute top-2.5 right-2.5 w-8 h-8 p-1.5 bg-gray-700 text-white cursor-pointer"
                    />
                </div>
            </div>
            <h1>{Room.name}</h1>
            <div className="grid-flow-col-dense columns-1 sm:columns-2 md:columns-3 gap-3 px-3">
               <img src={Room.toiletImage}></img>
               <img src={Room.kitchenImg}></img>
              <img src={Room.cover}></img>
            </div>
        </>
    );
}

export default Gallery;
