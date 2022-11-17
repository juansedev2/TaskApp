function Card({tarea, eliminarTarea}) {
    return(
        <div>
          <h1>{tarea.titulo}</h1>
          <textarea name="descripcion" 
            id="drescripcion" cols="30" 
            rows="5" 
            defaultValue={tarea.descripcion}
            disabled
          >
          </textarea>
          <button onClick={() => eliminarTarea(tarea.id)}>Eliminar Tarea</button>
        </div>
    );
}

export default Card;