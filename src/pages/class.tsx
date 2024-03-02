import React from "react";
import NavBar from "../components/navBar.tsx";
import Avatar from "../components/avatar.tsx";
import imagem from '../assets/react.svg';
import InformationField from "../components/informationField.tsx";
import TextInput from "../components/textInput.tsx";
import StatusDropdown from "../components/statusDropdown.tsx";
import Card from "../components/card.tsx";
import addIcon from "../assets/add.svg";
import presencaIcon from "../assets/presenca.svg";
import { Link } from "react-router-dom";

export default function Class() {
    return (
      <div>
            <header>
                <NavBar name={'Nome'} role={'líder'} avatar={<Avatar profileImage={'imagem'} widthImage={'30px'} heightImage={'30px'}/>}/>
            </header>
            <main className="flex px-28 py-12 h-full">
                <section className=" mt-8 flex flex-col px-12 bg-white shadow-shadow-10 w-[100%] rounded-[20px] p-6">
                    <div>
                        <button className=" rounded-3xl border border-gray-3 px-4 text-[12px] text-gray-3 mb-8"><Link to='/course'>Voltar</Link></button>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[24px]">Pintura - Turma 3</p>
                        <div className='flex w-48 pt-4 justify-end'>
                            <StatusDropdown optionTextSize={'12px'} titleTextSize={'12px'} context={'classes'} position={'absolute'} isDropdown={true}/>
                        </div>
                    </div>
                    <div className="border border-gray-3 w-[100%] h-[1px] mt-4 mb-8"></div>
                    <div className="flex flex-col gap-2 justify-between w-[100%]">
                        <div className="flex justify-between mb-8">
                            <div className="flex flex-col w-[49%] gap-4">
                                <InformationField title={'Dia:'} value={'29/02/2024'} paddingY={'py4'}/>
                                <InformationField title={'Horário:'} value={'16:00'} paddingY={'py4'}/>
                                <InformationField title={'Total de alunos:'} value={'20'} paddingY={'py4'}/>
                            </div>
                            <div className="flex flex-col w-[49%] gap-4">
                                <InformationField title={'Facilitador:'} value={'Maria Flávia Bittencourt '} paddingY={'py4'}/>
                                <InformationField title={'Frequência:'} value={'75%'} paddingY={'py4'}/>
                                <button className="flex justify-center gap-4 shadow-shadow-25 rounded-3xl py-1"><img src={presencaIcon} className='w-[16px] h-[16px] self-center' />Lista de Presença</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <TextInput />
                        </div>
                        <button className="flex justify-center gap-2 my-4 shadow-shadow-25 w-[16%] text-[14px] rounded-3xl py-1"><img src={addIcon} className='w-[16px] h-[16px] self-center' /> Registrar foto</button>
                        <div className='flex justify-evenly'>
                            <Card imageUrl="https://picsum.photos/200/300"/>
                            <Card imageUrl="https://picsum.photos/200/300"/>
                            <Card imageUrl="https://picsum.photos/200/300"/>
                            <Card imageUrl="https://picsum.photos/200/300"/>
                        </div>
                    </div>
                </section>
            </main>
      </div>
    );
  }