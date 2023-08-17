import { useState } from 'react'
import './App.css'
import Card from './components/Tarjeta/Card'
import Form from './components/Formulario/Form'

function App() {

  const [inscripto, setInscripto] = useState({
    nombre: '',
    materia: ''
  });

  const [state, setState] = useState({
    success: false, 
    fail: false
  })

  const handleSubmit = (e) => {
    console.log("handleSubmit")
    e.preventDefault()


    let nombreInscripto = inscripto.nombre.trim();

    if (nombreInscripto.length > 3 && inscripto.materia.length > 6){    
      setState({success: true, fail: false})
    } else {
      setState({success: false, fail: true})
    }
  }
    
  return (
    <>
    <h2 className="title">Inscripción a Materias</h2>
      <Form setInscripto={setInscripto} handleSubmit={handleSubmit} state={state}/>
      {state.success && <Card inscripto={inscripto} />}
      {state.fail && <p className='errorMsg'>Por favor chequea que los datos ingresados sean correctos.</p>}
    </>
  )
}

export default App
