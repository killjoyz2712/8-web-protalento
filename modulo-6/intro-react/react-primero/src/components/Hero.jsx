
function Hero() {
    const hola = import.meta.env.VITE_APP_NAME
    const description = 'Este es un ejemplo de una webapp con react y sass'

    return (
        <div className='main-block' id='main'>
            <div id='intermedio'>
                <h1 className='title'>{hola}</h1>
                <p className='subtitulo'>{description}</p>
                <p>Dale click al siguiente boton para comenzar</p>
                <button className='button is-success'>Comenzar mi curso</button>
            </div>
        </div>
    )
}

export default Hero
