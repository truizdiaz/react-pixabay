import React from 'react';
import Imagen from './Imagen'

const ListadoImagenes = ({imagenes}) => {
    return ( 
        <div className="col-lg-12 p5 row">
              {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
     );
}
 
export default ListadoImagenes;