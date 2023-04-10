import { useState } from "react";

function NewUser() {

    const [newUser, setnewUser] = useState ("")
    const [newPassword, setnewPassword] = useState ("")

    function manejadorInputUser (event) {
        setnewUser(event.target.value)
    }

    function manejadorInputPassword (event) {
        setnewPassword(event.target.value)
    }

    function manejadorClick () {
        fetch(
            "https://vulnerable-public-chat-staging.up.railway.app/users/",
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        username: newUser,
                        password: newPassword,
                    }
                ),
            }
        ).then(manejadorRespuesta).catch(manejadorError)
    }

    function manejadorRespuesta(respuesta) {
        if (respuesta.ok) {
            setnewUser("")
            setnewPassword("")
        } else {alert("El usuario ya existe")}
    }

    function manejadorError (error) {
        alert("El servidor está caido")
      }

    return (
      <>
      <fieldset> 
            <legend>Nuevo Usuario</legend>
            <input type="text" value={newUser} placeholder="Añade usuario" size="40" maxLength="50" onInput={manejadorInputUser}/>
            <input type="password" value={newPassword} placeholder="Añade contraseña" size="40" maxLength="50" onInput={manejadorInputPassword}/>
            <button type="button" onClick={manejadorClick}>Crear Usuario</button>
        </fieldset>
      </>
    );
  }
  
  export default NewUser;