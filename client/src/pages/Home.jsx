import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateInput from "../components/DateInput";
import TimeInput from "../components/TimeInput";
import backgroundImage from "./bcd.jpg";


const Home = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      startDate,
      endDate,
      startTime,
      endTime,
      task,
    };

    // Navigate to the Result route and pass the data

    navigate("/result", { state: { data } });
  };
  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Top Part */}
      <div
        className="top-part flex items-center justify-center text-color: #fffacd"
        style={{ height: "40%", color: "#ffc94d" }}
      >
        <div className="relative top--9 left--9 mr-80">
          <h1
            className="text-8xl font-bold text-center px-4 uppercase tracking-wide"
            style={{
              color: "#ffc94d",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            WANT TO PLAN?
          </h1>
        </div>
      </div>

      {/* Bottom Part */}
       <div className="bottom-part flex" style={{ height: '60%' }}>
      {/* Bottom Left */}
      <div className="bottom-left flex flex-col w-3/5 p-4 bg-opacity-80 border-r border-gray-300">
        <div className="w-3/5 mb-4 ml-10 mt-10 p-6 border-2 border-gray-300 rounded-lg shadow-lg enlarge-on-hover ">
          <div className="flex flex-col">
            <div className="flex gap-4 mb-4">
              <DateInput
                label="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <DateInput
                label="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex gap-4">
                <TimeInput
                  label="Start Time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
                <TimeInput
                  label="End Time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Bottom Right */}
        <div className="bottom-right flex-1 p-4 bg-opacity-80 ">
          <div className="w-4/5 h-3/5 mb-4 ml-10 mt-10 border border-gray-300 rounded-lg shadow-lg p-4 enlarge-on-hover" >
            <div className="mb-4">
              <label className="block font-bold text-white">WRITE YOUR TASK...</label>
              <textarea
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="mt-1 p-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md w-full xy"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4 mr-20">
            <button
              onClick={handleSubmit}
              className="bg-[#ffc94d] text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
            >
              Make Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
