/*import React, { useState } from 'react';
import './gallery.css'
import { CloseIcon } from '@material-ui/icons';
import p1 from "../images/list";
import p2 from "../images/list";
import p3 from "../images/list";
import p4 from "../images/list";
import p5 from "../images/list";
import p6 from "../images/list";
import p7 from "../images/list";
import p8 from "../images/list";



function Gallery() {
  
  let data =[
    {
        id: 1,
        imgSrc: p1,
    },
    {
        id: 2,
        imgSrc: p2,
    },
    {
        id: 3,
        imgSrc: p3,
    },
    {
        id: 4,
        imgSrc: p4,
    },
    {
        id: 5,
        imgSrc: p5,
    },
    {
        id: 6,
        imgSrc: p6,
    },
    {
        id: 7,
        imgSrc: p7,
    },
    {
        id: 8,
        imgSrc: p8,
    },
    {
        id: 8,
        imgSrc: p8,
    },
  ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg =(imgSrc)=>{
      setTempImgSrc(imgSrc);
      setModel(true);

// this is used to control the state of the page and the pictures 
    }

    return (
      <>
      <div className={model? "model open" :"model"}>
        <img src={tempimgSrc}/>
<CloseIcon onClick={()=> setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index)=>{
          return(
            <div className='pics' key={index} onClick={()=>getImg(img.imgSrc)}>
              <img src={item.imgSrc } style={{width: '100%'}}/>

            </div>


          )
        })}

      </div>
    </>
  )
}

export default Gallery */

import React, { useState } from 'react';
import { CloseIcon } from '@material-ui/icons'; // import close icon from Material UI
import p1 from "../images/list";
import p2 from "../images/list";
import p3 from "../images/list";
import p4 from "../images/list";
import p5 from "../images/list";
import p6 from "../images/list";
import p7 from "../images/list";
import p8 from "../images/list";

function Gallery() {
    let data = [
        { id: 1, imgSrc: p1 },
        { id: 2, imgSrc: p2 },
        { id: 3, imgSrc: p3 },
        { id: 4, imgSrc: p4 },
        { id: 5, imgSrc: p5 },
        { id: 6, imgSrc: p6 },
        { id: 7, imgSrc: p7 },
        { id: 8, imgSrc: p8 }
    ];

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
                    <img src={tempimgSrc} alt="Enlarged view" className="max-w-full max-h-full p-5" />
                    <CloseIcon 
                        onClick={() => setModel(false)} 
                        className="absolute top-2.5 right-2.5 w-8 h-8 p-1.5 bg-gray-700 text-white cursor-pointer"
                    />
                </div>
            </div>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-3 px-3">
                {data.map((item, index) => (
                    <div className="mb-3 transition-opacity duration-350 cursor-pointer hover:opacity-80" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt={`Gallery item ${item.id}`} className="w-full" />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gallery;
