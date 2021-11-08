const mongo = require("mongoose")

const MuseoSchema = mongo.Schema (
    {
        nombre: {
            type: String,
            required: true
        },
        ubicacion : {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        }
    }, {collection: "museos"}
)

module.exports = mongo.model("museos", MuseoSchema)