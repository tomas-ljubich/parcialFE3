/* eslint-disable react/prop-types */

import cardStyles from './Card.module.css'

const Card = ({inscripto}) => {
  return (
      <div className={cardStyles.cardContainer}>
        <h5 className={cardStyles.title}>Hola {inscripto.nombre}!</h5>
        <p className={cardStyles.text}>Ya estás inscripto en la materia <b>{inscripto.materia}</b></p>
      </div>
    );
};

export default Card