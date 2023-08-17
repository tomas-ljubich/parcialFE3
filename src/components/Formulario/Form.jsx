/* eslint-disable react/prop-types */

import formStyles from './Form.module.css'

const Form = ({setInscripto, handleSubmit}) => {
    return(
        <form className={formStyles.form} onSubmit={handleSubmit}>
            <input className={formStyles.input} onChange={(e) => setInscripto((prevState) => ({...prevState, nombre: e.target.value}))} type="text" placeholder='Ingresa tu nombre' />
            <input className={formStyles.input} onChange={(e) => setInscripto((prevState) => ({...prevState, materia: e.target.value}))} type="text" placeholder='Ingresa la materia' />
            <button className={formStyles.button}>Enviar</button>
        </form>
    )
}

export default Form