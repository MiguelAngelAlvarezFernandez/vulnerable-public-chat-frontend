import { useState } from "react"

function Users() {

  const [users, setusers] = useState ([])

  function manejadorClick () {
  fetch("https://vulnerable-public-chat-staging.up.railway.app/users/")
  .then(manejadorRespuesta).catch(manejadorError)
  }

  function manejadorRespuesta (respuesta) {
    if (respuesta.ok) {const promesaUsers = respuesta.json()
    promesaUsers.then(manejadorUsers)} else {alert("Error al obtener datos")}
  }

  function manejadorUsers (allUsers) {
      setusers(allUsers)
  }

  function manejadorError (error) {
    alert("El servidor está caido")
  }
    
    return (
      <>
      <button type="button" onClick={manejadorClick}>Lista usuarios</button>
      <ul>
        {users.map((user)=>{return(<li key={user.id}>{user.username}</li>)})}
      </ul>
      </>
    );
  }
  
  export default Users;