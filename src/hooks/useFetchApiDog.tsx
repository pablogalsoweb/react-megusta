import {useEffect, useState} from "react";
 
const APIKEY_DOG = 'live_HvfCJDP9TObmycyHDmxjwVev6xhoCGVP48LQ8o4fLWXA07t23yUujvnx3cfbesLE';

export function useFetchApiDog(limit: number, page: number) : unknown[] {

     interface MisTipoLista {
        id: number;
        url: string;
        ancho: number;
        alto: number;
    }

    const [items, setItems] = useState<MisTipoLista[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);


    const url = 'https://api.thedogapi.com/v1/images/search?api_key=' + APIKEY_DOG + '&limit='+limit+ '&page='+page;

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