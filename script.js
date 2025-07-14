// come vedere il contenuto di una API

async function getDashBoardData(query) {
    console.log(`caricando la dashboard per la query ${query}`)
    const response = await axios.get(`http://localhost:3333/destinations?search=${query}`)
    console.log(response)
}

getDashBoardData("Kyoto")

