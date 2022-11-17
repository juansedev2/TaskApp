function Card({tarea}) {
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
        </div>
    );
}

export default Card;