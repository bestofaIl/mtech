import {
    columnRecord,
    ContentContext,
    LOCAL_STORAGE_CONTENT_KEY,
} from "app/providers/ContentProvider/lib/ContentContext";
import {
    FC, ReactNode, useMemo, useState,
} from "react";

const defaultContent = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTENT_KEY)) as columnRecord || null;

interface Props {
    children: ReactNode;
}

const ContentProvider: FC<Props> = ({ children }) => {
    const [content, setContent] = useState<columnRecord>(defaultContent);

    const defaultProps = useMemo(() => ({
        content,
        setContent,
    }), [content]);

    return (
        <ContentContext.Provider value={defaultProps}>
            {children}
        </ContentContext.Provider>
    );
};

export default ContentProvider;
