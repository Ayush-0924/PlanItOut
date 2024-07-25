import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useLocation } from "react-router-dom";
import backgroundImage from "./result-page-img.jpg";

function Result() {
  const { state } = useLocation();
  const data = state?.data || {};
  console.log(data);

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBoFxLbqDPiRQpVHidfE3pt_JskuTg6CV8"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  useEffect(() => {
    async function fetchResult() {
      try {
        const prompt = `i have a special request to you. Actually i am using your api call for my project which is based on planning my tasks based on the start and end time give below
        you have to plan my schedule according to my various tasks,you have to give me a response in a specific/special format so that i could use your response in my project 
        you have to give the response in the text form but that text should signify a table with three colums 
        
        1-date(for example = 23/09/2024)
        2-time-duration(for example = 02.00AM-06.00PM)
        3-tasks (for example= study,works etc)

        my given inputs are -
        1.start-time = ${data.startTime}
        2-start date = ${data.startDate}
        2.end-time = ${data.endTime}
        3.enddate = ${data.endDate}
    
        and my diffrent tasks are separated by, are ${data.task}

        following are the rules you have to strictly follow for the response format
        1-give the table in the text form
        2-use regex such that column should be separated by comas and new line should be used for rows only these two characters should not be used anywhere
        3-give me what i asked for, nothing else. Dont write anything extra just give the table content in the form of text
        4-strictly follow all the abopve points and give the response in the  specified format

        `;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log("Response Text:", text);

        // Parse the response text into an array of tasks
        const parsedTasks = parseResponse(text);
        setTasks(parsedTasks);
      } catch (err) {
        console.error("Failed to process error:", err);
      }finally {
        setLoading(false); // Ensure loading is stopped after fetching (or on error)
      }
    }

    fetchResult(); // Call the async function to fetch result
  }, [data]); // Dependency array includes `data` to re-fetch if input data changes

  function parseResponse(responseText) {
    // Split the response text into lines (rows)
    const rows = responseText.trim().split("\n");

    return rows
      .map((row) => {
        // Split each row into columns by comma
        const columns = row.split(",").map((col) => col.trim());
        return {
          date: columns[0] || "",
          timeDuration: columns[1] || "",
          task: columns[2] || "",
        };
      })
      .filter((task) => task.date && task.timeDuration && task.task); // Filter out incomplete rows
  }
  // undeff();
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
          <div className="text-white text-lg font-bold">Generating Plan...</div>
        </div>
      )}
      <div className="relative p-4 max-w-4xl mx-auto bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 ml-10" style={{ color: '#dfc1b9' }}>YOUR SCHEDULED PLAN...</h1>
        {tasks.length === 0 ? (
          <p>No schedule found. Please check your input and try again.</p>
        ) : (
          <table className="min-w-full border border-gray-300 rounded-lg shadow-md overflow-hidden" >
        <thead style={{ backgroundColor: '#e97079' }}>
          <tr>
            <th className="border-b py-3 px-6 text-left text-gray-700">Date</th>
            <th className="border-b py-3 px-6 text-left text-gray-700">Time Duration</th>
            <th className="border-b py-3 px-6 text-left text-gray-700">Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors duration-300 ease-in-out">
              <td className="border-b py-3 px-6 text-gray-800 hover:text-gray-900 transition-colors duration-300 ease-in-out">{task.date}</td>
              <td className="border-b py-3 px-6 text-gray-800 hover:text-gray-900 transition-colors duration-300 ease-in-out">{task.timeDuration}</td>
              <td className="border-b py-3 px-6 text-gray-800 hover:text-gray-900 transition-colors duration-300 ease-in-out">{task.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
        )}
      </div>
    </div>
  );
}

export default Result;
