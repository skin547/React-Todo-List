
const getData = async () => {
    let url = 'https://jsonplaceholder.typicode.com/todos/'
    // let result = [];
    // let data = fetch('https://jsonplaceholder.typicode.com/todos/')
    //     .then(response => response.json())
    //     .then(json => {
    //         result = json.map( (item) => Object.assign( {}, item ))
    //     })
    //     // .then(json => console.log(json))
    //     .catch( error => console.log("ERROR: " + error))
    // console.log(result);
    // return result;
    return await fetch(url)
        .then( res => res.json())
        .then( json => json)
}

export default getData;