import React from 'react'
import { useParams,Link } from 'react-router-dom'

function User({users}) {
  const {id} = useParams()
  const user = users.find(item=>item.id === parseInt(id))
  return (
    <div>
        <h2>détail user id : {id}</h2>
        <h2>{user.nom} {user.prenom}</h2>
        <h2>{user.age}</h2>
         <Link to='/users'>retour</Link>
    </div>
  )
}

export default User