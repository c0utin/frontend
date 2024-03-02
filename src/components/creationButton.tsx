import React from "react";
import { Link } from 'react-router-dom';

interface Props {
    name: string;
    route: string;
}

const NamedButton: React.FC<Props> = ({ name, route }) => {
    
    const nameButton = [
        { name: "Criar oficina", route: "/criar-oficina" },
        { name: "Cadastrar membro", route: "/cadastrar-membro" },
        { name: "Observações", route: "/observacoes" },
        { name: "Registrar foto", route: "/registrar-foto" },
        { name: "Cadastrar aluno", route: "/cadastrar-aluno" },
        { name: "Cadastrar turma", route: "/cadastrar-turma" }
    ];

    
    let filteredName = "";

    
    for (let button of nameButton) {
        filteredName = button.name; 
        console.log(filteredName); 
    }

    return (
        <div className=" bg-white w-36 text-gray-4 rounded-2xl shadow-red-2 shadow-2xl">
            <Link to={route} className="flex items-center justify-between p-2">
                <span className="flex align-self">{filteredName}</span>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </Link>
        </div>
    );
}

export default NamedButton;
