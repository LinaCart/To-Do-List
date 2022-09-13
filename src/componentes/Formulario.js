export function Formulario(props) {

    const { tarea, handleSubmit, handleChange, fecha, handleChangeFecha} = (props)

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Introduce la tarea"
                onChange={handleChange}
                value={tarea} />

            <input
                type="date"
                placeholder="Introduce la fecha"
                onChange={handleChangeFecha}
                value={fecha} />

            <input
                type="submit"
                className="btn"
                value="Agregar"
                onClick={handleSubmit} />


        </form>
    )
}