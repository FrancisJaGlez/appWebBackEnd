const router = require("express").Router();
const controladorMuseo = require("../controllers/controlMuseo")

router.post("/agregarMuseo", controladorMuseo.postCreateMuseo)
router.get("/mostrarMuseos", controladorMuseo.getReadMuseo)
router.post("/actualizarMuseo", controladorMuseo.postUpdateMuseo)
router.delete("/borrarMuseo", controladorMuseo.postDeleteMuseo)


module.exports = router