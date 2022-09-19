import { useEffect, useState } from 'react'
import './App.css';
import { Formulario } from "./componentes/Formulario"
import { Tarea } from './componentes/Tarea'

function App() {

  const [tarea, setTarea] = useState('')
  const [fecha, setFecha] = useState('')
  const [listadoTareas, setListadoTareas] = useState([])

  useEffect(function () {
    setListadoTareas(JSON.parse(localStorage.getItem("tareas")))
  }, [])



  function handleSubmit(e) {
    e.preventDefault()

    if (tarea === '') {
      alert("DEBES PONER UNA TAREA")
      return
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      fecha: fecha,
      completado: false
    }

    const temp = [nuevaTarea, ...listadoTareas]
    setListadoTareas(temp)
    localStorage.setItem("tareas", JSON.stringify(temp));



    setTarea('')

    console.log(listadoTareas)

  }

  function handleChange(e) {
    setTarea(e.target.value)
    console.log(tarea)
  }

  function handleChangeFecha(e) {
    setFecha(e.target.value)
    console.log(tarea)
  }

  function onActualizarTarea(objEditarTarea) {
    const { id, tarea } = objEditarTarea

    const temp = [...listadoTareas]
    const elemento = temp.find(item => item.id === id)
    elemento.tarea = tarea
    localStorage.setItem("tareas", JSON.stringify(temp));


    setListadoTareas(temp)
  }

  function onBorrarTarea(id) {
    const temp = listadoTareas.filter(item => item.id !== id)
    setListadoTareas(temp)
    localStorage.setItem("tareas", JSON.stringify(temp));

  }

  return (
    <>
      <div className='contenedorPrincipal'>
        <h1>To-Do List</h1>
        <div className='contenedorFormulario'>
          <Formulario
            tarea={tarea}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleChangeFecha={handleChangeFecha}
            fecha={fecha}
          />
        </div>

        <div className='contenedorTareas'>
          <h2>Lista De Tareas</h2>
          <div className='contenedorInfoTareas'>
            {
              listadoTareas.map(tarea => (
                <Tarea
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea}
                  onActualizarTarea={onActualizarTarea}
                  onBorrarTarea={onBorrarTarea} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
