import React from 'react';
import { useForm } from "react-hook-form";
import './Usuarios.css';


const Usuarios = () => {

    var datosUsuarios=[]
    const obtenerData = async (data) => {

        const resp = await fetch("http://localhost:5000/api/seguridad/usuarios", {
            method: 'GET',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => response.json())
        .then(responseJson => {  
            datosUsuarios= responseJson;
            console.log(datosUsuarios)
        });
    
    }
        obtenerData()
  

    return <div className="background">
        <div>
            <h1>Datos</h1>
         </div>
    </div>
}
export default Usuarios;