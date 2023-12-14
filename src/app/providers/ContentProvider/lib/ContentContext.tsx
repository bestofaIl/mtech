import { createContext } from "react";

export interface columnObject {
    name: string;
    path: string;
    isUnderline?:boolean;
}
export interface columnRecord {
    [key: string]: columnObject
}

export interface ContentContextProps {
    content?: columnRecord;
    setContent?: (content: columnRecord | null) => void;
}

export const ContentContext = createContext<ContentContextProps>({});

export const LOCAL_STORAGE_CONTENT_KEY = "content";
