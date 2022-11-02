import { useState } from "react";
export const useApi = (url, options) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const operation = async (url, options) => {
        console.log({ options });
        try {
            setIsLoading(true);
            const response = await fetch(url, { ...options });

            console.log(url);
            const parsedResponse = await response.json();
            setData(parsedResponse);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, error, data, operation };
};
