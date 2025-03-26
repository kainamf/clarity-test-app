import { useEffect } from "react";
import clarity from "@microsoft/clarity";

const useClarity = (clarityId) => {
    useEffect(() => {
        if (!clarityId) {
            console.error("Microsoft Clarity ID não foi fornecido.");
            return;
        }

        clarity.start({ projectId: clarityId });

        console.log("Microsoft Clarity inicializado com ID:", clarityId);
    }, [clarityId]);
};

export default useClarity;
