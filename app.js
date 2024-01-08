//importar libreria
const express = require("express");
//iniciar la funcionalidad de express
const app = express();
//definir el puerto que vamos a usar
const PORT = 3000;

//datos para llamar
const aplicaciones = {
1: {"name": "Facebook", "active":"false"},
2: {"name": "Instagram", "active":"true"},
3: {"name": "Whatsapp", "active":"true"}
}
//creamos peticions rest
app.get("/", (request, response) => {
    response.send(`<h1>Buenos dias</h1> <p>has recibido una respuesta al servidor</p>`)
});
app.get("/movies", (request, response)=>{
    response.send(`<label for="lista"><h2>Películas más taquilleras 2023</h1></label>
    <ul id="lista">
    <li><h2>Numero 1: Barbie</h2>
    <p>Beneficios: $1.44B</p></li>
    <li><h2>Numero 2: Super Mario Bros</h2>
    <p>Beneficios: $1.36B</p></li>
    <li><h2>Numero 3: Spiderman in the Spiderverse</h2>
    <p>Beneficios: $0.38B</p></li>
    </ul>
    `);
})
app.get("/books", (request, response)=>{
    response.send(`<label for="books"><h1>Libros más vendidos en 2023</h1></label>
    <ul id="books">
    <li><h2>Numero 1: Las 48 leyes del poder</h2>
    <p>Beneficios: $0.585B</p></li>
    <li><h2>Numero 2: Boulevard Edición Ilustrada TD</h2>
    <p>Beneficios: $0.499B</p></li>
    <li><h2>Numero 3: Biblioteca de la media noche</h2>
    <p>Beneficios: $0.399B</p></li>
    </ul>
    `)
})
//hemos hecho que devuelva en html usando las etiquetas

app.get("/getaplicaciones/:id", (request, response) =>{
    //obtengo el parametro id que me mandan en el request (1, 2, 3...)
    const id = request.params.id;
    //devuelvo el dato que me pide
    response.send(aplicaciones[id]);
});

//indicamos al servidor el puerto que tiene que escuchar
app.listen(PORT, ()=> {
    console.log(`Se ha iniciado el servidor en el puerto: ${PORT}`);
})