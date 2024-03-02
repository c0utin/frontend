import React from "react";
import { Link } from 'react-router-dom';

// component that represents a course card
const CourseCard = ({course, category, route}) =>{

    // array with the colors of the categories
    const categoryColors = [
        {category: 'Artes', color: 'bg-[#00B094]'},
        {category: 'Esporte', color: 'bg-[#F5821E]'},
        {category: 'Dança', color: 'bg-[#63236F]'},
        {category: 'Música', color: 'bg-[#EB1C68]'},
        {category: 'Cultura', color: 'bg-[#FABE28]'}
    ];

    // return the course card
    return (
        <button className='flex bg-white shadow-shadow-25 rounded-3xl w-[200px] h-[100px]'>
            {categoryColors.filter((line) => line.category == category).map((line) => (
                <div className={`${line.color} rounded-l-3xl w-[100px] h-[100px]`}/>
            ))}
                <div className='flex flex-col rounded-r-3xl w-[100px] h-[100px] self-end justify-center pl-6'>
                    <Link to={route}>
                        <p className='mb-1'>{course}</p>
                        <p className='text-[12px]'>{category}</p>
                    </Link>
                </div>
        </button>
    );
}

export default CourseCard;