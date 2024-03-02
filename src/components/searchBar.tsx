import React, { useState } from "react";

export function SearchBar() {

    const [searchInput, setSearchInput] = useState("");
    let workshops = [
        { workshop: "pintura" },
        { workshop: "futebol" },
        { workshop: "teatro" },
        { workshop: "jazz" },
        { workshop: "canto" },
        { workshop: "violão" },
        { workshop: "vôlei" },
        { workshop: "programação" },
        { workshop: "crochê" },
        { workshop: "piano" },
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    function items() {

        let filteredWorkshops = workshops.filter((w) => {
            return w.workshop.match(searchInput.toLowerCase());
        });


        let presentation = filteredWorkshops.map((w) => {
            return (<div className="m-2 text-sm text-gray-600 align-middle bg-white shadow shadow-gray-300 rounded-2xl hover:bg-gray-300">{w.workshop}</div>)
        })


        if (searchInput.length > 0) {
            if (filteredWorkshops.length > 0) {
                return (<div className="w-1/5 text-center rounded-b-lg bg-[#F0EDED] ">{presentation}</div>)
            } else {
                return (<div className="w-1/5 text-center rounded-b-lg bg-[#F0EDED] ">Resultado não encontrado</div>)
            }
        } else {
            return (<div className="w-1/5 text-center rounded-b-lg bg-[#F0EDED] "></div>)
        }
    }


    return (
        <div>
            {/* // search bar */}
            <div className="flex justify-center">
                <div className=" flex w-1/5 px-2 text-gray-300 bg-white shadow border-box rounded-2xl shadow-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                    <input type="search" placeholder="" className=" focus:outline-none w-4/5 mx-3 rounded-2xl" onChange={handleChange} value={searchInput}></input>
                </div>
            </div>
            {/* // result bar */}
            <div className="flex justify-center">
                {items()}
            </div>
        </div>
    )
}