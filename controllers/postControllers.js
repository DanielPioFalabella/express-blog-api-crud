const postArray = require("./../data/postArray")

// index
function index (req,res) {
    res.json(postArray)
}

// store
function store (req,res) {
    res.send("creazione nuvo post")
}

// show
function show (req,res) {
    // mi trasformo l'id in numero
    const id = parseInt(req.params.id)
    // mi trovo l'id che mi interessa nel postArray e faccio in modo che coincida
    const post = postArray.find(post => post.id === id)

    // se l'id nn è presente faccio tornare errore in pagina
    if(!post) {
        res.status(404)

        return res.json({
            error: "Not found",
            message: "pagina non trovata"
        })
    }

    res.json(post)
}

// modify
function modify (req,res) {
    res.send("modifica integrale post " + req.params.id)
}

// upgrade
function upgrade (req,res) {
    res.send("modifica parziale post " + req.params.id)
}

// destroy
function destroy (req,res) {
    const id = parseInt(req.params.id)
    const post = postArray.find(post => post.id === id)

    // gli dico cosa deve darmi se nn trova la pagina
    if(!post) {
        res.status(404)

        return res.json({
            error: "Not found",
            message: "nessun contenuto"
        })
    }

    postArray.splice(postArray.indexOf(post), 1)
    console.log(postArray);

    res.sendStatus(204)
}

module.exports = {index, store, show, modify, upgrade, destroy}