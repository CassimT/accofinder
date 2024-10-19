import React from "react";

const Button = (props)=>{
    return(
        <div>
            <button className='px-4 py-2 bg-black text-white font-semibold border border-black rounded-2xl  transiton-all'>
                {props.title}
            </button>
        </div>
    )

}
export default Button;