import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import "react-quill/dist/quill.snow.css";

const Write = () => {

    const [value, setValue] = useState('');

  return (
    <div>
        <div className="content">
            <input type='text' placeholder='Título'/>
            <div className="editorContainer">
                <ReactQuill theme='snow' value={value} onChange={setValue}/>
            </div>
        </div>
        <div className="menu">
            <div className="item">
                <h1>Publicar</h1>
                <span>
                    <b>Estado: </b> Borrador
                </span>
                <span>
                    <b>Visibiidad: </b> Público
                </span>
                <input type="file" name='' id=''/>
                <label htmlFor='file'>Subir foto</label>
                <div className="buttons">
                    <button>Guardar como borrador</button>
                    <button>Actualizar</button>
                </div>
            </div>
            <div className="item">
                <h1>Categoría</h1>

                <input type='radio' name='cat' value='salud' id='salud'/>
                <label htmlFor="salud">Salud</label>
                <input type='radio' name='cat' value='ejercicios' id='ejercicios'/>
                <label htmlFor="salud">Ejercicios</label>
                <input type='radio' name='cat' value='nutricion' id='nutricion'/>
                <label htmlFor="salud">Nutricion</label>

            </div>

        </div>
      
    </div>
  )
}

export default Write
