//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const Mongo = require("mongoose")
//Creación de la aplicación web
const app = express();

//ROUTES
const RoutesMuseo = require("./routes/rutasMuseo")
const RoutesPelicula = require("./routes/rutasPelicula")


//Middleware
app.use(express.static(path.join(__dirname,'public')))
//Configurar el servidor y que sepa que es un json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//Atender una petición del recurso mipagina

//Desplegara la documentacion
app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','.html'))

    //en vista o por consola

})

//app.use de ROUTES
app.use("/peliculas", RoutesPelicula)
app.use("/museos",RoutesMuseo)


//Que la aplicación escuche peticiones y conecta a base de datos
Mongo.connect(`mongodb://localhost:27017/backend`)
  .then(console.log("Conexion a BD exitosa")
  ,app.listen(8080,()=>{
    console.log("Aplicación web en línea: localhost:8080/")
  })).catch(error=>{console.log(error)})


