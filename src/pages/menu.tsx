import React from "react";
import NavBar from "../components/navBar";
import Avatar from "../components/avatar.tsx";
import womanAvatar from '../assets/woman.svg';
import CourseCard from "../components/CourseCard.tsx";
import CreationButton from "../components/creationButton.tsx";
import SearchBar from "../components/searchBar.tsx";
import SwitchFilter from "@/components/SwitchFilter.tsx";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "@/components/footer.tsx";
import Course from "./course.tsx";


// page home screen
export default function Menu() {

  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  //GET simulation
  useEffect(() => {
    const getCards = async () => {
      const response = [
        { id: 1, status: "ativo", course: "Curso 1", route: "", category: "Artes" },
        { id: 2, status: "inativo", course: "Curso 2", route: "", category: "Esporte" },
        { id: 3, status: "ativo", course: "Curso 3", route: "", category: "Dança" },
        { id: 4, status: "inativo", course: "Curso 4", route: "", category: "Música" },
        { id: 5, status: "ativo", course: "Curso 5", route: "", category: "Cultura" },
      ];

      setCards(response);
    };

    getCards();
  }, []);

  // return the home screen
  return (
    <div>
      <header>
        <NavBar name={'Nome'} role={'líder'} avatar={<Avatar defaultImage="" profileImage={'imagem'} widthImage={'30px'} heightImage={'30px'} />} />
      </header>
      <main className="flex flex-col px-14 pt-12 pb-8 h-full items-center">
        <section className="flex flex-col bg-white shadow-shadow-10 w-[70%] h-auto mt-8 rounded-[20px]">
          <div className='flex justify-evenly'>
            <div className='flex flex-col gap-2'>
              <p className='text-[28px] pt-8'>Oi, Alana!</p>
              <p className=''>Você está em Teto. O que você quer ver?</p>
              <div className='mt-6 mb-8 flex w-[100%] h-auto gap-6'>
                <button className='bg-white rounded-2xl shadow-shadow-25 w-[50%] h-[60px] text-[14px]'>Membros <br /> da ONG</button>
                <button className='bg-white rounded-2xl shadow-shadow-25 w-[50%] h-[60px] text-[14px]'>Dados <br /> da ONG</button>
              </div>
            </div>
            <div className='flex flex-col'>
              <img src={womanAvatar} className='w-[250-px] h-[250px]' />
            </div>
          </div>
        </section>

        <section className="flex flex-col bg-white shadow-shadow-10 w-[70%] h-auto mt-8 rounded-[20px] p-8 gap-8">
          <div className='flex w-[100%] h-auto justify-between pl-3'>
            <p className='text-[24px] font-medium'>Oficinas</p>
            <div className='w-[50%]'>
              <SearchBar cards={cards} category={"page"} width={"90%"} />
            </div>
            <CreationButton name={'Criar oficina'} route={'/criar-oficina'} />
          </div>
          <div className='flex justify-end gap-4'>
            <SwitchFilter cards={cards} onFilterChange={setFilteredCards} />
          </div>
          <div className='flex flex-wrap gap-10 justify-center'>
            {filteredCards.map((card: { id: number, status: string, course: string, route: string, category: string }) => (
              <CourseCard key={card.id} card={card} />
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}