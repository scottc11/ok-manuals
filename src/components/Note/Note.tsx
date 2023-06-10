import React from 'react';
import './Note.scss';

type NoteProps = {
    children: React.ReactNode;
}

const Note = ({ children }: NoteProps) => {
    return (
        <div className="note">
            {children}
        </div>
    )
}

export default Note;