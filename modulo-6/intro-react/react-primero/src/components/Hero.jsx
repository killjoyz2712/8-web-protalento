import PropTypes from 'prop-types'

function Hero({titulo}) {
    // const hola = import.meta.env.VITE_APP_NAME
    const description = 'Este es un ejemplo de una webapp con react y sass'
    return (
        <div className='main-block' id='main'>
            <div id='intermedio'>
                <h1 className='title'>{titulo}</h1>
                <p className='subtitulo'>{description}</p>
                <p>Dale click al siguiente boton para comenzar</p>
                <button onClick={()=>alert(titulo)} className='button is-success'>Comenzar mi curso</button>
            </div>
        </div>
    )
}


Hero.propTypes = {
    titulo: PropTypes.string,
}

export default Hero
