import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import About from './About'
import Blog from './Blog'
import Users from './Users'
import User from './User'
function App() {
    const liste = [
                    {id:1,nom:'ali',prenom:'kamal',age:20},
                    {id:2,nom:'ourihi',prenom:'hichal',age:25},
                    {id:3,nom:'alaoui',prenom:'nadia',age:30},
                   ]
  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/about' element= {<About/>} />
            <Route path='/blog' element= {<Blog/>} />
            <Route path='/users' element= {<Users users = {liste}/>} />
            <Route path='/users/:id' element= {<User users={liste}/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App