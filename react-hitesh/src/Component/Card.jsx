import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src={props.image}
          />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">{props.role}</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>{props.year}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
