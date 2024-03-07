import React, { useState } from 'react';
import searchIcon from "../assets/search.svg"

interface SearchBarProps {
    category: string;
    width: string;
    cards: {category: string}[];
}


const SearchBar: React.FC<SearchBarProps> = ({ category, cards }) => {
    const searchBarProps: { category: string; width: string }[] = [
        { category: "page", width: "90%"},
        { category: "modal", width: "60%"},
        { category: "modal", width: "60%"},
        { category: "modal", width: "60%"},
    ];

    const getWidth = (category: string): string => {
        const matchedRoute = searchBarProps.find(item => item.category === category);
        return matchedRoute ? matchedRoute.width : "80%";
    }

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const items = () => {
        const filteredCards = cards.filter((c) => {
            return c.category.toLowerCase().includes(searchInput.toLowerCase());;
        });

        const presentation = filteredCards.map((c, index) => {
            return (<div key={index} className="m-2 text-sm text-gray-600 align-middle bg-white shadow-shadow-25 rounded-2xl hover:bg-gray-300">{c.category}</div>)
        });

        if (searchInput.length > 0) {
            if (filteredCards.length > 0) {
                return (<div className="w-[100%] text-center rounded-b-lg bg-[#F0EDED] ">{presentation}</div>)
            } else {
                return (<div className="w-[100%] text-center rounded-b-lg bg-[#F0EDED] ">Resultado não encontrado</div>)
            }
        } else {
            return (<div className="w-[100%] text-center rounded-b-lg bg-[#F0EDED] "></div>)
        }
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className={`flex w-[${getWidth(category)}] px-2 py-1 text-gray-4 bg-white border-box rounded-2xl shadow-shadow-25`}>
                    <img src={searchIcon} alt="" className="w-[20px] h-[20px] self-center" />
                    <input type="search" placeholder="" className="focus:outline-none w-[100%] mx-3 rounded-2xl" onChange={handleChange} value={searchInput}></input>
                </div>
            </div>
            <div className="absolute flex justify-center">
                {items()}
            </div>
        </div>
    )
}

export default SearchBar;
