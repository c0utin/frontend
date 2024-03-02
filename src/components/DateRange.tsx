import { useState } from "react";

interface DateRangeComponentProps {
  setStep2Data: (data: string) => void;
}

const DateRangeComponent: React.FC<DateRangeComponentProps> = ({
  setStep2Data,
}) => {
  // States variables
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [filteredDays, setFilteredDays] = useState<
    { date: Date, time: string }[]
  >([]);
  const [globalTime, setGlobalTime] = useState<string>("");

  const handleGenerateArray = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dateArray: Date[] = [];

    while (start <= end) {
      dateArray.push(new Date(start));
      start.setDate(start.getDate() + 1);
    }

    const filteredDaysOfWeek = dateArray.filter((date) => {
      return selectedDays.includes(
        date.toLocaleDateString("en-US", { weekday: "long" }),
      );
    });

    const daysWithTime = filteredDaysOfWeek.map((date) => ({
      date,
      time: globalTime || "00:00", //Use globalTime if set, otherwise default to midnight
    }));

    setFilteredDays(daysWithTime);

    console.log("Array de Dias Filtrado:", daysWithTime);

    setStep2Data(JSON.stringify(daysWithTime));
  };

  const handleDayButtonClick = (day: string) => {
    setSelectedDays((prevSelectedDays) => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter((selectedDay) => selectedDay !== day);
      } else {
        return [...prevSelectedDays, day];
      }
    });
  };

  const handleGlobalTimeChange = (time: string) => {
    setGlobalTime(time);
  };

  // Days of week
  const daysOfWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  // JSX render
  return (
    <div className="m-4">
      <label className="block mb-2">Data de início</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border p-2 mb-4"
      />
      <label className="block mb-2">Data de término</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border p-2 mb-4"
      />
      <label className="block mb-2">Horário para todos os dias:</label>
      <input
        type="time"
        onChange={(e) => handleGlobalTimeChange(e.target.value)}
        className="border p-2 mb-4"
      />
      <div className="flex align-center justify-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="mb-2">
            <button
              type="button"
              onClick={() => handleDayButtonClick(day)}
              className={`flex-auto bg-gray-1 text-gray-4 p-2 mr-2 rounded-lg shadow-shadow-25 h-40 min-w-20 ${
                selectedDays.includes(day) && "bg-gray-2"
              }`}
              style={{ maxWidth: "100px" }}
            >
              {day}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateRangeComponent;
