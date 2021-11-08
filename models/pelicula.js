const mongo = require("mongoose")

const PeliculaSchema = mongo.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        anio: {
            type: Number,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        duracion: {
            type: Number,
            required: true
        },
        clasificacion: {
            type: String,
            required: true
        }
    }, {collection: "peliculas"}
)

module.exports = mongo.model("peliculas", PeliculaSchema)