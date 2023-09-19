const express = require ('express')

const app = express()

//http://localhost:3000/tonatiuh/123
app.get('/', (req, response) =>{
    response.json({msg: 'hello GET'})
})
app.get('/:user/:password', (req, response) =>{
    const {user, password} = req.params
    if (user == 'tonatiuh' && password =='123'){
        response.json({msg: 'Inicio de sesion exitoso'})
        return
    }
    response.json({msg: 'fallo en el usuario o contraseña'})
})

app.post('/', (req, response) =>{
    response.json({msg: 'hello POST'})
})
app.put('/', (req, response) =>{
    response.json({msg:'Hola PUT'})
})
app.patch('/', (req, response) =>{
    response.json({msg:'Hola PATCH'})
})
app.delete('/', (req, response) =>{
    response.json({msg:'Hola DELETE'})
})

/**
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})