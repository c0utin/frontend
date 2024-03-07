import React from "react";
import NavBar from "@/components/navBar";
import Avatar from "@/components/avatar";
import turmaImage from "../assets/turma.svg";
import InformationField from "@/components/informationField";
import StatusDropdown from "@/components/statusDropdown";
import EditIcon from "../assets/lapis.svg";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ArrowDown from "@/components/arrowDown";
import { Link } from "react-router-dom";
import StudentsModal from "../components/StudentsModal";

export default function Course() {

    const arrowColor = '#686868';
    return (
        <div>
            <header>
                <NavBar name={'Nome'} role={'líder'} avatar={<Avatar defaultImage="" profileImage={'imagem'} widthImage={'30px'} heightImage={'30px'} />} />
            </header>
            <main className="flex px-24 pt-14 pb-8 h-full gap-14">
                <section className="mt-8 flex flex-col bg-white shadow-shadow-10 w-[40%] rounded-[20px] p-6 items-center gap-4">
                    <div className="ml-48">
                        <StatusDropdown linkGet="" linkPut="" context={'courses'} optionTextSize={'12px'} titleTextSize={'14px'} isDropdown={true} />
                    </div>
                    <Avatar defaultImage="" profileImage={''} widthImage={'80px'} heightImage={'80px'} />
                    <p className="text-[28px] font-medium">Artes</p>
                    <div className="flex gap-2">
                        <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-6 gap-2">
                            <img src={turmaImage} alt="" className="w-[16px] h-[16px] self-center" />
                            <p>Turmas</p>
                        </button>
                        <StudentsModal/>
                    </div>
                    <div className="border border-gray-3 w-[90%] h-[1px]"></div>
                    <div className="flex flex-col gap-2 justify-between w-[90%]">
                        <InformationField paddingY="" title={'Categoria:'} value={'Artes'} />
                        <InformationField paddingY="" title={'Duração:'} value={'28 Fev 2024 - 30 Fev 2024'} />
                        <InformationField paddingY="" title={'Dias:'} value={'Segunda, Terça, Quarta'} />
                        <InformationField paddingY="" title={'Total de alunos:'} value={'48'} />
                        <InformationField paddingY="" title={'Turmas ativas:'} value={'3'} />
                    </div>
                    <div className="w-[90%]">
                        <button className="flex border border-gray-3 text-gray-3 text-[14px] rounded-2xl px-4 gap-2 items-start">
                            <img src={EditIcon} alt="" className="w-[16px] h-[16px] self-center opacity-40" />
                            <p>Editar</p>
                        </button>
                    </div>
                </section>


                <section className="mt-8 flex flex-col bg-white shadow-shadow-10 w-[60%] rounded-[20px] py-6 px-16 items-center gap-4">
                    <p className="font-medium text-[28px] self-start">Aulas</p>
                    <div className="flex self-end gap-2">
                        <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-4 gap-2">
                            <p>Turma</p>
                            <div className=' scale-75'>
                                <ArrowDown fill={arrowColor} />
                            </div>
                        </button>
                        <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-6 gap-2">
                            <p>Dia</p>
                            <div className=' scale-75'>
                                <ArrowDown fill={arrowColor} />
                            </div>
                        </button>
                        <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-4 gap-2">
                            <p>Situação</p>
                            <div className=' scale-75'>
                                <ArrowDown fill={arrowColor} />
                            </div>
                        </button>
                    </div>
                    <div className="h-[100%] w-[100%] max-h-[300px] overflow-y-scroll">
                        <Table >
                            <TableCaption>Essas são todas as aulas para esta oficina!</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='text-center text-black'>Turma</TableHead>
                                    <TableHead className='text-center text-black'>Dia</TableHead>
                                    <TableHead className='text-center text-black'>Horário</TableHead>
                                    <TableHead className='text-center text-black'>Situação</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium text-center"><Link to="/class">Turma 3</Link></TableCell>
                                    <TableCell className='text-center'>28 Fev 2024</TableCell>
                                    <TableCell className='text-center'>14:30</TableCell>
                                    <TableCell className='flex justify-center'><StatusDropdown linkGet="" linkPut="" optionTextSize="" context="" titleTextSize={'12px'} isDropdown={false} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-center">Turma 1</TableCell>
                                    <TableCell className='text-center'>01 Mar 2024</TableCell>
                                    <TableCell className='text-center'>16:00</TableCell>
                                    <TableCell className='flex justify-center'><StatusDropdown linkGet="" linkPut="" optionTextSize="" context="" titleTextSize={'12px'} isDropdown={false} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-center">Turma 2</TableCell>
                                    <TableCell className='text-center'>05 Mar 2024</TableCell>
                                    <TableCell className='text-center'>14:00</TableCell>
                                    <TableCell className='flex justify-center'><StatusDropdown linkGet="" linkPut="" optionTextSize="" context="" titleTextSize={'12px'} isDropdown={false} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-center">Turma 1</TableCell>
                                    <TableCell className='text-center'>08 Mar 2024</TableCell>
                                    <TableCell className='text-center'>16:00</TableCell>
                                    <TableCell className='flex justify-center'><StatusDropdown linkGet="" linkPut="" optionTextSize="" context="" titleTextSize={'12px'} isDropdown={false} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-center">Turma 2</TableCell>
                                    <TableCell className='text-center'>12 Mar 2024</TableCell>
                                    <TableCell className='text-center'>14:00</TableCell>
                                    <TableCell className='flex justify-center'><StatusDropdown linkGet="" linkPut="" optionTextSize="" context="" titleTextSize={'12px'} isDropdown={false} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-center">Turma 3</TableCell>
                                    <TableCell className='text-center'>13 Mar 2024</TableCell>
                                    <TableCell className='text-center'>14:30</TableCell>
                                    <TableCell className='flex justify-center'><StatusDropdown linkGet="" linkPut="" optionTextSize="" context="" titleTextSize={'12px'} isDropdown={false} /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </main>
        </div>
    );
}