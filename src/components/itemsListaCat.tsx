

import { Item } from './item';
import {useFetchApiCat} from "../hooks/useFetchApiCat";

import { Loading } from './loading';
import {useState} from "react";

import {MisTipoLista} from "../interfaces/interface"

const LIMIT_ITEMS = 2;
 
export function ItemsListaCat(){

    const [page, setPage] = useState(0);
    const [items, cargando, error]: [MisTipoLista[], boolean,  boolean | null] = useFetchApiCat(LIMIT_ITEMS, page);

    const getMoreData = () => {
        setPage(page+1);
    };

    return (
        <>
        { error && <p Style="color:red">{error}</p>}
          <ul>
              {
                  items.map(
                      (item) => (<Item key={item.url} item = {item}/> )
                  )
              }
          </ul>
            { cargando && <Loading/>}
            <button onClick={getMoreData}>Cargar más</button>
        </>
    );
}