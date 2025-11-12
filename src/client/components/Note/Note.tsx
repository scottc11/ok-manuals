import React from 'react';
import './Note.scss';

type NoteProps = {
    children: React.ReactNode;
}

const Note = ({ children }: NoteProps) => {
    return (
        <div className="px-8 my-4 font-thin italic text-white bg-onyx/50 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:10px_10px] [background-position:0_0] rounded-sm shadow-onyx/25 shadow-md">
            {children}
        </div>
    )
}

export default Note;