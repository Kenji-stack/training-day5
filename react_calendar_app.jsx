import { useState } from "react";
import dayjs from "dayjs";

export default function CalendarApp() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");

  const startDay = startOfMonth.day(); // 曜日 (0:日)
  const daysInMonth = currentDate.daysInMonth();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  // カレンダー配列作成
  const calendarDays = [];

  for (let i = 0; i < startDay; i++) {
    calendarDays.push("");
  }

  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="px-4 py-2 bg-gray-200 rounded-xl shadow">←</button>
        <h2 className="text-xl font-bold">
          {currentDate.format("YYYY年 M月")}
        </h2>
        <button onClick={nextMonth} className="px-4 py-2 bg-gray-200 rounded-xl shadow">→</button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center font-semibold">
        {['日','月','火','水','木','金','土'].map((day) => (
          <div key={day} className="py-2">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center mt-2">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`py-3 rounded-xl ${
              day === currentDate.date() ? "bg-blue-200 font-bold" : "bg-gray-100"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
