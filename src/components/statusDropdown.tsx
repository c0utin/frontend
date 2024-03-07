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
};

// Componente que representa o dropdown de status
const StatusDropdown: React.FC<Props> = ({ linkGet, linkPut, optionTextSize, titleTextSize, context, isDropdown}) => {

  // Constantes para armazenar o nome do status e o estado do dropdown
  const [statusName, setStatusName] = useState<string>('Status');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  function setDropdown (isDropdown: boolean): void{
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

  type ColorMap = {
    [key: string]: string;
  };

  const colorMap: ColorMap = {
    'green-2': 'bg-green-2',
    'green-4': 'text-green-4',
    'red-1': 'bg-red-1',
    'red-2': 'text-red-2',
    'gray-2': 'bg-gray-2',
    'gray-4': 'text-gray-4',
  };

  type FillMap = {
    [key: string]: string;
  };

  const fillMap: FillMap = {
   'green-4': '#0B8400',
   'red-2':'#AF0808',
   'gray-4':'#686868',
  };

  return (
    <div className={`w-[90px] h-[20px]`}>
      <button className={`flex items-center ${isDropdown ? 'justify-evenly' : 'justify-center'} ${colorMap[currentStatus.colorBg]} ${colorMap[currentStatus.colorText]} text-[${titleTextSize}] rounded-2xl w-[90px] px-2 h-auto`}
        onClick={() => setDropdown(isDropdown)}>
        {statusName}
        <div className=''>
          {isDropdown ? (isOpen ? <ArrowUp fill={fillMap[currentStatus.colorText]} width={12} height={12}/> : <ArrowDown fill={fillMap[currentStatus.colorText]} width={12} height={12}/>) : null}
        </div>
      </button>

      {isOpen && (
        <div className="bg-white flex flex-col mt-1 relative rounded-2xl w-[90px] shadow-shadow-10 h-auto p-2">
          <ul className='self-center'>
            {allStatus
              .filter(item => item.case && item.case.includes(context))
              .map(item => (
              <li key={item.status} className={`flex ${colorMap[item.colorText]} text-[${optionTextSize}] ${colorMap[item.colorBg]} rounded-2xl w-[70px] h-[20px] justify-center m-[4px]`}>
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