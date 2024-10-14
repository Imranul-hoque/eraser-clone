/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types";
import { RefreshCcw } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ExcalIDraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  }
);

const storageKey = "drawing-save-key"

export const Client = () => {

    const [elements, setElements] = useState<readonly ExcalidrawElement[]>([])

    useEffect(() => {
        const savedData = localStorage.getItem(storageKey);
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setElements(parsedData.elements || [])
        }
    },[])

    const saveDrawing = () => {
        const data = { elements };
        localStorage.setItem(storageKey, JSON.stringify(data));
        toast.success("Data has been saved");   
    }

    const handleChange = (
        elements: readonly ExcalidrawElement[],
        appState: AppState,
        files : BinaryFiles
    ) => {
        setElements(elements)
    }

  return (
      <div style={{ height: "550px" }}>
          <div className="w-full flex items-center justify-end pr-3">
              <Button onClick={saveDrawing} variant={"secondary"}>
                  Save <RefreshCcw className="w-4 h-4 ml-2" />
              </Button>
          </div>   
      <ExcalIDraw initialData={{ elements }} onChange={handleChange} />
    </div>
  );
};
