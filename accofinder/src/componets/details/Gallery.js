import React, { useState } from 'react';
import { IoClose } from "react-icons/io5"; // import close icon from Material UI
import { list } from '../data/Data';

function Gallery() {
   

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
            <div className="columns-1 sm:columns-2 md:columns-3 gap-3 px-3">
                {list.map((item, index) => (
                    <div className="mb-3 transition-opacity duration-350 cursor-pointer hover:opacity-80" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt={`Gallery item `} className="w-80" />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gallery;
