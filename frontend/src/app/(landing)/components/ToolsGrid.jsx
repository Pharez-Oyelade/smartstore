import React from "react";

const ToolsGrid = ({ tools }) => {
  return (
    <div className="flex justify-center gap-5 m-20">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-5 bg-blue-500/5 p-6 rounded-xl h-[200px] w-full"
        >
          <div className="flex items-center gap-2 bg-blue-500/10 text-blue-500 p-2 rounded-xl">
            {tool.icon}
          </div>
          <h2 className="text-lg font-bold">{tool.title}</h2>
          <p className="text-muted">{tool.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ToolsGrid;
