import React from 'react';
import './Note.scss';

type NoteProps = {
    children: React.ReactNode;
}

const Note = ({ children }: NoteProps) => {
    return (
        <div className="px-8 my-4 font-thin italic text-white bg-lavender rounded-sm shadow-onyx/25 shadow-md">
            {children}
        </div>
    )
}

export default Note;