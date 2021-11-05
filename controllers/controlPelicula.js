const Pelicula = require("../models/pelicula")
const mongo = require("mongoose")

exports.postCreatePelicula = async (req, res) => {
    console.log(req.body)

    await Pelicula.find(req.body).then(resultado => {
        if (resultado.length == 0 || resultado == null){

            const peliculaNueva = new Pelicula(req.body)

            try{
                peliculaNueva.save()
                console.log(peliculaNueva)
                //se puede agregar un mensaje de agregado o un response
            }catch(error){
                console.log(error) //Se puede agregar un codigo de error
            }

        } else {
            //aqui el valor agregado ya EXISTE
            //se puede agregar un response
        }

    }).catch(error =>{
        //Aqui algo fallo puede haber un response o codigo de error
        console.log(error)
    })
}

exports.getReadPelicula = (req, res) => {

    //despliega todos
    Pelicula.find().then(resultado => {
        //Que quieres que haga con ese resultado
    })

}

exports.postUpdatePelicula = async (req, res) => {
    console.log(req.body)

    try {
        await Pelicula.find(req.body).then(resultado =>{
            if (resultado != 0 && resultado != null){
                Pelicula.findOneAndUpdate(req.body)
                //Mensaje de este item fue actualizado
            } else {
                //Mensaje de este item NO FUE ENCONTRADO
            }
        })
    }catch(error){
        //mensaje de error de catch
    }

}

exports.postDeletePelicula = async (req, res) => {
    console.log(req.body)

    try {
        await Pelicula.find(req.body).then(resultado =>{
            if (resultado != 0 && resultado != null){
                Pelicula.findOneAndDelete(req.body)
                //Mensaje de este item fue eliminado
            } else {
                //Mensaje de este item NO FUE ENCONTRADO
            }
        })
    }catch(error){
        //mensaje de error de catch
    }

}