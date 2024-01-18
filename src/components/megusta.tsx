import { Button } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

 
export function Megusta({megusta, clickMegusta}){
     
    return (
        megusta ? ( <Button onClick={clickMegusta} className='activo' colorScheme='teal' size='lg' mt='2'>
                       <CheckCircleIcon mr={3} /> ya me gusta
                    </Button>) :
                    ( <Button onClick={clickMegusta} colorScheme='teal' size='lg' mt='2'>
                       me gusta
                    </Button>)
        
       
    )
}