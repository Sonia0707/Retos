import React from 'react';
import { Contactos } from '../../models/Contactos';
import Contacto from '../pure/component-A';


const ListContactos = () => {

  const defaultContact = new Contactos('Sonia', 'vidal', 'sonia@prueba.com', true);

  return (
    <div>
      <div>
        <h1>Your Contactos:</h1>
      </div>
      {/**Aplicar MAP */}
      <Contacto contacto={defaultContact}></Contacto>
    </div>
  );
};


export default ListContactos;
