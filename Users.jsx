import React from 'react'
import { Link } from 'react-router-dom'

function Users({users}) {
  return (
    <div>
      <h2>liste users : </h2>
      <ul>
          {users.map(item => <li key={item.id}>{item.nom}|{item.prenom} <Link to={`/users/${item.id}`}>détail</Link></li>)}
      </ul>
    </div>
  )
}

export default Users