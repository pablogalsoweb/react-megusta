import { Megusta } from './megusta';
import { useState, useContext } from 'react';
import { TotalMeGustaContext } from '../Context/totalMeGustaContextProvider';

const ANIMALITOS = { 
    'https://cdn2.thedogapi.com' : 'perros',
    'https://cdn2.thecatapi.com' : 'gatos'
 }; 
 
function parseUrlAnimal(urlPrincipal:string){    
         return ANIMALITOS[urlPrincipal]; 
}

function getAnimal(url:string){
    // Encontrar la posición de "/images"
    const indiceImages = url.indexOf("/images");
    const urlPrincipal = url.substring(0, indiceImages);

    return parseUrlAnimal(urlPrincipal);
}

export function Item({item}){
   
    const animal = getAnimal(item.url);

    const [megusta, setMegusta] = useState(false);

    const {totalMegusta, setTotalMegusta} = useContext(TotalMeGustaContext);
 

    const clickMegusta = () => {   
              
        setMegusta(!megusta); 

        const totalMegustaCopia = {...totalMegusta}; 
        if(!megusta == true){    
            totalMegustaCopia[animal] += 1; 
        }
        else{
            totalMegustaCopia[animal] -= 1; 
        } 

        setTotalMegusta(totalMegustaCopia); 
    }


    return (
        <li key={item.id}>
           <img src={item.url} width="100%"/>
            <Megusta megusta={megusta} clickMegusta={clickMegusta}/>
        </li>
    );
}