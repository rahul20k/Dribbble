import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [location, setLocation] = useState("");

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!file || !location) {
      alert("Please fill in all fields.");
      return;
    }
    const formData = {
      location: location,
      image: file,
    };

    console.log("Form Data:", formData);
    navigate("/position");
  }

  return (
    <div className="bg-white w-full min-h-screen p-5 flex flex-col ">
      <div className="italic font-serif text-3xl text-pink-900">dribbble</div>
      <div className="max-w-2xl w-full bg-white mx-auto p-8">
        <h1 className="font-bold text-4xl mb-4 italic text-center">
          Welcome! Let's create your profile
        </h1>
        <p className="mb-12 text-gray-500 text-center">
          Let others know you better! You can do these later
        </p>
        <h2 className="mb-6 font-bold">Add an avatar</h2>
        <div className="flex flex-row-reverse flex-wrap-reverse justify-center items-center mb-8 ">
          <input type="file" onChange={handleChange} />
          <div className="relative mr-5 mb-2">
            {!file && (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
                <FiCamera size={24} />
              </div>
            )}
            <img
              src={file}
              alt="#@"
              className="rounded-full border-dotted border-2 border-black w-48 h-48 bg-gray-200"
            />
          </div>
        </div>
        <div className="w-full">
          <h2 className="mt-8 mb-6 font-bold">Add your location</h2>
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full bg-white focus:ring-white rounded-md focus:outline-none focus:ring-2 focus:bg-white border-b-2 border-gray-500 mb-4"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          className="bg-pink-500 text-white font-normal mt-3 mb-2 w-full sm:w-[220px] h-10 border rounded-md"
          onClick={handleSubmit}
        >
          Next
        </button>
        <div className="text-gray-500 text-center mt-4">
          <button onClick={() => navigate("/")}>or press Return</button>{" "}
        </div>
      </div>
    </div>
  );
};