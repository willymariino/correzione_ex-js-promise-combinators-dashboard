// come vedere il contenuto di una API

async function getDashBoardData(query) {
    console.log(`caricando la dashboard per la query ${query}`)
    // const response = await axios.get(`http://localhost:3333/destinations?search=${query`)
    // console.log(response)
}

getDashBoardData("Kyoto")

/*
Struttura API

{data: Array(1), status: 200, statusText: 'OK', headers: r, config: {…}, …}config: {transitional: {…}, adapter: Array(3), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}data: [{…}]0: {activities: Array(3), best_time_to_visit: 'March to May, October to November', continent: 'Asia', country: 'Japan', currency: 'Japanese Yen (JPY)', …}activities: (3) ['City walks', 'Traditional tea houses', 'Cultural festivals']best_time_to_visit: "March to May, October to November"continent: "Asia"country: "Japan"currency: "Japanese Yen (JPY)"description: "Kyoto is Japan’s ancient capital, known for its classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses."id: 3image: "https://cdn.pixabay.com/photo/2016/09/03/19/38/japan-1640979_1280.jpg"language: "Japanese"local_dishes: (3) ['Kaiseki', 'Yudofu', 'Matcha desserts']name: "Kyoto"population: "1.46 million"top_attractions: (4) ['Fushimi Inari Shrine', 'Kinkaku-ji (Golden Pavilion)', 'Gion District', 'Arashiyama Bamboo Grove'][[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)headers: r {content-length: '677', content-type: 'application/json; charset=utf-8'}request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}status: 200statusText: "OK"[[Prototype]]: Object

*/