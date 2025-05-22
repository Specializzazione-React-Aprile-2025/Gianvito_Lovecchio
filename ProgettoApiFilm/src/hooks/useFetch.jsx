import { useState, useEffect } from "react"
import { config } from '../config/config.jsx';

function useFetch(url) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            //chiamata API
            const response = await fetch(url, config);
            //conversione in .json
            const json = await response.json();
            // aggiornamento dello stato 
            setData(json);
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return {
        data, loading
    }
}

export default useFetch