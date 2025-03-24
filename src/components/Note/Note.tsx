import React from 'react';
import './Note.scss';

type NoteProps = {
    children: React.ReactNode;
}

const Note = ({ children }: NoteProps) => {
    return (
        <div className="px-8 my-4 font-thin italic text-white bg-lava/70 rounded-sm">
            {children}
        </div>
    )
}

export default Note;