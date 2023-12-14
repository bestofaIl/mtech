import { columnRecord, ContentContext } from "app/providers/ContentProvider/lib/ContentContext";
import { useContext } from "react";

interface UseContentResult {
    content: columnRecord;
    setContent: (content: columnRecord) => void;
}

export function useContent(): UseContentResult {
    const { content, setContent } = useContext(ContentContext);

    return {
        content,
        setContent,
    };
}
