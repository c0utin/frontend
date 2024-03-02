import { useState } from "react";
import DateRangeComponent from "./DateRange";

// Importing table components from a custom module (assuming it's properly defined)
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Interface for form data
interface FormData {
  step1Data: string;
  step2Data: string;
  step3Data: string;
  step4Data: string;
}

// Functional component for the form stepper
const FormStepper: React.FC = () => {
  // State variables
  const [formData, setFormData] = useState<FormData>({
    step1Data: "",
    step2Data: "",
    step3Data: "",
    step4Data: "",
  });

  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 4; // Number of steps

  // Event handler for input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Event handler for row clicks
  const handleRowClick = (student: string) => {
    const isSelected = selectedRows.includes(student);
    if (isSelected) {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((row) => row !== student),
      );
    } else {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, student]);
    }
  };

  // Function to move the form step
  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);
  const isLastStep = currentStep === totalSteps;

  // Event handler for form button clicks
  const handleButtonClick = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLastStep) {
      setFormData((prevData) => ({
        ...prevData,
        step4Data: JSON.stringify(selectedRows),
      }));
      await new Promise((resolve) => setTimeout(resolve, 0));
      console.log("Dados do formulário:", formData);
    } else {
      nextStep();
    }
  };

  // Mock data
  const mockStudents = [
    "Aluno1",
    "Aluno2",
    "Aluno3",
    "Aluno4",
    "Aluno5",
    "Aluno6",
    "Aluno7",
    "Aluno8",
    "Aluno9",
    "Aluno10",
    "Aluno11",
    "Aluno12",
    "Aluno13",
    "Aluno14",
    "Aluno15",
    "Aluno16",
    "Aluno17",
    "Aluno18",
    "Aluno19",
    "Aluno20",
    "Aluno21",
    "Aluno22",
    "Aluno23",
    "Aluno24",
    "Aluno25",
    "Aluno26",
    "Aluno27",
    "Aluno28",
    "Aluno29",
    "Aluno30",
    "Aluno31",
    "Aluno32",
    "Aluno33",
    "Aluno34",
    "Aluno35",
    "Aluno36",
    "Aluno37",
    "Aluno38",
    "Aluno39",
    "Aluno40",
    "Aluno41",
    "Aluno42",
    "Aluno43",
    "Aluno44",
    "Aluno45",
    "Aluno46",
    "Aluno47",
    "Aluno48",
    "Aluno49",
    "Aluno50",
  ];

  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="max-w-2xl w-full">
          {/* Container Progress bar */}
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <div className="relative h-4">
              <div
                className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
          {/* Container Form */}
          <div
            className="items-center bg-white p-4 rounded shadow-md"
            style={{ minHeight: "600px", maxHeight: "900px:" }}
          >
            <form>
              {currentStep === 1 && (
                <div className="form-step">
                  <label
                    htmlFor="step1Data"
                    className="text-3xl font-bold block text-center"
                  >
                    Quem é o facilitador responsável?
                  </label>
                  <div className="flex my-2">
                    <select
                      id="step1Data"
                      name="step1Data"
                      value={formData.step1Data}
                      onChange={handleChange}
                      className="flex-auto bg-transparent p-5 border rounded-full mt-44 mb-56 mx-10"
                    >
                      <option value="">
                        Não tenho facilitador responsável
                      </option>
                      <option value="Rafael Vasco Silva">
                        Rafael Vasco Silva
                      </option>
                      <option value="Davi Mister Arantes">
                        Davi Mister Arantes
                      </option>
                      <option value="Joana Silva">Joana Silva</option>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="form-step">
                  {currentStep === 2 && (
                    <div className="form-step">
                      <label className="text-3xl font-bold block text-center">
                        Período de data
                      </label>
                      <DateRangeComponent
                        setStep2Data={(data) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            step2Data: data,
                          }))
                        }
                      />
                    </div>
                  )}
                </div>
              )}

              {currentStep === 3 && (
                <div className="form-step">
                  <label
                    htmlFor="step3Data"
                    className="text-3xl font-bold block text-center"
                  >
                    Qual local a turma deverá ir?
                  </label>
                  <input
                    type="text"
                    id="step3Data"
                    name="step3Data"
                    value={formData.step3Data}
                    onChange={handleChange}
                    className="mt-44 mb-56 p-5 border w-full"
                    placeholder="Escreva o local das aulas"
                  />
                </div>
              )}

              {currentStep === 4 && (
                <div className="form-step">
                  <label
                    htmlFor="step4Data"
                    className="text-3xl font-bold block text-center"
                  >
                    Alunos
                  </label>

                  <style>
                    {`
                      .table-container {
                        max-height: 400px; /* Defina a altura máxima desejada */
                        overflow-y: auto;
                      }

                      .button-container {
                        display: flex;
                        justify-content: flex-end;
                      }
                    `}
                  </style>

                  <div className="table-container mt-10 mb-10">
                    <Table>
                      <TableCaption>Alunos disponíveis</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Aluno</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockStudents.map((student) => (
                          <TableRow key={student}>
                            <TableCell className="font-medium">
                              {student}
                            </TableCell>
                            <TableCell>
                              <div className="button-container">
                                <button
                                  type="button"
                                  onClick={() => handleRowClick(student)}
                                  className={`${
                                    selectedRows.includes(student)
                                      ? "bg-gray-4 text-white"
                                      : "bg-gray-2 text-white"
                                  } px-2 py-1 rounded`}
                                >
                                  {selectedRows.includes(student)
                                    ? "Selecionado"
                                    : "Selecionar"}
                                </button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-4 py-2 text-gray-4 rounded-full bg-transparent border"
                >
                  {"Voltar"}
                </button>
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="px-4 py-2 text-gray-4 rounded border rounded-full bg-transparent"
                >
                  {isLastStep ? "Enviar" : "Próximo"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormStepper;
