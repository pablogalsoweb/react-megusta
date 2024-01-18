import {useEffect, useState} from "react";

const APIKEY_CAT = 'live_tLOKv64lQt6H09zEximDtsxRtqPbZuk5Leqzwg33PjyMXFM12Vs9suffRSfErwsX'; 

export function useFetchApiCat(limit: number, page: number) : unknown[] {

     interface MisTipoLista {
        id: number;
        url: string;
        ancho: number;
        alto: number;
    }

    const [items, setItems] = useState<MisTipoLista[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);


    const url = 'https://api.thecatapi.com/v1/images/search?api_key=' + APIKEY_CAT + '&limit='+limit+ '&page='+page;

    useEffect(() => {
        fetchApi(url)
            .then((data) => {
                setCargando(true);
                setItems(prevItem => prevItem.concat(data))
            })
            .catch((error) => setError(error))
            .finally(() => setCargando(false));
    }, [page]);

    return [items, cargando, error]
}


async function fetchApi(url:string){
    const responseApi = await fetch(url);
    const datosApi = await responseApi.json();
    return datosApi;
}