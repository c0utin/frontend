import React from "react";
import NavBar from "../components/navBar";
import Avatar from "../components/avatar.tsx";
import womanAvatar from '../assets/woman.svg';
import CourseCard from "../components/CourseCard.tsx";
import searchIcon from "../assets/search.svg";

// page home screen
export default function Menu() {

  // return the home screen
  return (
    <div>
        <header>
            <NavBar name={'Nome'} role={'líder'} avatar={<Avatar profileImage={'imagem'} widthImage={'30px'} heightImage={'30px'} />} />
        </header>
        <main className="flex flex-col px-14 pt-12 h-full items-center">
            <section className="flex flex-col bg-white shadow-shadow-10 w-[90%] h-auto mt-8 rounded-[20px]">
              <div className='flex justify-evenly'>
                <div className='flex flex-col gap-2'>
                  <p className='text-[28px] pt-8'>Oi, Alana!</p>
                  <p className=''>Você está em Teto. O que você quer ver?</p>
                  <div className='mt-6 mb-8 flex w-[100%] h-auto gap-6'>
                    <button className='bg-white rounded-2xl shadow-shadow-25 w-[50%] h-[60px] text-[14px]'>Membros <br/> da ONG</button>
                    <button className='bg-white rounded-2xl shadow-shadow-25 w-[50%] h-[60px] text-[14px]'>Dados <br/> da ONG</button>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <img src={womanAvatar} className='w-[250-px] h-[250px]'/>
                </div>
              </div>
            </section>

            <section className="flex flex-col bg-white shadow-shadow-10 w-[90%] h-auto mt-8 rounded-[20px] p-8 gap-8">
              <div className='flex w-[100%] h-auto gap-10'>
                <p className='text-[18px] font-medium'>Oficinas</p>
                <div className='flex bg-white w-[70%] shadow-shadow-25 rounded-3xl px-2'><img src={searchIcon} className='w-[20px] h-[20px] self-center' /></div>
                <button className='bg-white w-[15%] shadow-shadow-25 rounded-3xl text-[14px]'>Adicionar Oficina</button>
              </div>
              <div className='flex justify-end gap-4'>
                <button className='rounded-3xl border border-gray-4 w-[10%] text-gray-4'>Todos</button>
                <button className='rounded-3xl border border-gray-4 w-[10%] text-gray-4'>Atuais</button>
                <button className='rounded-3xl border border-gray-4 w-[10%] text-gray-4'>Concluídos</button>
              </div>
              <div className='flex flex-wrap gap-10 justify-center'>
                <CourseCard course='Balé' category='Dança'/>
                <CourseCard course='Futebol' category='Esporte' />
                <CourseCard course='Rap' category='Música' />
                <CourseCard course='Teatro' category='Artes' />
                <CourseCard course='Poesia' category='Cultura' />
                <CourseCard course='Pintura' category='Artes' route='/course'/>
                <CourseCard course='Hip Hop' category='Dança' />
                <CourseCard course='Basquete' category='Esporte' />

              </div>

            </section>
        </main>
    </div>
);
}