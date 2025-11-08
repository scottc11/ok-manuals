import React, { createContext, useContext, useState } from 'react';
import { Anchor } from './components/Anchor/Anchor';

// Define the type for the context
export interface ContentsContextType {
    contents: Anchor[];
    updateContents: (contents: Anchor[], anchor: Anchor) => void;
}

export const defaultContentsState: ContentsContextType = { contents: [], updateContents: (contents: Anchor[], anchor: Anchor) => { } };

export const ContentsContext = createContext<ContentsContextType>(defaultContentsState);

type ContextProviderType = {
    children: React.ReactNode;
}

const ContentsContextProvider = ({children}: ContextProviderType) => {
    const [contents, setContents] = useState([]);

    const context = {
        contents: contents,
        updateContents: (contents: Anchor[], anchor: Anchor) => {
            setContents([anchor, ...contents]);
        }
    }

    return (
        <ContentsContext.Provider value={ context }>
            {children}
        </ContentsContext.Provider>
    )
}

export default ContentsContextProvider;