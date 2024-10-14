"use client";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

const storageKey = "blocknote-storage-key";

export const Client = () => {

    const editor = useCreateBlockNote({
        initialContent : JSON.parse(localStorage.getItem(storageKey)!)
    });

    const handleChange = () => {
        localStorage.setItem(storageKey, JSON.stringify(editor.document));
    }

    return (
        <div className="w-full max-w-5xl mx-auto">
            <BlockNoteView editor={editor} theme={"light"} onChange={handleChange} />;
        </div>
    )
};
