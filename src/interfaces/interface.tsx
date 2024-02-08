export interface MisTipoLista {
    id: number;
    url: string;
    ancho: number;
    alto: number;
}

export interface TotalMeGustaContextType {
    totalMegusta: {
        perros: number;
        gatos: number;
    };
    setTotalMegusta: React.Dispatch<React.SetStateAction<TotalMeGustaState>>;
}

export interface TotalMeGustaState {
    perros: number;
    gatos: number;
}

export interface ItemProps {
    item: MisTipoLista;
}

export interface PropsMeGusta {
    megusta: boolean; 
    clickMegusta: () => void; 
  }