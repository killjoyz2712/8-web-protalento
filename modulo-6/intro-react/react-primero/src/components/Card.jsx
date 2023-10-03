import React from 'react'
import PropTypes from 'prop-types'

function Card({texto, imagen}) {
/*
function Card(props) {
const {texto, imagen} = props*/

  const verCard = () =>{
    alert('Una alerta pero imaginate que es un codigo mas complejo')
  }

  /* <div className="card" onClick={verCard}> */
  return (
    <div className="column is-4">

      {texto =='Hola mundo' ? <h1 className='has-text-success'>Hola</h1> : <h1 className='has-text-danger'>Adios</h1>}

      <div className="card" onClick={() => verCard()}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imagen} alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            {texto}
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  texto: PropTypes.string,
  imagen: PropTypes.string,
}

export default Card
