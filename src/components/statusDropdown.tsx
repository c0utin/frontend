import React, { useEffect, useState } from 'react';
import ArrowDown from './arrowDown';
import ArrowUp from './arrowUp';

type Status = {
  status: string;
  colorBg: string;
  colorText: string;
  case: string[];
};

type Props = {
  linkGet: string;
  linkPut: string;
  optionTextSize: string;
  titleTextSize: string;
  context: string;
  isDropdown: boolean;
  position: string;
};

// Componente que representa o dropdown de status
const StatusDropdown: React.FC<Props> = ({ linkGet, linkPut, optionTextSize, titleTextSize, context, isDropdown, position}) => {
  // Constantes para armazenar o nome do status e o estado do dropdown
  const [statusName, setStatusName] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  function setDropdown (isDropdown){
    if(isDropdown){
      setIsOpen(!isOpen)
    }else{
      setIsOpen(false)
    }
  }

  // Função para encontrar o nome do status
  const findStatusName = () => {
    setStatusName(statusName);
  }

  // Chama a função para mudar o nome do status quando o componente é montado
  useEffect(() => {
    findStatusName();
  }, []);

  const allStatus = [
    { status: 'Ativo', colorBg: 'green-2', colorText: 'green-4', case: ['members', 'courses'] },
    { status: 'Inativo', colorBg: 'red-1', colorText: 'red-2', case: ['members', 'courses'] },
    { status: 'Evasão', colorBg: 'gray-2', colorText: 'gray-4', case: ['members'] },
    { status: 'Agendada', colorBg: 'gray-2', colorText: 'gray-4', case: ['classes'] },
    { status: 'Concluída', colorBg: 'green-2', colorText: 'green-4', case: ['classes']},
    { status: 'Cancelada', colorBg: 'red-1', colorText: 'red-2', case: ['classes']},
  ];

  const currentStatus = allStatus.find(item => item.status === statusName) || allStatus[0];

  const colorMap = {
    'green-2': 'bg-green-2',
    'green-4': 'text-green-4',
    'red-1': 'bg-red-1',
    'red-2': 'text-red-2',
    'gray-2': 'bg-gray-2',
    'gray-4': 'text-gray-4',
  };

  const fillMap = {
   'green-4': '#0B8400',
   'red-2':'#AF0808',
   'gray-4':'#686868',
  };

  return (
    <div className={`${position} bg-white rounded-2xl w-[80px] ${isOpen ? 'h-auto shadow-shadow-10' : 'h-[20px]'}`}>
      <button className={`flex justify-evenly pl-2 ${colorMap[currentStatus.colorBg]} ${colorMap[currentStatus.colorText]} text-[${titleTextSize}] rounded-2xl w-[80px] h-[20px] justify-center`} onClick={() => setDropdown(isDropdown)}>
        {statusName}
        <div className='scale-50'>
          {isDropdown ? (isOpen ? <ArrowUp fill={fillMap[currentStatus.colorText]}/> : <ArrowDown fill={fillMap[currentStatus.colorText]}/>) : null}
        </div>
      </button>
      {isOpen && (
        <div className="p-2">
          <ul className='flex flex-col items-center'>
            {allStatus
              .filter(item => item.case && item.case.includes(context))
              .map(item => (
              <li key={item.status} className={`flex ${colorMap[item.colorText]} text-[${optionTextSize}] ${colorMap[item.colorBg]} rounded-2xl w-[60px] h-[20px] justify-center m-[2px]`}>
                <button onClick={() => {setStatusName(item.status); setIsOpen(false);}}>{item.status}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StatusDropdown;