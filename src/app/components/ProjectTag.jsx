import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonClass = isSelected
    ? 'sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white hover:text-black'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white';

  return (
    <button
      onClick={() => onClick(name)}
      className={`flex items-center gap-2 ${buttonClass} rounded-full border-2 py-3 px-6 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
