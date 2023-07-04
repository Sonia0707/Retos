import React from 'react';
import PropTypes from 'prop-types';
import { Contactos } from '../../models/Contactos';


const Contacto = ({ contacto }) => {
  return (
    <div>
      <h2>
        Nombre: {contacto.nombre}
      </h2>
      <h3>
        Descripción: {contacto.apellido}
      </h3>
      <h4>
        Email: {contacto.email}
      </h4>
      <h5>
        Disponibilidad del contacto: {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}
      </h5>

    </div>
  );
};


Contacto.propTypes = {
  contacto: PropTypes.instanceOf(Contactos)
};


export default Contacto;
