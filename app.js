// Modulos
const express = require('express');
let path = require('path')
const app = express();

const PORT = 3000;


//fucion de rutas
let enviarHTML = (url, archivo) => {
    app.get(url, (req, res) => {
        res.sendFile(path.join(__dirname,`./views/${archivo}`))

    })
}

// ROUTES
enviarHTML('/','home.html')
enviarHTML('/login','login.html')
enviarHTML('/register','register.html')

//Server
app.listen(PORT, ()=>  console.log(`
servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`));

//middlewares
app.use(express.static('public'));