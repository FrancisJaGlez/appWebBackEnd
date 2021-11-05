const Museo = require("../models/museo")
const mongo = require("mongoose")

exports.postCreateMuseo = async (req, res) => {
    console.log(req.body)

    await Museo.find(req.body).then(resultado => {
        if (resultado.length == 0 || resultado == null){

            const museoNuevo = new Museo(req.body)

            try{
                museoNuevo.save()
                console.log(museoNuevo)
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

exports.getReadMuseo = (req, res) => {


    Pelicula.find().then(resultado => {
        //Que quieres que haga con ese resultado
    })

}

exports.postUpdateMuseo = async (req, res) => {
    console.log(req.body)

    try {
        await Museo.find(req.body).then(resultado =>{
            if (resultado != 0 && resultado != null){
                Museo.findOneAndUpdate(req.body)
                //Mensaje de este item fue actualizado
            } else {
                //Mensaje de este item NO FUE ENCONTRADO
            }
        })
    }catch(error){
        //mensaje de error de catch
    }

}

exports.postDeleteMuseo = async (req, res) => {
    console.log(req.body)

    try {
        await Museo.find(req.body).then(resultado =>{
            if (resultado != 0 && resultado != null){
                Museo.findOneAndDelete(req.body)
                //Mensaje de este item fue eliminado
            } else {
                //Mensaje de este item NO FUE ENCONTRADO
            }
        })
    }catch(error){
        //mensaje de error de catch
    }

}