const router = require("express").Router();
const controladorPelicula = require("../controllers/controlPelicula")

router.post("/agregarPelicula", controladorPelicula.postCreatePelicula)
router.get("/mostrarPeliculas", controladorPelicula.getReadPelicula)
router.post("/actualizarPelicula", controladorPelicula.postUpdatePelicula)
router.post("/borrarPelicula", controladorPelicula.postDeletePelicula)

module.exports = router