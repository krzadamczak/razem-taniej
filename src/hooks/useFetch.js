import { useEffect, useState } from "react";
export const useFetch = (url, options = null) => {
    const [data, setData] = useState(options?.defaultState || null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!url) return;
        setIsLoading(true);
        const controller = new AbortController();
        fetch(url, { signal: controller.signal })
            .then((res) => res.json())
            .then((data) => setData(data))
            .finally(() => setIsLoading(false));
        return () => {
            controller.abort();
        };
    }, [url]);

    return [data, isLoading];
};
