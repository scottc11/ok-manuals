import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

type ManualLinkProps = {
  path: string;
};

const ManualLink: React.FC<ManualLinkProps> = ({ path }) => {
  return (
        <div className="flex flex-col gap-4 my-8 p-8 border-2 border-gray-800 rounded-sm hover:border-lime transition-colors duration-300 bg-gray-950 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:10px_10px] [background-position:0_0]">
            <NavLink to={path} className="block">
                <div className="flex items-center flex-col justify-center gap-4 hover:text-lime transition-colors duration-300">
                <span className="text-4xl font-bungee font-bold">Manual</span>
                    <FaBook className="hover:text-lime transition-colors duration-300" size={172}/>
                </div>
        </NavLink>
    </div>
  );
};

export default ManualLink;


