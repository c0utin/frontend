import React from "react";
import defaultImage from '../assets/logoTest.svg';

const Avatar = ({profileImage, widthImage, heightImage}) =>{
    return(
        <>
            <div className={`bg-white rounded-full w-[${widthImage}] h-[${heightImage}] shadow-shadow-25 overflow-hidden flex align-middle`}>
                <img src={profileImage} alt="Foto de Perfil" onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}}/>
            </div>
        </>
    )
}

export default Avatar;