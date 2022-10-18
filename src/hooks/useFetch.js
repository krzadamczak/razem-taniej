import { useEffect, useState } from "react";
export const useFetch = (url, options) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!url) return;
        setIsLoading(true);
        const controller = new AbortController();
        fetch(url, { ...options, signal: controller.signal })
            .then((res) => res.json())
            .then((data) => setData(data))
            .finally(() => setIsLoading(false));
        return () => {
            controller.abort();
        };
    }, [url, options]);

    return [data, isLoading];
};
