/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Canvas = () => {
  const canvas = ["data 1", "data 2", "data 3", "data 4", "data 5"];
  const canvasData = [
    {
      canvas: "data 1",
      title: "title 1",
      description: "description 1",
      img: "/src/assets/istock.jpg",
    },
    {
      canvas: "data 2",
      title: "title 2",
      description: "description 2",
      img: "/src/assets/istock1.jpg",
    },
    {
      canvas: "data 3",
      title: "title 3",
      description: "description 3",
      img: "/src/assets/istock2.jpg",
    },
    {
      canvas: "data 4",
      title: "title 4",
      description: "description 4",
      img: "/src/assets/istock3.jpg",
    },
    {
      canvas: "data 5",
      title: "title 5",
      description: "description 5",
      img: "/src/assets/istock2.jpg",
    },
  ];

  const [selectedCanvas, setSelectedCanvas] = useState(null);

  const handleButtonClick = (canvas) => {
    setSelectedCanvas(canvas);
  };

  return (
    <div>
      <h1>Canvas</h1>

      <div className="flex flex-col justify-center relative">
        <div className=" top-0 w-full">
          {selectedCanvas && (
            <div className="relative flex flex-col justify-center">
              <div className="w-full h-96 md:h-[70vh] lg:h-[80vh]">
                <img
                  className="w-full h-full"
                  src={
                    canvasData.find((data) => data.canvas === selectedCanvas)
                      .img
                  }
                  alt="{selectedCanvas}"
                />
              </div>
              <div className="absolute bottom-10 md:bottom-20 lg:bottom-40 left-0 bg-black p-4 pe-10 w-full text-left">
                <h2 className=" bg-red-500 text-white bg-opacity-70 p-2 text-xl font-semibold">
                  {
                    canvasData.find((data) => data.canvas === selectedCanvas)
                      .title
                  }
                </h2>
                <p className=" text-white p-2 text-lg">
                  {
                    canvasData.find((data) => data.canvas === selectedCanvas)
                      .description
                  }
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 w-full flex ">
          {canvas.map((canvasName) => (
            <button
              className={`relative p-2 md:p-5 w-full lg:p-5 border border-black z-10 ${
                selectedCanvas === canvasName
                  ? "bg-red-400 text-white"
                  : "bg-gray-200 text-black"
              }`}
              key={canvasName}
              onClick={() => handleButtonClick(canvasName)}
            >
              {selectedCanvas === canvasName && (
                <span className="absolute left-1/2 h-4 w-4 border-t-4 border-r-4 border-transparent border-l-4 border-red-400 bg-red-400 transform rotate-45 top-1 -translate-y-1/2 z-0"></span>
              )}
              {canvasName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
